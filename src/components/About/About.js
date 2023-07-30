import React from "react"
import Onglet from "./Onglet"
import ImageAbout from "../../assets/ImageAbout.png"

export default function About() {
    return(
        <div>
        <div className="BannerImageAbout">
            <img className="ImageAbout" 
            src={ImageAbout} 
            alt="paysage de montagne"></img>
        </div>
        <div className="OngletsAbout">
            <Onglet/>

        </div>
        </div>
    )
}