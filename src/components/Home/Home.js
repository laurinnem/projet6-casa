import React, {useState, useEffect} from "react"
import LocationCard from "../LocationCard/LocationCard";


export default function Home() {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        fetch("./annonces.json")
        .then((response) => response.json())
        .then((data) => setGalleryData(data))
        .catch((error) => console.error("erreur lors du chargement du fichier JSON:", error));

    }, [])
    return(
        <div>
        <div className="BannerImageHome">
            <img className="ImageHome" 
            src="./assets/ImageHome.png" 
            alt="paysage de bord de mer "></img>
            <h1>Chez nous, partout et ailleurs</h1>
        </div>
        <div className="Gallery">
            {galleryData.map((item) => (
                <LocationCard key={item.id} title={item.title} />
            ))}
        
        </div>
        </div>
    );
}