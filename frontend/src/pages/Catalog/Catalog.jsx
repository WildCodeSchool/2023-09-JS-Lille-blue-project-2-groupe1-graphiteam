import "./Catalog.scss";
import ArtCard from "../../components/ArtCard/ArtCard";

function Catalog() {
  return (
    <div className="catalog">
      <h2>Welcome to the catalog</h2>
      {/* key added so ArtCard is read, waiting for context fetch and map */}
      <h3 key={ArtCard}>Style me !</h3>;
    </div>
  );
}

export default Catalog;
