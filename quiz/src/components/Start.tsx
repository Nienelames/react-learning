import { NavLink } from "react-router-dom"


function Start() {
    

    return (
        <main className="main">
            <div className="description">
                <h3>Quizzical</h3>
                <p>Just click some buttons</p>
            </div>
            <NavLink className="button" to="/select">Select Quiz</NavLink>
        </main>
    )
}

export default Start