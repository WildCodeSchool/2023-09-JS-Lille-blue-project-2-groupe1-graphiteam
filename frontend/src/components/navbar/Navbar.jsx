import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar_buton">
        <li className="Navbar_li a">
          <button type="submit">Retour</button>
        </li>
        <li className="Navbar_title">Catalogue</li>
        <li className="Navbar_li a">
          <button type="submit">Page d'accueil</button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
