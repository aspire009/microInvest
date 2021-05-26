import { qaTemplate } from "../../../model-chakresh/Questionare-static-content";
const QuestionSlider = (props: { question: qaTemplate }) => {
  return (
    <div className="container">
      <div className="question">
        <h1>{props.question.question}</h1>
        <ol>
          <ul>{props.question.options.a}</ul>
          <ul>{props.question.options.b}</ul>
          <ul>{props.question.options.c}</ul>
          <ul>{props.question.options.d}</ul>
        </ol>
      </div>
    </div>
  );
};

export default QuestionSlider;
