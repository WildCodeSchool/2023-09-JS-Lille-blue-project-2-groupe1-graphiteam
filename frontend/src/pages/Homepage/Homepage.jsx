import "./Homepage.scss";
import PresentationBox from "../../components/presentationbBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function Homepage() {
  return (
    <div className="homepage">
      <div className="warning-message">
        <p>This website is only viewable in landscape mode</p>
      </div>
      <PresentationBox />
      <DropdownMenu />
    </div>
  );
}

export default Homepage;
