import React from "react";
import "../../styles/HomeGallery.scss";

export default function LocationCard(props) {
  return (
    <div className="locationCard">
      <img
        className="coverImage"
        src={props.cover}
        alt="aperçu de la location"
        style={{ overflowClipMargin: "unset;" }}
      ></img>
      <h1 className="titleCard">{props.title}</h1>
    </div>
  );
}
