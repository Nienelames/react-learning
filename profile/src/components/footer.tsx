import { ReactElement } from "react"
import twitterIcon from '../assets/twitterIcon.svg'
import facebookIcon from '../assets/facebookIcon.svg'
import instagramIcon from '../assets/instagramIcon.svg'
import githubIcon from '../assets/githubIcon.svg'
import './footer.css'

function Footer(): ReactElement {
    return (
        <footer className="footer">
            <img src={twitterIcon} alt="Twitter icon"></img>
            <img src={facebookIcon} alt="Twitter icon"></img>
            <img src={instagramIcon} alt="Twitter icon"></img>
            <img src={githubIcon} alt="Twitter icon"></img>
        </footer>
    )
}

export default Footer