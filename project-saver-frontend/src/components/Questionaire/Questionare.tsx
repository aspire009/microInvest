import React, { useState, useEffect } from "react";

import QuestionRadio from "./Question/QuestionRadio";
import QuestionSlider from "./Question/QuestionSlider";
import {
  qaTemplate,
  QUESTIONS,
  intialScore,
} from "../../model-chakresh/Questionare-static-content";
import InvestingBro from "../Util/InvestingBroImage";
import "./Questionare.css";

const Questionare = () => {
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(0);
  const [score, setScore] = useState<number[]>(intialScore);
  const [questions, setQuestion] = useState(QUESTIONS);

  const updateScore = (questionNumber: number, updatedScore: number) => {
    const newScores = [...score];
    newScores[questionNumber] = updatedScore;
    setScore(newScores);
  };

  const updateCount = () => {
    console.log(selectedQuestionCount, "selectedQuestionCount");
    setSelectedQuestionCount(selectedQuestionCount + 1);
  };

  return (
    <div className="container">
      <div className="imageCount">
        <h3>How do you want to fund your portfolio?</h3>
        <div className="image">
          <InvestingBro />
        </div>
        <div className="countdiv">
          <h1 className="count">{selectedQuestionCount}/13</h1>
          <h3>Question Answered</h3>
        </div>
      </div>

      <div className="questions">
        {questions.questions.map((ques: qaTemplate, index) => {
          return ques.type === "radio" ? (
            <div>
              <QuestionRadio
                question={ques}
                index={ques.sl_no}
                setCountHandler={updateCount}
                setScoreHandler={updateScore}
              />
            </div>
          ) : (
            <div>
              <QuestionSlider question={ques} index={ques.sl_no} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questionare;
