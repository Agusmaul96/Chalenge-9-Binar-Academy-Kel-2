import React, { useState, useEffect } from "react";
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
import AdminDashboard from "./Pages/AdminDashboard";
import { getDatabase, ref, child, get, remove } from "firebase/database";
import Navigation from "./components/Navigation";
import EditForm from "./Pages/EditForm";
import IsUser from "./middlewares/IsUser"
import IsAdmin from "./middlewares/IsAdmin"
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux';
import {store,persistor} from './store';



function App() {
  const [playerChoice, setplayerChoice] = useState("");
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

  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home/login" element={<Login />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="gamelist" element={<GameList />} />
          <Route path="gamelist/game" element={<Game playerChoice={playerChoice} score={score} setScore={setScore} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={
            <IsUser>
              <ProfilePage />
            </IsUser>
          } />
          <Route path="startgame" element={<Play setplayerChoice={setplayerChoice} />} />
          <Route path="game" element={<Game playerChoice={playerChoice} score={score} setScore={setScore} />} />
          <Route
            path="admin"
            element={
              <IsAdmin>
              <>
                <Navigation />
                <AdminDashboard data={playerData} onDelete={onDelete} />
              </>
              </IsAdmin>
            }
          />
          <Route path="edit" element={<EditForm />} />
        </Routes>
        </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
