import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAnswer, fetchQuestions } from "../../Redux/Slice/QSlice";
import "../QuizDetails/QuizDetails.css";

function QuizDetails() {
  const dispatch = useDispatch();
  let { questionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  let questions = useSelector((state) => state.questions.questions);
  let answers = useSelector((state) => state.questions.answers);

  const [questionn, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    let question = questions.find((question) => question.id === questionId);
    setQuestion(question);
    console.log(questionn);

  }, [questionId]);

  const hadleAnswerInput = (event) => {
    setAnswer(event.target.value);
  }
  console.log(answers);

  const handlePostAns = () => {
    let newAnswer = {
      questionId: questionId,
      answer: answer,
      upvote: 3
    }
    dispatch(addAnswer(newAnswer));

  }


  return (
    <div className="detailsPage">
      <div className="askQuestionBtnDiv">
        <button
          className="askQuestionBtn"
          onClick={() => navigate("/quizinput")}
        >
          Ask Question
        </button>
      </div>
      <div className="questionTitle">
        <h4 className="titleDetails">{questionn?.title}</h4>
        <p className="body">{questionn?.description}</p>
        <p className="qAuthor">{questionn?.author}</p>
      </div>

      {/* <div className="answersDiv">
        <h3 className="ansSectionTitle">Answers</h3>
        {answer.length > 0 ? (
          answer.map((answer) => {
            return (
              <div className="ansDisplay">
                <p className="ans">{answer.answer}</p>
                <div className="utils">
                  <button className="commentBtn">Comment</button>
                  <button className="acceptAnsBtn">Accept as answer</button>
                  <button className="ansAuthor">{answer?.author}</button>
                </div>
              </div>
            );
          })
        ) : (
          <h5>This question has no answer</h5>
        )}
      </div> */}

      <div className="answerDiv">
        <h3 className="yourAns">Your answer</h3>
        <textarea
          type="text"
          className="inputAns"
          placeholder="Enter your answer"
          onChange={hadleAnswerInput}
        />
        <button className="postAns" onClick={handlePostAns}>Post your answer</button>
      </div>
    </div>
  );
}

export default QuizDetails;
