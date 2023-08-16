import React from "react";
import "../../styles/HomeGallery.scss";

export default function LocationCard(props) {
  const { title, cover } = props;

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
