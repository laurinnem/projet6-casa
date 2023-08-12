import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Router from "./Router";
import { GalleryProvider } from "./GalleryContext";

function App() {
  return (
    <div className="App">
      <GalleryProvider>
        <div className="mainContent">
          <Navbar />
          <Router />
        </div>
        <Footer />
      </GalleryProvider>
    </div>
  );
}

export default App;
