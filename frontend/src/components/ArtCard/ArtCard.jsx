/* eslint-disable react/prop-types */
import "./ArtCard.scss";

function ArtCard({
  img,
  artist,
  description,
  city,
  district,
  street,
  type,
  year,
  lieu,
}) {
  return (
    <div className="card">
      <img
        className="card__picture"
        src={`http://localhost:3310/${img}`}
        alt=""
      />
      <article className="card__artist">
        <h2 className="card__title">Artiste: {artist}</h2>
        <h4>Adresse:</h4>
        <article className="card__lieu">
          {lieu}

          <p className="card__city"> {city}</p>
          <p className="card__street"> {street}</p>
          <p className="card__district"> {district}</p>
        </article>
        <h4>Description:</h4>
        <p className="card__description"> {description}</p>
        <p className="card__type">{type}</p>
        <p className="card__year">{year}</p>
      </article>
    </div>
  );
}

export default ArtCard;
