import "./PresentationBox.scss";

export default function PresentationBox() {
  return (
    <div className="box__description">
      <img
        src="./src/assets/lsaLogo.png"
        className="logo-app"
        alt="L S A letter in a graffity style, logo of the page"
      />
      <h2 className="title__description">Bienvenue au Musée</h2>
      <p className="text__description">
        Le Street Art apporte de fabuleuses touches de couleur, de surprise et
        de réflexion à notre quotidien. Ce genre encourage la discussion,
        l'échange et tranforme notre paysage urbain en une galerie d'art à ciel
        ouvert. Il célèbre la créativité libre et l'expression personnelle,
        c'est une forme d'art puissante et inspirante qui mérite d'être
        appréciée et que nous avons plaisir à mettre à l'honneur dans ce
        <b> musée virtuel</b>.
      </p>
    </div>
  );
}
