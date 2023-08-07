import React from "react";
import "../../styles/About.scss";
import "../../styles/Onglets.scss";
import Onglet from "./Onglet";
import ImageAbout from "../../assets/ImageAbout.png";

export default function About() {
  return (
    <div className="contentAbout">
      <div className="bannerImageAbout">
        <img
          className="imageAbout"
          src={ImageAbout}
          alt="paysage de montagne"
        ></img>
      </div>
      <div className="ongletsAbout">
        <Onglet
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
        />
        <Onglet
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Onglet
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Onglet
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
