import React, { Dispatch, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

interface IQuizSelectionFormData {
  category: string;
  difficulty: string;
}

interface ISelectProps {
    setQuizApiUrl: Dispatch<React.SetStateAction<string>>
}

function Select(props: ISelectProps) {
  const [quizSelectionFormData, setQuizSelectionFormData] =
    useState<IQuizSelectionFormData>({
      category: "",
      difficulty: "",
    });

  function handleQuizSelectionFormChange(event: FormEvent<HTMLSelectElement>) {
    const { value, name } = event.currentTarget;

    setQuizSelectionFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function getApiUrlFromQuizForm(): string {
    let quizApiUrl = "https://opentdb.com/api.php?amount=5"
    const { category, difficulty } = quizSelectionFormData

    if (category !== "") {
        quizApiUrl += `&category=${category}`
    }

    if (difficulty !== "") {
        quizApiUrl += `&difficulty=${difficulty}`
    }

    quizApiUrl += "&type=multiple"

    return quizApiUrl
  }

  return (
    <main className="main">
      <h3>Select your quiz</h3>
      <div>
        <label htmlFor="select-ctegory"></label>
        <select
          name="category"
          id="select-category"
          value={quizSelectionFormData.category}
          onChange={handleQuizSelectionFormChange}
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </div>
      <div>
        <label htmlFor="select-difficulty"></label>
        <select name="difficulty" id="select-difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
      </div>
      <NavLink
        className="nav-button"
        to={"/quiz"}
        onClick={() => props.setQuizApiUrl(getApiUrlFromQuizForm())}
    >
        Start Quiz
      </NavLink>
    </main>
  );
}

export default Select;
