
import React from "react"
import "./App.css";
import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";
import GameList from "./Pages/GameList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import firebase from "./services/firebase";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="gamelist" element={<GameList/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="gameplay" element={<GameList/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
