import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import GameList from "./Pages/GameList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ProfilePage from "./Pages/ProfilePage";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import firebase from "./services/firebase";

function App() {
  const [playerChoice, setplayerChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home/login" element={<Login />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="gamelist" element={<GameList />} />
          <Route path="gamelist/gameplay" element={<Game playerChoice={playerChoice} score={score} setScore={setScore} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="startgame" element={<Play setplayerChoice={setplayerChoice} />} />
          <Route path="gameplay" element={<Game playerChoice={playerChoice} score={score} setScore={setScore} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
