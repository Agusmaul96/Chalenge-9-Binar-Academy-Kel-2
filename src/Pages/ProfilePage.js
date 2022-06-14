import React, { useState } from "react";
import "./style/profile.css";

function ProfilePage() {
  const [name, SetName] = useState("Your Name");
  const [program, SetProgram] = useState("Your Program");
  const [score, SetScore] = useState("Your Score");

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="" alt=""></img>
        </div>
      </div>
      <div className="lower-container">
        <h3> {name}</h3>
        <h4> {program} </h4>
        <h4> {score} </h4>
      </div>
    </div>
  );
}

export default ProfilePage;
