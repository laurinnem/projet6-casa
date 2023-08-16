import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../styles/Onglets.scss";
import "../../styles/LocationCardPage.scss";

import Error from "../Error/Error";
import SlideShow from "./SlideShow";
import Onglet from "../Onglet";

import starOrange from "../../assets/starOrange.png";
import starGrey from "../../assets/starGrey.png";

export default function LocationCardPage({ galleryData }) {
  // Récupère id de URL
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recherche dans galleryData l'item avec id correspondant
    const foundLocation = galleryData.find((item) => item.id === id);
    // Modifie le state location en fonction de ce qui est trouvé ou non
    setLocation(foundLocation || null);
    setLoading(false);
  }, [id, galleryData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (location === null) {
    return <Error />;
  }

  //   Définition de la couleur des étoiles
  const orangeStars = location.rating;
  const greyStars = 5 - orangeStars;

  return (
    <div className="locationPageContent">
      <div className="carrousel">
        {/* Passe pictures comme prop au composant SlideShow */}
        <SlideShow pictures={location.pictures} />
      </div>

      <div className="locationPageHeader">
        <div className="locationPageHeaderLeft">
          <div className="locationPageHeader1">
            <h1>{location.title}</h1>
            <h2>{location.location}</h2>
          </div>
          <div className="locationPageHeader2-tags">
            <ul>
              {location.tags.map((tag, index) => (
                // Création d'un tag pour chaque élément de location.tags
                <li className="singleTag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="locationPageHeaderRight">
          <div className="locationPageHeader3">
            <p className="hostName">{location.host.name}</p>
            <img
              className="hostPicture"
              src={location.host.picture}
              alt="avatar de l'hôte"
            ></img>
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
      </div>
      <div className="ongletsLocationPage">
        <Onglet title="Description" text={location.description} />

        <Onglet
          title="Equipements"
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
