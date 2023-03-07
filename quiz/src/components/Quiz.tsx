import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Answers from "./Answers";

// Temp
import data from "../data";
import { nanoid } from "nanoid";

interface IQuizProps {
  quizApiUrl: string;
}

interface IQuestion {
  id: string;
  value: string;
  answers: IAnswer[];
}

export interface IAnswer {
  id: string;
  value: string;
  isCorrect: boolean;
  isClicked: boolean
}

function Quiz(props: IQuizProps) {
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => setQuizDataFromApi(), []);

  // Fetches data from OTDB API
  // Sets the title and Questions states
  function setQuizDataFromApi() {
    setTitle(`${data.results[1].category} - ${data.results[1].difficulty}`);

    setQuestions(
      data.results.map((quizApiData) => {
        return {
          id: nanoid(),
          value: quizApiData.question,
          answers: getShuffledAsnwers(quizApiData),
        };
      })
    );
  }

  // Shuffles Answers from the api
  function getShuffledAsnwers(quizApiData: any): IAnswer[] {
    let answers = [
      quizApiData.correct_answer,
      ...quizApiData.incorrect_answers,
    ];
    let shuffledAsnwers: IAnswer[] = [];

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * answers.length);
      const answer = answers[randomIndex];

      shuffledAsnwers.push({
        id: nanoid(),
        value: answer,
        isCorrect: answer === quizApiData.correct_answer ? true : false,
        isClicked: false
      });

      answers.unshift(answer);
    }

    return shuffledAsnwers;
  }

  function getQuizScore() {
    let score = 0;

    console.log(clickedAnswers)

    clickedAnswers.forEach((answer) => {
      if (answer.isCorrect) score += 1;
    });

    return score;
  }

  const questionElements = questions.map((question, index) => {
    return (
      <div className="question">
        <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
        <Answers
          key={question.id}
          questionIndex={index}
          isGameOver={isGameOver}
          clickedAnswers={clickedAnswers}
          setClickedAnswers={setClickedAnswers}
          answers={question.answers}
        />
      </div>
    );
  });

  return (
    <main className="main">
      <h3>{title}</h3>
      <>{questionElements}</>
      {isGameOver ? (
        <p className="score">{`Score: ${getQuizScore()}/5`}</p>
      ) : null}
      <nav className="nav">
        {!isGameOver ? (
          <button className="btn" onClick={() => setIsGameOver(true)}>
            View Results
          </button>
        ) : (
          <>
            <button
              className="button"
              onClick={() => {
                setIsGameOver(false);
                setQuizDataFromApi();
                setClickedAnswers([]);
              }}
            >
              Play Again
            </button>{" "}
            or <NavLink to={"/select"}>Choose category</NavLink>
          </>
        )}
      </nav>
    </main>
  );
}

export default Quiz;
