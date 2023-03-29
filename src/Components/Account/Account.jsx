import React from "react";
import "../Account/Account.css";
import { auth } from "../../Redux/Slice/Firebase_config";
import {useSelector} from 'react-redux'

function Account() {
  const { questions } = useSelector(state => {
    return state
  })
  console.log(questions.user);
  return (
    <>
      <div className="account">
        <div className="accountTitle">
          <h2>Account Details</h2>
        </div>

        <div className="accountDetails">
          
          <div className="imgDiv">
            <img src={auth.currentUser?.photoURL} alt="" height={100} width100/>
          </div>
          <div className="details">
            <p className="userInfo">Display name :  {auth.currentUser?.displayName}</p>
            <p className="userInfo">Email : {auth.currentUser?.email}</p>
            <button className="signoutBtn">SignOut</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
