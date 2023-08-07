import React from "react";
import { useParams } from "react-router-dom";

import "../../styles/Onglets.scss";
import "../../styles/LocationCardPage.scss";

import Error from "../Error/Error";
import SlideShow from "./SlideShow";
import Onglet from "../About/Onglet";

import starOrange from "../../assets/starOrange.png";
import starGrey from "../../assets/starGrey.png";

export default function LocationCardPage({ galleryData }) {
  const { id } = useParams();
  const location = galleryData.find((item) => item.id === id);

  //   Définition de la couleur des étoiles
  const orangeStars = location.rating;
  const greyStars = 5 - orangeStars;

  if (!location) {
    return <Error />;
  }

  return (
    <div className="locationPageContent">
      <div className="carrousel">
        <SlideShow pictures={location.pictures} />
      </div>

      <div className="locationPageHeader">
        <div className="locationPageHeader1">
          <h1>{location.title}</h1>
          <h2>{location.location}</h2>
        </div>
        <div className="locationPageHeader2">
          <p className="hostName">{location.host.name}</p>
          <img className="hostPicture" src={location.host.picture}></img>
        </div>

        <div className="locationPageHeader3-tags">
          <ul>
            {location.tags.map((tag, index) => (
              <li className="singleTag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="locationPageHeader4-stars">
          {Array.from({ length: orangeStars }).map((_, index) => (
            <img
              key={`orange-star-${location.id}-${index + 1}`}
              src={starOrange}
              alt="orange star"
            />
          ))}

          {Array.from({ length: greyStars }).map((_, index) => (
            <img
              key={`grey-star-${location.id}-${index + orangeStars + 1}`}
              src={starGrey}
              alt="grey star"
            />
          ))}
        </div>
      </div>
      <div className="ongletsLocationPage">
        <Onglet
          className="ongletSingleLocationPage"
          title="Description"
          text={location.description}
        />
        <Onglet
          className="ongletSingleLocationPage"
          title="Equipement"
          text={
            <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
