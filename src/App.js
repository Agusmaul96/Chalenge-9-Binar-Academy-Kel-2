import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage";
import GameList from "./Pages/GameList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gamelist" element={<GameList />} />
        <Route path="gameplay" element={<GameList />} />
        <Route path="login" element={<GameList />} />
        <Route path="signup" element={<GameList />} />
      </Routes>
    </Router>
  );
}

export default App;
