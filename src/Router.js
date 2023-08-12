import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LocationCardPage from "./components/LocationCard/LocationCardPage";
import Error from "./components/Error/Error";
import { useGallery } from "./GalleryContext";

export default function Router() {
  const galleryData = useGallery();

  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<LocationCardPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
