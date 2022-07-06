import "./style/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import React, { useState,useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { login} from "../features/userSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispacth = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        dispacth(login({
          uid:userCredential.user.uid,
          displayName: userCredential.user.displayName,
          accessToken: userCredential.user.accessToken,
        }))
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ..
      });
  };
  return (
    <div className="body">
      <Navigation />
      <div className="row">
        <div className="col-lg-6 col-sm-12 m-auto">
          <div className="card p-5">
            <h1 className="mb-5">Login</h1>


            <form onSubmit={handleSubmit} className="row g-3">

              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  {" "}
                  Email{" "}
                </label>

                <div className="col-sm-8">

                  <input type="email" name="uEmail" className="form-control" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
              </div>

              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-4 col-form-label">
                  {" "}
                  Password{" "}
                </label>

                <div className="col-sm-8">

                  <input type="password" name="uPassword" className="form-control" placeholder="12345678" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div className="row m-auto">
                <button type="submit" className="btn btn-primary text-right float-end mb-3">
                  Login
                </button>
              </div>
              <div className="row m-auto">
                <h6>
                  Belum Punya Akun? <a href="/signup">Daftar Sekarang</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
