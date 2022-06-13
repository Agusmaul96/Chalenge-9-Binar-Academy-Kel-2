import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";

const Signup = () => {
  return (
    <>
    <Navigation/>
    <div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 topText">
        <a href="/"><img src="./assets/logorockpaper.png" alt="" /></a>
        <br /><br />
        <h4 class="ml-2">ROCK PAPER SCISSORS</h4>
      </div>
    </div>
    <div class="row" >
      <div class="col-lg-6 col-sm-12 m-auto">
        <div class="card p-5">
          <h1 class="mb-5">Sign Up</h1>

          <form action="/signup/post" method="POST" class="row g-3">
            
            <div class="alert <%= messageClass %>" role="alert"></div>
           
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Nama</label>

              <div class="col-sm-8">
                <input type="name" name="name" class="form-control" placeholder="nama" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label"> Email </label>

              <div class="col-sm-8">
                <input type="email" name="email" class="form-control" placeholder="email" />
              </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label"> Password </label>

              <div class="col-sm-8">
                <input type="password" name="password" class="form-control" placeholder="password" />
              </div>
            </div>

            <div class="row">
              <button type="submit" class="btn btn-primary text-right float-end mb-3" >Submit</button>
            </div>
            <div class="row m-auto">
              <h6>Sudah Punya Akun? <a href="/login">Login Here</a></h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Signup;
