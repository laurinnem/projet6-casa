import React, { useState } from "react";
import "../../styles/SlideShow.scss";
import leftArrowIcon from "../../assets/leftArrowIcon.png";
import rightArrowIcon from "../../assets/rightArrowIcon.png";

// pictures récupéré de LocationCardPage
const SlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // x passer à la photo suivante ou retour à la première après dernière
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };
  // x passer à la photo précédente ou retour à la dernière après première
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  if (pictures.length === 0) {
    return null;
  }

  return (
    <div className="slideShow">
      <img
        className="slideShowImage"
        src={pictures[currentSlide]}
        alt={`Vue de la location ${currentSlide + 1}`}
      />
      {/* Vérifie qu'il y a + d'1 photo pour afficher flèches/compteur */}
      {pictures.length > 1 && (
        <div className="slideShowNav">
          <div className="arrows">
            <img
              className="slideShowArrowIcon slideShowArrowIcon--prev"
              src={leftArrowIcon}
              alt="Previous"
              onClick={prevSlide}
            />

            <img
              className="slideShowArrowIcon slideShowArrowIcon--next"
              src={rightArrowIcon}
              alt="Next"
              onClick={nextSlide}
            />
          </div>
          <span className="slideShowCounter">
            {currentSlide + 1}/{pictures.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default SlideShow;
