import React from "react";
import "../Logins/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="loginForm">
      <div className="title">
        <h4 className="login">Login</h4>
      </div>
      <form action="" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit" className="loginBtn" onClick={() => navigate('/topquestions')}>
          Login
        </button>
        <div className="singinDiv">
          <p>
            Don't have an account? <Link to="/signin">SignIn</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
