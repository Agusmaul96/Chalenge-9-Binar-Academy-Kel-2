import "./gamelist.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
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
  );
};

export default Navbar;
