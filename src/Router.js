import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LocationCardPage from "./components/LocationCard/LocationCardPage";
import Error from "./components/Error/Error";

export default function Router() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    try {
      fetch("./annonces.json")
        .then((response) => response.json())
        .then((data) => {
          setGalleryData(data);
          console.log(data);
        })

        .catch((error) =>
          console.error("erreur lors du chargement du fichier JSON:", error)
        );
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
    }
  }, []);
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Home galleryData={galleryData} />} />
        <Route path="/about" element={<About />} />
        {galleryData.length > 0 && (
          <Route
            path="/location/:id"
            element={<LocationCardPage galleryData={galleryData} />}
          />
        )}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
