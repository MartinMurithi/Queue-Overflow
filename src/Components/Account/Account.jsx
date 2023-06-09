import React, { useEffect, useState } from "react";
import "../Account/Account.css";
import { auth } from "../../Redux/Slice/Firebase_config";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAnswers, fetchQuestions, signOut, deleteQuestion, deleteComment, deleteAnswer } from "../../Redux/Slice/QSlice";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const { questions } = useSelector(state => {
    return state
  });

  console.log(questions.loading);
  const logOut = () => {
    dispatch(signOut());
    navigate('/signin');
  }

  useEffect(() => {
    let ID = auth.currentUser?.uid;
    setId(ID)
    if (questions.loading) {
      return <h5>Loading....</h5>
    }
    dispatch(fetchAnswers());
  }, []);

  
  const deleteQuestions = (qId) => {
    dispatch(deleteQuestion(qId));
  }

  function editQuestion(id, question) {
    console.log(id);
    navigate('/quizinput');
    dispatch(editQuestion(question));
  }

  const deleteAnswers = (aId) => {
    dispatch(deleteAnswer(aId));
    console.log(aId);
  }

  const deleteComments = (cId) => {
    dispatch(deleteComment(cId));
    console.log(cId);
  }

  return (
    <>
      <div className="account">
        <div className="accountTitle">
          <h2>Account Details</h2>
        </div>

        <div className="accountDetails">
          
          <div className="imgDiv">
            <img src={auth.currentUser?.photoURL} alt="" height={100} width={100} />
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
            {questions.questions && questions.questions.length > 0 ? 
              questions.questions.map(question => {
                if (question.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{question.title}</p>
                      <button className="deleteQuestionBtn" onClick={() => {editQuestion(question.id) }}>Edit</button>
                      <button className="deleteQuestionBtn" onClick={() => {deleteQuestions(question.id) }}>Delete</button>
                    </div>
                    
                  )
                }
              })
              :<h5>You have not asked any questions</h5>}
          </div>

           <div className="userQuestions">

            <h3 className="questionsList">Your answers</h3>
            {questions.answers && questions.answers.length > 0 ? 
              questions.answers.map(answer => {
                if (answer.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{answer.answer}</p>
                      <button  className="deleteQuestionBtn" onClick={()=>deleteAnswers(answer.id)}>Edit</button>
                      <button  className="deleteQuestionBtn" onClick={()=>deleteAnswers(answer.id)}>Delete</button>
                    </div>
                    
                  )
                }
              })
            :<h5>You have not answered ny question</h5>}
          </div>

           <div className="userQuestions">

            <h3 className="questionsList">Your comments</h3>
            {questions.comments && questions.comments.length > 0 ? 
              questions.comments.map(comment => {
                if (comment.authorId === id) {
                  return (
                    <div>
                      <p className="userQuestionItem">{comment.comment}</p>
                      <button  className="deleteQuestionBtn" onClick={()=>{deleteComments(comment.id)}}>Edit</button>
                      <button  className="deleteQuestionBtn" onClick={()=>{deleteComments(comment.id)}}>Delete</button>
                    </div>
                    
                  )
                }
              })
            :<h5>You have not commented on any question</h5>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
