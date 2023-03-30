import React, { useState } from "react";
import "../Logins/Signin.css";
import { useDispatch } from "react-redux";
import { signInWithGoogle, signUpWithEmail } from "../../Redux/Slice/QSlice";
import { useNavigate } from "react-router-dom";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    const newUser = {
      email: email,
      password: password,
    };
    dispatch(signUpWithEmail(newUser));
    console.log(newUser);
    console.log("account created successfully");
  };

  const login = async () => {
    dispatch(signInWithGoogle());
    navigate("/");
  };

  const logout = async () => {};

  return (
    <div className="signinForm">
      <div className="title">
        <h4 className="login">Sign Up</h4>
      </div>
      <form action="" method="post" className="form">
        {/* <label htmlFor="displayName">Display name</label>
        <input type="text" placeholder="Display name" id="displayName" onChange={(e)=>{setDisplayName(e.target.value)}}/>

        <label htmlFor="fName">First name</label>
        <input type="text" placeholder="First name" id="fName" onChange={(e)=>{setFirstName(e.target.value)}}/>

        <label htmlFor="lName">Last name</label>
        <input type="text" placeholder="Last name" id="lName" onChange={(e)=>{setLastName(e.target.value)}} /> */}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="button" className="signinBtn" onClick={register}>
          Create account
        </button>
        <button type="button" className="signinBtn" onClick={login}>
          SignIn with Google
        </button>
      </form>
    </div>
  );
}

export default Signin;
