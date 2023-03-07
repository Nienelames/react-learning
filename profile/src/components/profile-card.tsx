import { ReactElement } from 'react'
import './profile-card.css'
import pfp from '../assets/sussy-pfp.webp'
import Title from './title'
import Socials from './socials'
import Description from './description'
import Footer from './footer'

function ProfileCard(): ReactElement {
    return (
        <div className="profile-card">
            <img src={pfp} alt="pfp"/>
            <Title />
            <Socials />
            <Description />
            <Footer />
        </div>
    )
}

export default ProfileCard