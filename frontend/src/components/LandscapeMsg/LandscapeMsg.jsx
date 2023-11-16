import "./LandscapeMsg.scss";

export default function LandscapeMsg() {
  return (
    <div className="landscape__wrapper">
      <img
        className="landscape__portraitMode"
        src="src/assets/GIF-portrait.gif"
        alt="mode portrait à paysage"
      />
      <h1>
        <p className="landscape__sign">⚠</p>
        <p className="landscape__portraitMode--explanation">
          Ce site Web ne peut être consulté qu'en mode paysage, merci de
          basculer votre écran.
        </p>
      </h1>
    </div>
  );
}
