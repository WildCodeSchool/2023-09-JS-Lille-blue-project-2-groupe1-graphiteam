import PropTypes from "prop-types";
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
}) {
  return (
    <div className="card">
      <img
        className="card__picture"
        src={`http://localhost:3310/${img}`}
        alt="oeuvre"
      />
      <article className="card__artist">
        <h2 className="card__title fancy">{artist}</h2>
        <p className="card__description"> {description}</p>
        <p className="card__type">
          {type} - {year}
        </p>

        <article className="card__location">
          <img
            className="artCard__iconMap"
            src="src/assets/icon_map.png"
            alt="icône lieu"
          />
          <p>{`${street} à ${city} (${district})`}</p>
        </article>
      </article>
    </div>
  );
}

ArtCard.propTypes = {
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ArtCard;
