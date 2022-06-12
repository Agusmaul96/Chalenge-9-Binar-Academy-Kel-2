import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <>
    <Navigation />
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 topText">
          <a href="/"><img src="./assets/logorockpaper.png" alt="" /></a>
          <br /><br />
          <h4 class="ml-2">ROCK PAPER SCISSORS</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 m-auto">
          <div class="card p-5">
            <h1 class="mb-5">Login</h1>

            <form action="/login/auth" method="POST" class="row g-3">          

              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label"> Email </label>

                <div class="col-sm-8">
                  <input type="email" name="uEmail" class="form-control" placeholder="example@gmail.com" />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label"> Password </label>

                <div class="col-sm-8">
                  <input type="password" name="uPassword" class="form-control" placeholder="12345678" />
                </div>
              </div>

              <div class="row m-auto">
                <button type="submit" class="btn btn-primary text-right float-end mb-3" >Login</button>
              </div>
              <div class="row m-auto">
                <h6>Belum Punya Akun? <a href="/signup">Daftar Sekarang</a></h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
