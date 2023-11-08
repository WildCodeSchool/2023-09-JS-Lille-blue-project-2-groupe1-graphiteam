import "./Catalog.scss";
import { useState, useEffect } from "react";
import ArtCard from "../../components/ArtCard/ArtCard";

function Catalog() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);
  console.warn(arts);
  return (
    <div className="catalog" style={{ overflow: "scroll", height: "100vh" }}>
      {arts ? arts.map((art) => <ArtCard key={art.id} />) : "Loading"}
    </div>
  );
}

export default Catalog;
