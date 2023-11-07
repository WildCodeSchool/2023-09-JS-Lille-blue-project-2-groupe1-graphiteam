import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <button className="navbar__button" type="button" onClick={() => {}}>
            {" "}
            ◁ Retour
          </button>
        </li>
        <li className="navbar__title">
          <h1>Musée</h1>
        </li>
        <li className="navbar__li">
          <button className="navbar__button" type="button" onClick={() => {}}>
            Page d'accueil ▷{" "}
          </button>
        </li>
      </ul>
      <h3> </h3>
    </div>
  );
}
export default Navbar;
