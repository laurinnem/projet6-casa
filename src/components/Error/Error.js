import React from "react"
import {Link} from "react-router-dom"

export default function Error() {
    return(
        <div>
            <p>404<br/>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retournez sur la page d'acceuil</Link>
        </div>
    )
}