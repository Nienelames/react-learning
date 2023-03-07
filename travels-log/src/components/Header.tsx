import { ReactElement } from "react";

function Header():ReactElement {
    return (
        <header className="header">
            <img src="../public/assets/globe.svg" alt="globe" className="header--logo"/>
            <div className="title white">my travel journal.</div>
        </header>
    )
}

export default Header