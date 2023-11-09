import "./ArtCard.scss";

// eslint-disable-next-line react/prop-types
function ArtCard({ img }) {
  return (
    <div className="card">
      <img
        className="card__picture"
        src={`http://localhost:3310/${img}`}
        alt=""
      />
      <article className="card__artist">
        <h3 className="card__title">Artiste</h3>
        <p className="card__description">description</p>
      </article>
    </div>
  );
}

export default ArtCard;
