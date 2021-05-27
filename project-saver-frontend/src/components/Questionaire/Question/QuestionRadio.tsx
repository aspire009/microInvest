import {
  qaTemplate,
  intialSelection,
} from "../../../model-chakresh/Questionare-static-content";
import "./Question.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Checkbox from "@material-ui/core/Checkbox";
import React, { useState } from "react";

interface CheckboState {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
}

const QuestionRadio = (props: {
  question: qaTemplate;
  index: number;
  setCountHandler: () => void;
  setScoreHandler: (questionNumber: number, updatedScore: number) => void;
}) => {
  const [state, setState] = useState<boolean[]>(intialSelection);
  const [value, setValue] = React.useState("");

  const handleChange = (event: any) => {
    //setState({ ...state, [event.target.name]: event.target.checked });
    let value = event.target.checked;
    let checkBoxName = event.target.value;
    updateSelection(checkBoxName);
    setValue(event.target.value);

    // console.log(state, "state");
    // console.log("name", checkBoxName);
    // console.log("target", event.target);
  };

  const updateSelection = (optionName: string) => {
    let optionNameInt = parseInt(optionName) - 1;
    const updatedState = [...intialSelection];
    console.log("intialSelection", intialSelection);
    console.log("updatedState", updatedState);

    updatedState[optionNameInt] = true;
    console.log("new updatedState", updatedState);
    // console.log("state", state);
    setState(updatedState);
  };

  const updateCount = (questionNumber: number) => {
    if (!(state.filter((s) => s == true).length == 0)) {
      return;
    }
    {
      props.setCountHandler();
    }
  };
  return (
    <div className="container">
      <div className="question">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <h1 className="questionheading">
              {props.question.sl_no}. {props.question.question}
            </h1>
          </FormLabel>
          <RadioGroup
            aria-label="options"
            name="options"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={props.question.options.a}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={props.question.options.b}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={props.question.options.c}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label={props.question.options.d}
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label={props.question.options.e}
            />
            <FormControlLabel
              value="6"
              control={<Radio />}
              label={props.question.options.f}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default QuestionRadio;
