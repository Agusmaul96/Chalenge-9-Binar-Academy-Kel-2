
import React, { useState } from "react"
import "./App.css";
import HomePage from "./Pages/Homepage";
import GameList from "./Pages/GameList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from './Pages/Home';
import Play from './Pages/Play';
import Game from './Pages/Game';


function App() {
  const [playerChoice, setplayerChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="gamelist" element={<GameList />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="gameplay" element={<GameList />} />
        <Route path="/startgame" element={<Play setplayerChoice={setplayerChoice} />} />
        <Route path="/game" element={<Game playerChoice={playerChoice} score={score} setScore={setScore} />} />
      </Routes>
    </Router>
  );
}
export default App;
