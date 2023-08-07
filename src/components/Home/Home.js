import React, { useState, useEffect } from "react";
import "../../styles/HomeGallery.scss";
import LocationCard from "../LocationCard/LocationCard";
import ImageHome from "../../assets/ImageHome.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    try {
      fetch("./annonces.json")
        .then((response) => response.json())
        .then((data) => setGalleryData(data))
        .then(console.log(galleryData))
        .catch((error) =>
          console.error("erreur lors du chargement du fichier JSON:", error)
        );
    } catch (error) {
      console.error("Une erreur inattendue s'est produite:", error);
    }
  }, []);

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
        {galleryData.map((item) => (
          <Link to={`/location/${item.id}`} key={item.id}>
            <LocationCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
