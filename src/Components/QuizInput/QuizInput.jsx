import React, { useEffect, useState } from "react";
import "../QuizInput/QuizInput.css";

function QuizInput() {
  const [quizAuthor, setQuizAuthor] = useState("");
  const [displayAskQuestion, setAskQuestion] = useState(false);

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
          <li className="guideItem">Summarize your problem in a one-line title</li>
          <li className="guideItem">Describe your problem in more detail</li>
          <li className="guideItem">Describe what you tried and what you expected to happen </li>
          <li className="guideItem"> Review your question and post it to the site</li>
        </ul>
      </div>
      

          
    </>
  );
}

export default QuizInput;
