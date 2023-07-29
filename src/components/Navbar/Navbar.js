import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return(
        <div className="navBar" style={{display:"flex"}}>
            <img className="logoNavbar"
            src="./assets/LogoOrangeD.png"
            // rajouter srcset x mobile
            srcset="./assets/LogoOrangeM.png"
            alt="logo kasa"></img>
            <nav className="menuNavBar" >
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </div>
    )
}