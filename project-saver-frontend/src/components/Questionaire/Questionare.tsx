import React, { useState, useEffect } from "react";

import InvestingBro from "../../assets/Investing-bro.svg";
import QuestionRadio from "./Question/QuestionRadio";
import QuestionSlider from "./Question/QuestionSlider";
import { QUESTIONS } from "../../model-chakresh/Questionare-static-content";
import "./Questionare.css";

const Questionare = () => {
  const [questions, setQuestion] = useState(QUESTIONS);
  console.log("question ==", questions);
  console.log("question =length=", questions.questions.length);
  return (
    <div className="container">
      <div className="imageCount">
        <div className="image">
          <img src={InvestingBro}></img>
        </div>
        <div className="countdiv">
          <h1 className="count">0/13</h1>
        </div>
      </div>

      <div className="questions">
        <h3>Json File read data</h3>
        {questions.questions.map((ques: any) => {
          return ques.type === "radio" ? (
            <div>
              <QuestionRadio question={ques} />
            </div>
          ) : (
            <div>
              <QuestionSlider question={ques} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questionare;
