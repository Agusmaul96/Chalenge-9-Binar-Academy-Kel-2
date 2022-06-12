
import React from "react"
import "./App.css";
import HomePage from "./Pages/Homepage";
import GameList from "./Pages/GameList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="gamelist" element={<GameList/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="gameplay" element={<GameList/>}/>
    </Routes></Router>
      
  );
}
export default App;
