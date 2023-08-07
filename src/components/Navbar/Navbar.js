import React from "react";
import { Link } from "react-router-dom";
import LogoOrangeD from "../../assets/LogoOrangeD.png";
import LogoOrangeM from "../../assets/LogoOrangeM.png";

export default function Navbar() {
  return (
    <div className="navBar" style={{ display: "flex" }}>
      <img
        className="logoNavbar"
        src={LogoOrangeD}
        // rajouter srcset x mobile
        srcSet={LogoOrangeM}
        alt="logo kasa"
      ></img>
      <nav className="menuNavBar">
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </div>
  );
}
