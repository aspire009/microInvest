import { qaTemplate } from "../../../model-chakresh/Questionare-static-content";
const QuestionRadio = (props: { question: qaTemplate }) => {
  console.log("props====", props.question);
  return (
    <div className="container">
      <div className="question">
        <h1>{props.question.question}</h1>
        <ol>
          <ul>{props.question.options.a}</ul>
          <ul>{props.question.options.b}</ul>
          <ul>{props.question.options.c}</ul>
          <ul>{props.question.options.d}</ul>
          <ul>{props.question.options.e}</ul>
          <ul>{props.question.options.f}</ul>
        </ol>
      </div>
    </div>
  );
};

export default QuestionRadio;
