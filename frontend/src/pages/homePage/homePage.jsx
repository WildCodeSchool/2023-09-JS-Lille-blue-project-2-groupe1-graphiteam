import PropTypes from "prop-types";
import DropdownMenu from "../../components/DropdownMenu";
import "./homePage.scss";

function HomePage({ arts }) {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <h1>homepage</h1>
        <DropdownMenu arts={arts} />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  arts: PropTypes.shape({
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
