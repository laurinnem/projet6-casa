import React, { useState, useRef, useEffect } from "react";
import "../styles/About.scss";
import arrowIcon from "../assets/arrow.png";

export default function Onglet({ title, text }) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const ongletTextRef = useRef(null);
  const [ongletTextHeight, setOngletTextHeight] = useState(0);

  const toggleTextVisibility = () => {
    setIsTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  useEffect(() => {
    if (isTextVisible) {
      setOngletTextHeight(ongletTextRef.current.scrollHeight);
    } else {
      setOngletTextHeight(0);
    }
  }, [isTextVisible]);

  return (
    <div className="onglet">
      <div className="ongletHeader" onClick={toggleTextVisibility}>
        <p className="ongletTitle">{title}</p>
        <img
          className={`arrow ${isTextVisible ? "rotate-up" : "rotate-down"}`}
          src={arrowIcon}
          alt={isTextVisible ? "Vers le haut" : "Vers le bas"}
        />
      </div>
      <div
        className={`ongletText ${isTextVisible ? "active" : "inactive"}`}
        ref={ongletTextRef}
        style={{ maxHeight: ongletTextHeight }}
      >
        {text}
      </div>
    </div>
  );
}
