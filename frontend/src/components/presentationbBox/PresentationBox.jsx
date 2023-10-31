import "./PresentationBox.scss";

export default function PresentationBox() {
  return (
    <div className="box__description">
      <img
        src="./src/assets/logo-app.png"
        className="logo-app"
        alt="logo of App"
      />
      <h2 className="title__description">Le Street Art...</h2>
      <p className="text__description">
        ... apporte une touche de couleur, de surprise et de réflexion publics,
        encourageant la discussion et la réflexion, tout en transformant notre
        notre paysage urbain en une galerie d'art en plein air. Il célèbre la
        créativité libre et l'expression personnelle, faisant du street art une
        forme d'art puissante et inspirante qui mérite d'être appréciée et que
        nous allons mettre à l'honneur,à travers ce <b>"musée virtuel..."</b>
      </p>
    </div>
  );
}
