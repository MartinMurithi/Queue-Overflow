import React from "react";
import "../NavBar/Nav.css";

import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="navBar">
        <div className="nav">
          <div className="logo_about">
           <NavLink to='/'><button className="logoBtn">queue<span>overflow</span> </button></NavLink>
            <NavLink to='/about' ><button className="aboutBtn">About</button></NavLink>
          </div>

          <div className="search">
            <input
              type="search"
              name=""
              id="searchIcon"
              placeholder={`search...`}
            />
          </div>

          <div className="sign_log">
            <NavLink to='/login' ><button className="logIn">Log in</button></NavLink>
            <NavLink to='/signin' ><button className="signUp">Sign In</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
