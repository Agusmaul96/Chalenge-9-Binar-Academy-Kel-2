import React from "react";
import "./App.css";
import Router from "./router";

function App() {
<<<<<<< HEAD
  return <Router />;
=======
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
        <UserProvider>
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
        </UserProvider>
      </Router>
    </>
  );
>>>>>>> 5f1a9ee625fb1b02cf035124395217efebf8cf40
}

export default App;
