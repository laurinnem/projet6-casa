import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <Navbar />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
