import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// Import path module
import path from "path";
import exp from "constants";
// Define baseurl

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  database: "world",
  host: "localhost",
  port: 5432,
  password: "123456",
  user: "postgres",
});

db.connect();

const baseurl = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "build"
);
app.use(express.static(baseurl));

// ----------------------to Get Blog_data --------------------------------//

app.get("/user/name", async (req, res) => {
  let result = await db.query("SELECt * FROM blog_data");
  res.json(result.rows);
});

app.get("/user/:id", async (req, res) => {
  const user = req.params.id;
  let result = await db.query("SELECT blog,title FROM blogs WHERE (id =$1)", [
    user,
  ]);
  res.json(result.rows);
});

app.get("/Auth/:name", async (req, res) => {
  const user = req.params.name;
  let result = await db.query("SELECT * FROM blog_data WHERE (email =$1)", [
    user,
  ]);
  res.json(result.rows);
});

app.get("/user/details/:id", async (req, res) => {
  const user = req.params.id;
  if (user === undefined) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  let result = await db.query("SELECT blog,title FROM blogs WHERE (id =$1)", [
    user,
  ]);
  res.json(result.rows);
});

app.get("/user/:id/:title", async (req, res) => {
  const id = req.params.id;
  const title = req.params.title;

  let result = await db.query(
    "SELECt * FROM blog_data WHERE id =$1 and title = $2",
    [id, title]
  );
  res.json(result.rows);
});
//----------get data from user if exists----------------//

app.get("/submit", async (req, res) => {
  const result = req.query;
  await db.query(
    "INSERT INTO blog_data(name, email, phone, password) VALUES($1,$2,$3,$4)",
    [result.name, result.email, result.phone, result.password]
  );

  let id = await db.query("SELECT id FROM blog_data WHERE(name = $1)", [
    result.name,
  ]);
  await db.query("INSERT INTO blogs(id,blog,title) values($1,$2,$3)", [
    id.rows[0].id,
    result.feedback,
    result.title,
  ]);
  res.redirect("/");
});

app.get("/additon", async (req, res) => {
  let result = req.query;
  const name = await db.query("SELECT * FROM blog_data WHERE name = $1", [
    result.name,
  ]);
  if (name.rows) {
    await db.query("INSERT INTO blogs(id,blog,title) values($1,$2,$3)", [
      name.rows[0].id,
      result.feedback,
      result.title,
    ]);
    res.redirect("/");
  } else {
    res.send("GO Login First");
  }
});

//------------------to delete the data of the user ----------.//

app.get("/delete/:id/:title", async (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  await db.query("DELETE FROM blogs WHERE title = $1", [title]);
});
app.get("*", (req, res) => {
  res.sendFile(path.join(baseurl, "index.html"));
});

app.listen(port, () => {
  console.log("your site is live at localhost:5000");
});
