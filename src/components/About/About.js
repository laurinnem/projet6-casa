import React from "react"
import Onglet from "./Onglet"

export default function About() {
    return(
        <div>
        <div className="BannerImageAbout">
            <img className="ImageAbout" 
            src="../assets/ImageAbout.png" 
            alt="paysage de montagne"></img>
        </div>
        <div className="OngletsAbout">
            <Onglet/>

        </div>
        </div>
    )
}