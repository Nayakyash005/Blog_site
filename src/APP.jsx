import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Add from "./Add";
import "./index.css";

export const API_URL = "http://localhost:5000";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        {/* <Route path="/delete" element={<Add />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
