import React, { useState, useEffect } from "react";

import QuestionRadio from "./Question/QuestionRadio";
import { Link, useHistory} from 'react-router-dom';
import QuestionSlider from "./Question/QuestionSlider";
import {
  qaTemplate,
  QUESTIONS,
  intialScore,
} from "../../model-chakresh/Questionare-static-content";
import InvestingBro from "../Util/InvestingBroImage";
import "./Questionare.css";
import Button from '@material-ui/core/Button';

const Questionare = () => {
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(0);
  const [score, setScore] = useState<number[]>(intialScore);
  const [questions, setQuestion] = useState(QUESTIONS);
  const[disable, setDisable] = useState(true);
  const history = useHistory();
  console.log(selectedQuestionCount)
  useEffect(() => {
    console.log(selectedQuestionCount)
    if(selectedQuestionCount === 13) {
      setDisable(false);
    }
  }, [selectedQuestionCount])

  const getTotalScore = () => {
     return score.reduce((a, b) => a + b, 0);
  }

  const updateScore = (questionNumber: number, optionScore: number) => {
    const newScores = [...score];
    console.log(`question number: ${questionNumber} , optionScore: ${optionScore}`);
    newScores[questionNumber - 1] = optionScore;
    setScore(newScores);
  };

  const goToProfileScore = () => {
    history.push(`/performance/${getTotalScore()}`);
  }

  const updateCount = () => {
    console.log("inside the updation count method")
    console.log(selectedQuestionCount, "selectedQuestionCount");
    setSelectedQuestionCount(selectedQuestionCount + 1);
  };

  return (
    <div>
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
        <div>{score}</div>
      </div>

      <div className="questions">
        {questions.questions.map((ques: qaTemplate, index) => {
          return  (
            <div>
              <QuestionRadio
                question={ques}
                index={ques.sl_no}
                setCountHandler={updateCount}
                setScoreHandler={updateScore}
              />
            </div>
          ) 
        })}
      </div>
    </div>
    <div className="profie-score-btn">
    <Link  to={{pathname:`/performance/${getTotalScore()}`}}>
    <Button  disabled ={disable} variant="contained" color="secondary" onClick={goToProfileScore}>
        NEXT
    </Button>
    </Link>
      </div>
      </div>
  );
};

export default Questionare;