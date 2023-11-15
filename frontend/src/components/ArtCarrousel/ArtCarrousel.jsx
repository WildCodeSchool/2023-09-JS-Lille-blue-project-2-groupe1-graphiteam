import "./ArtCarrousel.scss";
import { useEffect, useState } from "react";

function ArtCarrousel() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/artpieces`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="carrousel__pics">
      <div className="carrousel__container">
        {arts.map((art) => {
          return (
            <img
              className="art"
              alt={art.imgAlt}
              src={`${import.meta.env.VITE_BACKEND_URL}${art.imgSrc}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArtCarrousel;
