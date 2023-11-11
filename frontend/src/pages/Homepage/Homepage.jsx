import "./Homepage.scss";
import PresentationBox from "../../components/presentationbBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "../../fonts/DonGraffiti.otf";

function Homepage() {
  return (
    <div className="homepage">
      <PresentationBox />
      <div className="homepage--button--container">
        <h1 className="homepage--title font"> Lille Street Art</h1>
        <img
          className="homepage--banner"
          src="src/assets/dirtyBrick.png"
          alt=""
        />
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Homepage;
