import React from "react";
import { NavLink } from "react-router-dom";
import LogoOrangeD from "../assets/LogoOrangeD.png";

export default function Navbar() {
  return (
    <div className="navBar" style={{ display: "flex" }}>
      <div className="logoNavBarBox">
        <img className="logoNavbar" src={LogoOrangeD} alt="logo kasa"></img>
      </div>
      <nav className="menuNavBar">
        <NavLink exact="true" to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/About" activeclassname="active">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
