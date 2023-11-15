import "./ArtCarrousel.scss";
import { useEffect, useState } from "react";

function ArtCarrousel() {
  const [arts, setArts] = useState([]);

  // const [artsIndex, setArtsIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="carrousel__pics">
      <div className="images-container">
        {arts.map((art) => {
          return (
            <img
              className="art"
              alt={art.imgAlt}
              src={`http://localhost:3310/${art.imgSrc}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArtCarrousel;
