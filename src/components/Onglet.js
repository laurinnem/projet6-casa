import React, { useState, useRef, useEffect } from "react";
import "../styles/About.scss";
import arrowIcon from "../assets/arrow.png";

// props passées au composant lorsqu'il est utilisé ds LocationCardPage et About
export default function Onglet({ title, text }) {
  // texte initialement caché
  const [isTextVisible, setIsTextVisible] = useState(false);
  const ongletTextRef = useRef(null);
  const [ongletTextHeight, setOngletTextHeight] = useState(0);

  // inverse la visibilité du texte
  const toggleTextVisibility = () => {
    setIsTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  // ajuste la hauteur de l'onglet dépliant au texte
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
          // flèche avec classes pour ajuster sa position (dans onglet.scss)
          className={`arrow ${isTextVisible ? "rotate-up" : "rotate-down"}`}
          src={arrowIcon}
          alt={
            isTextVisible
              ? "cliquez pour fermer l'onglet"
              : "cliquez pour ouvrir l'onglet"
          }
        />
      </div>
      <div
        // contenu texte avec classes pour ajuster sa visibilité
        className={`ongletText ${isTextVisible ? "active" : "inactive"}`}
        ref={ongletTextRef} //useRef attaché à cette div
        style={{ maxHeight: ongletTextHeight }}
      >
        {text}
      </div>
    </div>
  );
}
