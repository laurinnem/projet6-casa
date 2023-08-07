import React, { useState } from "react";
import "../../styles/SlideShow.scss";
import leftArrowIcon from "../../assets/leftArrowIcon.png";
import rightArrowIcon from "../../assets/rightArrowIcon.png";

const SlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

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
        alt={`Image ${currentSlide + 1}`}
      />

      {pictures.length > 1 && (
        <div className="slideShowNav">
          <img
            className="slideShowArrowIcon slideShowArrowIcon--prev"
            src={leftArrowIcon}
            alt="Previous"
            onClick={prevSlide}
          />
          <span className="slideShowCounter">
            {currentSlide + 1}/{pictures.length}
          </span>
          <img
            className="slideShowArrowIcon slideShowArrowIcon--next"
            src={rightArrowIcon}
            alt="Next"
            onClick={nextSlide}
          />
        </div>
      )}
    </div>
  );
};

export default SlideShow;
