import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { projectAuth } from "../../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        //log in thenredirect to home
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        //create user, log in and then redirect home
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Main%20color.svg?alt=media&token=c9c90715-2e30-48ee-a880-b363763422fa"
          alt="logo of the company"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signinButton" type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in, you agree to our company conditions of use & sale.
          Please read our privacy notice
        </p>
        <button className="login__registerButton" onClick={register}>
          Create new Account
        </button>
      </div>
    </div>
  );
};

export default Login;
