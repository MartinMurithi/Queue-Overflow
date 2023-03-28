import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "./Data";
import "../Questions/Quiz.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../Redux/Slice/QSlice";

function Quiz() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { questions } = useSelector((state) => {
    return state;
  }  );

  console.log("yoooh");
  console.log(questions.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      <div className="quizDiv">
        <div className="header">
          <h1 className="title">Top Questions</h1>
          <button className="askQuizBtn" onClick={() => navigate("/quizinput")}>
            Ask Question
          </button>
        </div>

        <div className="dataList">
          {questions.questions.length > 0 ? questions.questions.map((question) => {
            return (
              <div className="dataQuiz">
                <Link to={`/topquestions/${question.id}`}>
                  <h3 key={question.id} className="quizItem">
                    {question.title}
                  </h3>
                </Link>
                <div className="quizDetails">
                  <h3 className="authorName">{question.author}</h3>
                </div>
              </div>
            );
          }): <h5>No questions available</h5>};
        </div>
      </div>
    </>
  );
}

export default Quiz;
