import React from "react";
import LogoWhite from "../assets/LogoWhite.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={LogoWhite} alt="logo casa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
