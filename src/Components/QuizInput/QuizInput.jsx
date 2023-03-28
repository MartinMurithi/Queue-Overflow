import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, fetchAnswers } from "../../Redux/Slice/QSlice";
import "../QuizInput/QuizInput.css";

function QuizInput() {
  const dispatch = useDispatch();

  let answers = useSelector((state) => state.questions.answers);
  console.log(answers);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleAddQuestion = () => {
    let newQuestion = {
      title: title,
      description: description,
    };

    dispatch(addQuestion(newQuestion));
    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    dispatch(fetchAnswers());
    console.log('ANSWERS');
  }, []);
  return (
    <>
      <div className="guideDiv">
        <h2 className="guideTitle">Writing a good question</h2>
        <p className="guideIntro">
          You're ready to ask a programming-related question and this form will
          help guide you through the process. Looking to ask a non-programming
          question? See the topics here to find a relevant site.
        </p>
        <h5 className="guideListTitle">Steps</h5>
        <ul className="guideList">
          <li className="guideItem">Write your name</li>
          <li className="guideItem">
            Summarize your problem in a one-line title
          </li>
          <li className="guideItem">Describe your problem in more detail</li>
          <li className="guideItem">
            Describe what you tried and what you expected to happen{" "}
          </li>
          <li className="guideItem">
            {" "}
            Review your question and post it to the site
          </li>
        </ul>
      </div>

      <div className="inputs">
        <input
          type="text"
          className="questionTitle"
          placeholder="Enter question title...."
          onChange={handleTitle}
        />
        <textarea
          name="description"
          id="questionDescription"
          cols="30"
          rows="10"
          placeholder="Enter question description...."
          onChange={handleDescription}
        ></textarea>
        <button className="postBtn" onClick={handleAddQuestion}>
          Post
        </button>
      </div>
    </>
  );
}

export default QuizInput;
