import "./Homepage.scss";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function Homepage() {
  return (
    <div className="homepage">
      <PresentationBox />
      <div className="homepage--button--container">
        <h1 className="homepage--title fancy"> Lille Street Art</h1>

        <DropdownMenu />
      </div>
    </div>
  );
}

export default Homepage;
