import "./PresentationBox.scss";

export default function PresentationBox() {
  return (
    <aside className="box__description">
      <img
        alt="papier déchiré"
        className="navbar__img"
        src="./src/assets/02.png"
      />

      <article>
        <img
          src="./src/assets/lsaLogo.png"
          className="logo-app"
          alt="L S A letter in a graffity style, logo of the page"
        />
        <p className="text__description text__description--first">
          Le Street Art se cache dans la ville, se devine, disparaît au gré des
          bâtiments détruits et des transformations urbaines.
          <strong> Lille&nbsp;Street&nbsp;Art </strong> est un musée virtuel,
          lieu de préservation de la créativité qui se cache dans les recoins de
          notre métropole.
        </p>
        <p className="text__description text__description--second">
          Sélectionnez votre ville, votre quartier et partez à la (re)découverte
          d'œuvres emblématiques ou discrètes, prêtes à vous émerveiller, à vous
          interroger et à vous surprendre.
        </p>
      </article>
      <img
        alt="papier déchiré"
        className="box__paperDown"
        src="./src/assets/01.png"
      />
    </aside>
  );
}
