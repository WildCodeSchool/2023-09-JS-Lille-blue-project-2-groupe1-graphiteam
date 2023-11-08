import "./ArtCard.scss";

function ArtCard() {
  return (
    <div className="card">
      <img className="card__picture" src="" alt="" />
      <article className="card__artist">
        <h4>artist</h4>
        <p>description</p>
      </article>
    </div>
  );
}

export default ArtCard;
