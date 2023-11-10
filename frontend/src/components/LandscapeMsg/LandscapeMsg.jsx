import "./LandscapeMsg.scss";

export default function LandscapeMsg() {
  return (
    <div className="wrapper">
      <img
        className="portraitGif"
        src="src/assets/GIF-portrait.gif"
        alt="mode portrait à paysage"
      />
      <h1>
        ⚠<br />
        Ce site Web ne peut être consulté qu'en mode paysage, merci de basculer
        votre écran
      </h1>
    </div>
  );
}
