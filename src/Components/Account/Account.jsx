import React, { useEffect, useState } from "react";
import "../Account/Account.css";
import { auth } from "../../Redux/Slice/Firebase_config";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAnswers, fetchQuestions, signOut } from "../../Redux/Slice/QSlice";

function Account() {

  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const { questions } = useSelector(state => {
    return state
  });


  console.log(questions.answers);


  const logOut = () => {
    dispatch(signOut());
    console.log('loooooooooool');
  }

  useEffect(() => {
    let ID = auth.currentUser.uid;
    setId(ID)
    dispatch(fetchQuestions());
    dispatch(fetchAnswers())
  }, []);
  
  const fetchUserQuestions = () => {
    
  }

  console.log(id);
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
            <button className="signoutBtn" onClick={logOut}>SignOut</button>
          </div>
        </div>

        <div className="userContributions">
          <div className="userQuestions">

            <h3 className="questionsList">Your questions</h3>
            {questions.questions.length > 0 ? 
              questions.questions.map(question => {
                if (question.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{question.title}</p>
                      {/* <button  className="deleteQuestionBtn">Delete</button> */}
                    </div>
                    
                  )
                }
              })
              :<h5>You have not asked any questions</h5>}
          </div>

           <div className="userQuestions">

            <h3 className="questionsList">Your answers</h3>
            {questions.answers.length > 0 ? 
              questions.answers.map(answer => {
                if (answer.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{answer.answer}</p>
                      {/* <button  className="deleteQuestionBtn">Delete</button> */}
                    </div>
                    
                  )
                }
              })
            :null}
          </div>

           <div className="userQuestions">

            <h3 className="questionsList">Your comments</h3>
            {questions.comments && questions.comments.length > 0 ? 
              questions.comments.map(comment => {
                if (comment.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{comment.comment}</p>
                      {/* <button  className="deleteQuestionBtn">Delete</button> */}
                    </div>
                    
                  )
                }
              })
            :null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
