import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LocationCardPage from "./components/LocationCardPage/LocationCardPage";
import Error from "./components/Error/Error";
import galleryData from "./annonces.json";

export default function Router() {
  return (
    <div className="Router">
      <Routes>
        {/* Home et LocationCardPage reçoivent les données de galleryData en tant que prop 
        les URLs non valides sont renvoyées vers la page d'erreur avec "/*" 
        l'ensemble du routage enveloppe toute l'application (BrowserRouter dans index.js) */}
        <Route path="/" element={<Home galleryData={galleryData} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/location/:id"
          element={<LocationCardPage galleryData={galleryData} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
