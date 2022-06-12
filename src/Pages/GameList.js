import "./gamelist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
const GameList = () => {
  return (
    <div class="gamepage">
      <Navbar />
      <h1 class="listext">GAME LIST</h1>
      <div class="gamelist">
        <button class="gameone"></button>
        <button class="gametwo">GAME 2</button>
        <button class="gamethree">GAME 3</button>
        <button class="gamefour">GAME 4</button>
      </div>
    </div>
  );
};

export default GameList;
