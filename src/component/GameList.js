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
      <div class="gameone">GAME 1</div>
      <div class="gametwo">2</div>
      <div class="gamethree">3</div>
      <div class="gamefour">4</div>
      <div class="gamefive">5</div>
      <div class="gamesix">6</div>
    </div>
    </div>
  );
};

export default GameList;
