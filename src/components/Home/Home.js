import React, { useState, useEffect } from "react";
import "../../styles/HomeGallery.scss";
import LocationCard from "../LocationCard/LocationCard";
import ImageHome from "../../assets/ImageHome.png";

export default function Home() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("./annonces.json")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) =>
        console.error("erreur lors du chargement du fichier JSON:", error)
      );
  }, []);
  return (
    <div className="contentHome">
      <div className="bannerImageHome">
        <img
          className="imageHome"
          src={ImageHome}
          alt="paysage de bord de mer "
        ></img>
        <div className="overlay"></div>
        <h1 className="titleHome">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        {galleryData.map((item) => (
          <LocationCard key={item.id} cover={item.cover} title={item.title} />
        ))}
      </div>
    </div>
  );
}
