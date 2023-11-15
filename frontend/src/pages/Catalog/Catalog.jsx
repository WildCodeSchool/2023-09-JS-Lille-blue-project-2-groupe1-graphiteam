import "./Catalog.scss";
import { useState, useEffect } from "react";
import ArtCard from "../../components/ArtCard/ArtCard";
import ArtCarrousel from "../../components/ArtCarrousel/ArtCarrousel";

function Catalog() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/artpieces`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);
  console.warn(arts);
  return (
    <div className="catalog">
      <div className="carrousel">
        <ArtCarrousel />
      </div>
      <div className="cards" style={{ overflow: "scroll", overflowX: "clip" }}>
        {arts
          ? arts.map((art) => (
              <ArtCard
                key={art.id}
                img={art.imgSrc}
                artist={art.artist}
                city={art.city}
                description={art.description}
                district={art.district}
                street={art.street}
                type={art.type}
                year={art.year}
                lieu={art.lieu}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Catalog;
