import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const pathnames = [
  {
    path: "/",
    label: "Accueil",
  },
  {
    path: "/museum",
    label: "Musee",
  },
  {
    path: "/catalog",
    label: "Catalogue",
  },
];

function Navbar() {
  const location = useLocation();

  function changeTitle() {
    const newTitle = pathnames.filter((e) => e.path === location.pathname);
    return <h1>{newTitle[0].label}</h1>;
  }

  function changeLinksLeft() {
    const newPath = pathnames.filter((e) => e.path !== location.pathname);
    if (location.pathname === "/") {
      return "";
    }
    if (location.pathname === "/catalog") {
      return <Link to={newPath[1].path}> ◁ {newPath[1].label}</Link>;
    }
    return <Link to={newPath[0].path}> ◁ {newPath[0].label}</Link>;
  }

  function changeLinksRight() {
    const newPath = pathnames.filter((e) => e.path !== location.pathname);
    if (location.pathname === "/catalog") {
      return <Link to={newPath[0].path}>{newPath[0].label} ▷ </Link>;
    }
    return <Link to={newPath[1].path}>{newPath[1].label} ▷ </Link>;
  }

  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <button className="navbar__button" type="button">
            {changeLinksLeft()}
          </button>
        </li>
        <li className="navbar__title">{changeTitle()}</li>
        <li className="navbar__li">
          <button className="navbar__button" type="button">
            {changeLinksRight()}
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
