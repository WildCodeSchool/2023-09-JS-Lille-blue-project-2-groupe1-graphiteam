import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar_buton">
        <li className="Navbar_li a">
          <button
            className="Navbar_detourbuton"
            type="button"
            onClick={() => {}}
          >
            ◀︎ Retour
          </button>
        </li>
        <li className="Navbar_title">
          <h1>Catalogue</h1>
        </li>
        <li className="Navbar_li a">
          <button
            className="Navbar_detourbuton"
            type="button"
            onClick={() => {}}
          >
            Page d'accueil ▶︎
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
