import React from "react";
import "../../styles/HomeGallery.scss";

export default function LocationCard(props) {
  const { title, cover } = props;
  // Props passées depuis Home.js avec .map sur chaque item de galleryData
  return (
    <div className="locationCard">
      <img
        className="coverImage"
        src={cover}
        alt="aperçu de la location"
        style={{ overflowClipMargin: "unset" }}
      ></img>
      <div className="overlayCard"></div>
      <h2 className="titleCard">{title}</h2>
    </div>
  );
}
