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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
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
          bt signing-in, you agree to our company conditions of use & sale.
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
