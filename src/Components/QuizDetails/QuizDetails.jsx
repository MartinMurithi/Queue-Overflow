import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuestions } from "../../Redux/Slice/QSlice";
import "../QuizDetails/QuizDetails.css";

function QuizDetails() {
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  const dispatch = useDispatch();
  let { loading, questions }   = useSelector((state) => state.questions);
  console.log(questions);
  let { questionId } = useParams();

  const [questionn, setQuestion] = useState({});
  const [answer, setAnswers] = useState([]);

  useEffect(() => {
    let question = questions.find((question) => question.id === questionId);
    setQuestion(question);

    console.log(question);
    let ansArr = Object.values(question?.answers);
    setAnswers([...ansArr]);
    console.log(answer);
  }, [questionId]);

  

  return (
    <div className="detailsPage">
      <div className="askQuestionBtnDiv">
        <button className="askQuestionBtn">Ask Question</button>
      </div>
      <div className="questionTitle">
        <h4 className="titleDetails">{questionn?.title}</h4>
        <p className="body">{questionn?.body}</p>
        <p className="qAuthor">{questionn?.author}</p>
      </div>

      <div className="answersDiv">
        <h3 className="ansSectionTitle">Answers</h3>
        {answer && answer.length > 0 ? (
          answer.map((answer) => {
            return (
              <div className="ansDisplay">
                <p className="ans">{answer?.answer}</p>
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
      </div>

      <div className="answerDiv">
        <h3 className="yourAns">Your answer</h3>
        <textarea type="text" className="inputAns" placeholder="Enter your answer" />
        <button className="postAns">Post your answer</button>
      </div>
    </div>
  );
}

export default QuizDetails;
