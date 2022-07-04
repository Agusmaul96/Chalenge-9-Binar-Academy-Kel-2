import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import firebase from "./services/firebase";
import {
  getDatabase,
  ref,
  child,
  get,
  remove,
  update,
} from "firebase/database";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import GameList from "./Pages/GameList";
import Game from "./Pages/Game";
import Footer from "./Pages/Footer";

// import ProfilePage from "./Pages/ProfilePage";
// import Play from "./Pages/Play";
// import Header from "./Pages/Header";
// import AdminDashboard from "./Pages/AdminDashboard";
// import Navigation from "./components/Navigation";
// import EditForm from "./Pages/EditForm";
// import IsUser from "./middlewares/IsUser";
// import IsAdmin from "./middlewares/IsAdmin";

const App = (props) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [score, setScore] = useState(0);

  const [playerData, setPlayerData] = useState([]);
  const [del, setDel] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [playerData]);

  const fetchUser = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users"))
      .then((snapshot) => {
        setPlayerData(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onDelete = (uuid) => {
    const dbRef = ref(getDatabase());
    remove(child(dbRef, `users/${uuid}`));
    setDel(!del);
  };

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "score"))
      .then((snapshot) => {
        setScore(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const HandleSubmit = (uuid) => {
    const dbRef = ref(getDatabase());
    update(child(dbRef, `users/${uuid}`), {
      total_score: score,
    });
  };

  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/game-list" element={<GameList />} />
            <Route
              path="game-list/game"
              element={
                <>
                  <Game
                    playerChoice={playerChoice}
                    score={score}
                    setScore={setScore}
                  />
                  <Footer handleSubmit={HandleSubmit} />
                </>
              }
            />

            {/* <Route path="profile" element={
              <IsUser>
                <ProfilePage />
              </IsUser>
            } /> */}
            {/* <Route path="startgame" element={
              <>
                <Play
                  setplayerChoice={setplayerChoice}
                  score={score}
                  setScore={setScore}
                />
                <Footer handleSubmit={HandleSubmit} />
              </>
            } /> */}
            {/* <Route
              path="game"
              element={
                <>
                  <Game
                    playerChoice={playerChoice}
                    score={score}
                    setScore={setScore}
                  />
                  <Footer handleSubmit={HandleSubmit} />
                </>
              } /> */}
            {/* <Route
              path="admin"
              element={
                <IsAdmin>
                  <>
                    <Navigation />
                    <AdminDashboard
                      data={playerData}
                      onDelete={onDelete} />
                  </>
                </IsAdmin>
              }
            /> */}
            {/* <Route path="edit" element={<EditForm />} /> */}
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
