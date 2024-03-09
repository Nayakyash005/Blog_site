import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// Import path module
import path from "path";
import exp from "constants";

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
  // Define baseurl
});

app.get("/user/name", async (req, res) => {
  let result = await db.query("SELECt * FROM blog_data");
  //   console.log(result.rows);
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
  // console.log(result.rows);
  res.json(result.rows);
});
db.connect();
const baseurl = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "build"
);
app.use(express.static(baseurl));

app.get("/submit", async (req, res) => {
  const result = req.query;
  console.log("call hua", result);
  await db.query(
    "INSERT INTO blog_data(name, email, phone, password) VALUES($1,$2,$3,$4)",
    [result.name, result.email, result.phone, result.password]
  );

  let id = await db.query("SELECT id FROM blog_data WHERE(name = $1)", [
    result.name,
  ]);
  // console.log(id.rows);
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
  console.log(result.name, "and", name.rows);
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
app.get("*", (req, res) => {
  res.sendFile(path.join(baseurl, "index.html")); // Use path.join to correctly construct file path
});

app.listen(port, () => {
  console.log("your site is live at localhost:5000");
});
