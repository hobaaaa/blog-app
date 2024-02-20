import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Değişiklik burada
import "./App.css";

import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
