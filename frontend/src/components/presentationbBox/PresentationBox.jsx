import "./PresentationBox.scss";

export default function PresentationBox() {
  return (
    <div className="box__description">
      <img
        src="./src/assets/lsaLogo.png"
        className="logo-app"
        alt="L S A letter in a graffity style, logo of the page"
      />
      <article className="article">
        <h2 className="title__description title">Le Street Art...</h2>
        <p className="text__description text">
          ... apporte une touche de couleur, de surprise et de réflexion
          publics, encourageant la discussion et la réflexion, tout en
          transformant notre notre paysage urbain en une galerie d'art en plein
          air. Il célèbre la créativité libre et l'expression personnelle,
          faisant du street art une forme d'art puissante et inspirante qui
          mérite d'être appréciée et que nous allons mettre à l'honneur,à
          travers ce <b>"musée virtuel..."</b>
        </p>
      </article>
    </div>
  );
}
