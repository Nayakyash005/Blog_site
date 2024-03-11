import React from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Note from "./components/Note";

function Home() {
  return (
    <div style={{ minHeight: "100%" }}>
      <Heading />
      <Note />
      <Footer />
    </div>
  );
}

export default Home;
