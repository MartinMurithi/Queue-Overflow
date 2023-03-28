import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addAnswer,
  fetchQuestions,
  fetchAnswers,
  addComment,
  fetchComments,
} from "../../Redux/Slice/QSlice";
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
  let comments = useSelector((state) => state.questions.comments);

  const [questionn, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showCommentsInput, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [displayComments, setDisplayComments] = useState(false);

  useEffect(() => {
    let question = questions.find((question) => question.id === questionId);
    setQuestion(question);
  }, []);

  const hadleAnswerInput = (event) => {
    setAnswer(event.target.value);
  };

  const handlePostAns = () => {
    let newAnswer = {
      questionId: questionId,
      cid: Math.floor(Math.random() * 1000),
      answer: answer,
      upvote: 3,
    };
    dispatch(addAnswer(newAnswer));
    console.log(newAnswer);
    navigate("/topquestions");
  };

  useEffect(() => {
    dispatch(fetchAnswers());
  }, []);

  const showCommentInput = (answerId) => {
    answers.map((answer) => {
      if (answerId === answer.cid) {
        setShowComments(!showCommentsInput);
        console.log(answer.cid);
        return;
      }
    });
  };

  const handleCommentInput = (event) => {
    setCommentInput(event.target.value);
  };

  const handlePostComment = (answerId) => {
    let newComment = {
      answerId: answerId,
      comment: commentInput,
    };
    dispatch(addComment(newComment));
    setShowComments(!showCommentsInput);
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const handleDisplayComments = (id) => {
    setDisplayComments(!displayComments);
  };

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

      <div className="answersDiv">
        <h3 className="ansSectionTitle">Answers</h3>
        {answers.length > 0 ? (
          answers.map((answer) => {
            if (answer.questionId === questionId) {
              return (
                <div className="ansDisplay">
                  <p className="ans">{answer.answer}</p>
                  <div className="utils">
                    <button
                      className="commentBtn"
                      onClick={() => showCommentInput(answer.cid)}
                    >
                      Comment
                    </button>
                    {showCommentsInput && (
                      <div className="commentInputs">
                        <input
                          type="text"
                          placeholder="Add comment"
                          className="commentInput"
                          value={commentInput}
                          onChange={handleCommentInput}
                        />
                        <button
                          className="postCommentBtn"
                          onClick={() => handlePostComment(answer.cid)}
                        >
                          Post comment
                        </button>
                      </div>
                    )}
                    <button className="acceptAnsBtn">Accept as answer</button>
                    {/* <button className="ansAuthor">{answer?.author}</button> */}

                    <button className="showComments" onClick={()=>handleDisplayComments(answer.cid)}>Show comments</button>
                  </div>

                  {displayComments && (
                    <>
                      {comments.length > 0
                        ? comments.map((comment) => {
                            if (comment.answerId === answer.cid) {
                              return (
                                <div className="commentsDiv">
                                  <p className="comment">~{comment.comment}</p>
                                </div>
                              );
                            }
                          })
                        : null}
                    </>
                  )}
                </div>
              );
            }
          })
        ) : (
          <h5>This question has no answers</h5>
        )}
      </div>

      <div className="answerDiv">
        <h3 className="yourAns">Your answer</h3>
        <textarea
          type="text"
          className="inputAns"
          placeholder="Enter your answer"
          value={answer}
          onChange={hadleAnswerInput}
        />
        <button className="postAns" onClick={handlePostAns}>
          Post your answer
        </button>
      </div>
    </div>
  );
}

export default QuizDetails;
