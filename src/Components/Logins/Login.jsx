import React, { useState } from "react";
import "../Logins/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { signInWithEmail } from "../../Redux/Slice/QSlice";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Does not work
  const login = () => {
    dispatch(signInWithEmail(userEmail, userPassword));
    console.log(userEmail);
    // navigate('/topquestions')
  }

  return (
    <div className="loginForm">
      <div className="title">
        <h4 className="login">Login</h4>
      </div>
      <form action="" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e)=>{setUserEmail(e.target.value)}} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e)=>{setUserPassword(e.target.value)}} />

        <button type="button" className="loginBtn" onClick={login}>
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
