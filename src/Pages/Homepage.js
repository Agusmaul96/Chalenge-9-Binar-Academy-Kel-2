import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
const LandingPage = () => {
  const handleOnClick = () => history.push('./component/GameList')
  return (
    <div id="halaman1">
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
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#halaman1">
                  HOME
                </a>
                <a class="nav-link active" href="#">
                  WORK
                </a>
                <a class="nav-link active" href="#">
                  CONTACT
                </a>
                <a class="nav-link active" href="#">
                  ABOUT ME
                </a>
              </div>

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
      <section class="col-lg-12 col-md-12 col-sm-12 mx-auto text-center container section">
        <h1 class="fw-light">PLAY TRADITIONAL GAME</h1>
        <p class="lead" id="teksgame1">
          Experience new tradisional game play
        </p>
        <p>
          <button type="button" onClick={handleOnClick} class="btn btn-warning my-2">
            PLAY
          </button>
        </p>
      </section>
      <div class="story p-3">
        <svg width="65" height="10" viewBox="0 0 65 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.6875 9.21753H2.87109V2.16284H0.544922V0.651123H7.01367V2.16284H4.6875V9.21753ZM15.3516 9.21753H13.541V5.52026H10.1484V9.21753H8.33203V0.651123H10.1484V4.00854H13.541V0.651123H15.3516V9.21753ZM22.4531 9.21753H17.5195V0.651123H22.4531V2.1394H19.3359V4.02026H22.2363V5.50854H19.3359V7.71753H22.4531V9.21753ZM32.4199 6.83862C32.4199 7.61206 32.1406 8.22144 31.582 8.66675C31.0273 9.11206 30.2539 9.33472 29.2617 9.33472C28.3477 9.33472 27.5391 9.16284 26.8359 8.81909V7.13159C27.4141 7.3894 27.9023 7.57104 28.3008 7.67651C28.7031 7.78198 29.0703 7.83472 29.4023 7.83472C29.8008 7.83472 30.1055 7.75854 30.3164 7.6062C30.5312 7.45386 30.6387 7.22729 30.6387 6.92651C30.6387 6.75854 30.5918 6.61011 30.498 6.4812C30.4043 6.34839 30.2656 6.22144 30.082 6.10034C29.9023 5.97925 29.5332 5.78589 28.9746 5.52026C28.4512 5.27417 28.0586 5.03784 27.7969 4.81128C27.5352 4.58472 27.3262 4.32104 27.1699 4.02026C27.0137 3.71948 26.9355 3.36792 26.9355 2.96558C26.9355 2.20776 27.1914 1.61206 27.7031 1.17847C28.2188 0.744873 28.9297 0.528076 29.8359 0.528076C30.2812 0.528076 30.7051 0.580811 31.1074 0.686279C31.5137 0.791748 31.9375 0.940186 32.3789 1.13159L31.793 2.5437C31.3359 2.3562 30.957 2.22534 30.6562 2.15112C30.3594 2.0769 30.0664 2.03979 29.7773 2.03979C29.4336 2.03979 29.1699 2.11987 28.9863 2.28003C28.8027 2.44019 28.7109 2.64917 28.7109 2.90698C28.7109 3.06714 28.748 3.20776 28.8223 3.32886C28.8965 3.44604 29.0137 3.56128 29.1738 3.67456C29.3379 3.78394 29.7227 3.98315 30.3281 4.27222C31.1289 4.65503 31.6777 5.03979 31.9746 5.42651C32.2715 5.80933 32.4199 6.28003 32.4199 6.83862ZM37.2773 9.21753H35.4609V2.16284H33.1348V0.651123H39.6035V2.16284H37.2773V9.21753ZM48.6973 4.92261C48.6973 6.34058 48.3457 7.43042 47.6426 8.19214C46.9395 8.95386 45.9316 9.33472 44.6191 9.33472C43.3066 9.33472 42.2988 8.95386 41.5957 8.19214C40.8926 7.43042 40.541 6.33667 40.541 4.91089C40.541 3.48511 40.8926 2.39722 41.5957 1.64722C42.3027 0.893311 43.3145 0.516357 44.6309 0.516357C45.9473 0.516357 46.9531 0.895264 47.6484 1.65308C48.3477 2.41089 48.6973 3.50073 48.6973 4.92261ZM42.4453 4.92261C42.4453 5.87964 42.627 6.60034 42.9902 7.08472C43.3535 7.56909 43.8965 7.81128 44.6191 7.81128C46.0684 7.81128 46.793 6.84839 46.793 4.92261C46.793 2.99292 46.0723 2.02808 44.6309 2.02808C43.9082 2.02808 43.3633 2.27222 42.9961 2.7605C42.6289 3.24487 42.4453 3.96558 42.4453 4.92261ZM52.2891 4.45386H52.875C53.4492 4.45386 53.873 4.35815 54.1465 4.16675C54.4199 3.97534 54.5566 3.67456 54.5566 3.2644C54.5566 2.85815 54.416 2.56909 54.1348 2.39722C53.8574 2.22534 53.4258 2.1394 52.8398 2.1394H52.2891V4.45386ZM52.2891 5.93042V9.21753H50.4727V0.651123H52.9688C54.1328 0.651123 54.9941 0.864014 55.5527 1.28979C56.1113 1.71167 56.3906 2.35425 56.3906 3.21753C56.3906 3.72144 56.252 4.17065 55.9746 4.56519C55.6973 4.95581 55.3047 5.26245 54.7969 5.48511C56.0859 7.41089 56.9258 8.65503 57.3164 9.21753H55.3008L53.2559 5.93042H52.2891ZM61.0605 4.17847L62.8477 0.651123H64.8047L61.9629 5.88354V9.21753H60.1582V5.94214L57.3164 0.651123H59.2852L61.0605 4.17847Z"
            fill="white"
          />
        </svg>
        <br />
        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5786 1.83362H1.32422L11.338 10.0027L21.5786 1.83362Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
