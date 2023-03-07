import { ReactElement } from "react"
import './description.css'

function Description():ReactElement {
    return (
        <div className="description">
            <div className="about-section">
                <h1>About</h1>
                <p>Have your heard of the popular hit game among us? It’s a really cool game where 1-3 imposters try to kill off the crewmates, while the crew has to finish their tasks or vote off the imposters to win. It’s 5 dollars on steam and other consoles but it is free on App Store and Google Play.</p>               
            </div>
            <div className="interests-section">
                <h1>Interests</h1>
                <p>Gregory, do you see the small vent on the floor? Have you ever heard of Among Us, Gregory? You need to vent. I know it will be hard for you to be sus, but i know you can do it Gregory.</p>
            </div>
        </div>
    )
}

export default Description