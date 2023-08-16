import React from "react";
import "../../styles/HomeGallery.scss";
import LocationCard from "./LocationCard";
import ImageHome from "../../assets/ImageHome.png";
import { Link } from "react-router-dom";

// Home reçoit galleryData en tant que prop depuis Router.js
export default function Home({ galleryData }) {
  return (
    <div className="contentHome">
      <div className="bannerImageHome">
        <img
          className="imageHome"
          src={ImageHome}
          alt="paysage de bord de mer"
        ></img>
        <div className="overlay"></div>
        <h1 className="titleHome">Chez vous, partout et ailleurs</h1>
      </div>

      <div className="gallery">
        {/* Création d'une card pour chaque item de galleryData */}
        {galleryData.map((item) => (
          // Chaque card est englobée dans un lien qui redirige au clic vers LocationCardPage
          // avec les props logement récupérés avec la key
          <Link to={`/location/${item.id}`} key={item.id}>
            <LocationCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
