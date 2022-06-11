import "./gamelist.css";
import "bootstrap/dist/css/bootstrap.min.css";
const GameList = () => {
  return (
    <div class="gamepage">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark opacity-75">
              <div class="container-fluid">
                <a class="navbar-brand me-5" href="#halaman1">
                  LOGO
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                  
    
                  <div class="navbar-nav me-4" id="tekskiri">
                    <a class="nav-link active" href="signup.html">
                      SIGN UP
                    </a>
                    <a class="nav-link active" href="login.html">
                      LOGIN
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <h1 class="listext">GAME LIST</h1>
      <div class="gamelist">
      <button class="gameone"></button>
      <button class="gametwo">GAME 2</button>
      <button class="gamethree">GAME 3</button>
      <button class="gamefour">GAME 4</button>
      <button class="gamefive">GAME 5</button>
      <button class="gamesix">GAME 6</button>
    </div>
    </div>
  );
};

export default GameList;
