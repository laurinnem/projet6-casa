import React, { createContext, useState, useEffect, useContext } from "react";

const GalleryContext = createContext();

export function useGallery() {
  return useContext(GalleryContext);
}

export function GalleryProvider({ children }) {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const storedGalleryData = localStorage.getItem("galleryData");

    if (storedGalleryData) {
      setGalleryData(JSON.parse(storedGalleryData));
    } else {
      fetch("./annonces.json")
        .then((response) => response.json())
        .then((data) => {
          console.log("Data loaded:", data);
          setGalleryData(data);

          localStorage.setItem("galleryData", JSON.stringify(data));
        })
        .catch((error) =>
          console.error("erreur lors du chargement du fichier JSON:", error)
        );
    }
  }, []);
  return (
    <GalleryContext.Provider value={{ galleryData }}>
      {children}
    </GalleryContext.Provider>
  );
}
