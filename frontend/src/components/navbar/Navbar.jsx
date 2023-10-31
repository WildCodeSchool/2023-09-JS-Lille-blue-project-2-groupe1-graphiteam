import "./navbar.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar_thebuton">
        <li className="Navbar_li">
          <button className="Navbar_buton" type="button" onClick={() => {}}>
            <AiFillCaretLeft size="35px" /> Retour
          </button>
        </li>
        <li className="Navbar_title">
          <h1>Musée</h1>
        </li>
        <li className="Navbar_li">
          <button className="Navbar_buton" type="button" onClick={() => {}}>
            Page d'accueil <AiFillCaretRight size="35px" />
          </button>
        </li>
      </ul>
      <h3> </h3>
    </div>
  );
}
export default Navbar;
