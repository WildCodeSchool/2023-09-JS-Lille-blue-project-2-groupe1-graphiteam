import "./Homepage.scss";
import StartVisit from "../../components/startVisitBtn";
import PresentationBox from "../../components/presentationbBox/PresentationBox";

function Homepage() {
  return (
    <div className="homepage">
      <PresentationBox />
      <StartVisit />
    </div>
  );
}

export default Homepage;
