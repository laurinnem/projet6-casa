import React from "react";
import "../../styles/Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="contentError">
      <p className="errorNumber">404</p>
      <p classname="errorMessage">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="linkHome" to="/">
        Retournez sur la page d'acceuil
      </Link>
    </div>
  );
}
