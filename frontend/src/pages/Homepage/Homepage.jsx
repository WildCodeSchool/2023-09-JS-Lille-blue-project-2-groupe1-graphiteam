import "./Homepage.scss";
import PresentationBox from "../../components/presentationbBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function Homepage() {
  return (
    <div className="homepage">
      <PresentationBox />
      <DropdownMenu />
    </div>
  );
}

export default Homepage;
