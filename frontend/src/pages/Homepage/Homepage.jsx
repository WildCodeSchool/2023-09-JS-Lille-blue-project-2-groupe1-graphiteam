import "./Homepage.scss";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function Homepage() {
  return (
    <div className="homepage">
      <PresentationBox />
      <div className="homepage--button--container">
        <h4 className="drip">test test test</h4>
        <h1 className="homepage--title fancy"> Lille Street Art</h1>
        {/*  <img
          className="homepage--banner"
          src="src/assets/dirtyBrick.png"
          alt=""
        /> */}
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Homepage;
