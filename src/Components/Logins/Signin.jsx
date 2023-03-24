import React from "react";
import "../Logins/Signin.css";

function Signin() {
  return (
    <div className="signinForm">
      <div className="title">
        <h4 className="login">SignIn</h4>
      </div>
      <form action="" method="post" className="form">
        <label htmlFor="displayName">Display name</label>
        <input type="text" placeholder="Display name" id="displayName"/>

        <label htmlFor="fName">First name</label>
        <input type="text" placeholder="First name" id="fName"/>

        <label htmlFor="lName">Last name</label>
        <input type="text" placeholder="Last name" id="lName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit" className="signinBtn">
          SignIn
        </button>
      </form>
    </div>
  );
}

export default Signin;
