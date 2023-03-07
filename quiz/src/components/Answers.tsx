import { nanoid } from "nanoid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IAnswer } from "./Quiz";

interface IAnswersProps {
  answers: IAnswer[];
  questionIndex: number;
  isGameOver: boolean;
  setClickedAnswers: Dispatch<SetStateAction<IAnswer[]>>;
  clickedAnswers: IAnswer[];
}

function Answers(props: IAnswersProps) {
  function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
    props.setClickedAnswers((prevAnswers) => {
      let newAsnwers = prevAnswers;

      newAsnwers[props.questionIndex] = {
        ...props.answers[props.questionIndex],
        answer: event.target.value,
      };

      return newAsnwers;
    });
  }

  function getAnswerStyleClass(answer: IAnswer): string {
    if (!props.isGameOver) {
      return "answer"
    }

    if(!answer.isCorrect && answer.isCliked) {
      return "answer answer-incorrect"
    }

    return "answer answer-correct"
  }

  const answerElements = props.answers.map((answer) => {
    return (
      <>
        <input
          type="radio"
          id={answer.id}
          value={answer.answer}
          name={`answer-${props.questionIndex}`}
          disabled={props.isGameOver}
          checked={props.isGameOver ? false : undefined}
          onChange={!props.isGameOver ? handleAnswerChange : undefined}
        />
        <label
          className={getAnswerStyleClass(answer)}
          htmlFor={answer.id}
          dangerouslySetInnerHTML={{ __html: answer.answer }}
        ></label>
      </>
    );
  });

  return <div className="answers">{answerElements}</div>;
}

export default Answers;
