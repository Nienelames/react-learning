import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface ISelectionData {
    category: string,
    difficulty: string
}

interface ISelectionProps {
    setApiUrl: Dispatch<SetStateAction<string>>
}

function Selection(props: ISelectionProps) {
    const [selectionData, setSelectionData] = useState<ISelectionData>({
        category: "",
        difficulty: ""
    })

    function handleSelectionChange(event: ChangeEvent<HTMLInputElement>): void {
        const {name, value} = event.target

        setSelectionData(prevSelection => ({
            ...prevSelection,
            [name]: value
        }))
    }

    function getApiUrlFromSelection(): string {
        let apiUrl = "https://opentdb.com/api.php?amount=10"
        
        if (selectionData.category !== "")
            apiUrl += `&category=${selectionData.category}`

        if (selectionData.difficulty !== "")
            apiUrl += `&difficulty=${selectionData.difficulty}`

        apiUrl += "&type=multiple"

        return apiUrl
    }

    return (
        <div className="quiz-selection">
            <h2 className="title">Choose Your Quiz</h2>
            <div className="combobox-container">
                <label htmlFor={selectionData.category}>Category:</label>
                <select
                    value={selectionData.category}
                    name="category"
                    id="category-select"
                    className="combobox"
                    onChange={() => handleSelectionChange}
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals & Theaters</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
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
                    <option value="31">Entertainment: Japanese Anime & Manga</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                </select>
            </div>
            <div className="combobox-container">
                <label htmlFor={selectionData.difficulty}>Difficulty:</label>
                <select 
                    value={selectionData.difficulty}
                    name="difficulty"
                    id="difficulty-select"
                    className="combobox"
                    onChange={() => handleSelectionChange}
                >
                    <option value="">Any Category</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <NavLink
                className="button start-quiz-button"
                to="/quiz"
                onClick={() => props.setApiUrl(getApiUrlFromSelection())}
            >
                Start Quiz
            </NavLink>
        </div>
    )
}

export default Selection