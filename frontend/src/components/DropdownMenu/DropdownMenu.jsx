import { Link } from "react-router-dom";
import "./DropdownMenu.scss";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/filterContext";

function DropdownMenu() {
  const [arts, setArts] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  const { setFilter } = useContext(FilterContext);
  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showDistrictList, setshowDistrictList] = useState(false);
  const [showVisitButton, setShowVisitButton] = useState(false);
  const [btnText, setBtnText] = useState("--Métropole Lilloise--");
  const [districtTofilter, setDistrictToFilter] = useState("");
  const uniqueCity = [...new Set(arts?.map((item) => item.city))];
  const filteredDistrict = arts?.filter((item) =>
    item.city?.includes(districtTofilter)
  );
  const uniqueDistrict = [
    ...new Set(filteredDistrict?.map((item) => item.district)),
  ];
  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  const setFilterFunction = (location) => {
    setFilter(location);
  };
  const handleClickCity = ({ location }) => {
    setDistrictToFilter(location);
    setBtnText(location);
    setOpen();
    setshowDistrictList(true);
    setCity(location);
  };
  const handleClickDistrict = ({ location }) => {
    setDistrictToFilter(location);
    setBtnText(location);
    setIsOpen(false);
    setshowDistrictList(false);
    setShowVisitButton(true);
    setFilterFunction(location);
  };
  const handleClickCityOnly = () => {
    setIsOpen(false);
    setshowDistrictList(false);
    setShowVisitButton(true);
    setFilterFunction(city);
  };
  return (
    <div className="dropdownMenu">
      <button className="dropdownMenu__button" type="submit" onClick={setOpen}>
        {btnText}
        {isOpen ? (
          <div className="iconContainer">
            <AiOutlineCaretUp size="20px" />
          </div>
        ) : (
          <div className="iconContainer">
            <AiOutlineCaretDown size="20px" />
          </div>
        )}
      </button>
      {isOpen && (
        <div className="dropdownMenu__cityList">
          {uniqueCity.map((location) => {
            return (
              <button
                className="dropdownMenu__button"
                onClick={() => handleClickCity({ location })}
                type="submit"
                key={`city-${location}`}
              >
                {location}
              </button>
            );
          })}
        </div>
      )}
      {showDistrictList && (
        <div className="dropdownMenu__districtList">
          <button
            type="submit"
            className="dropdownMenu__button"
            onClick={handleClickCityOnly}
          >
            Toute la ville
          </button>
          {uniqueDistrict.map((location) => {
            return (
              <button
                className="dropdownMenu__button"
                onClick={() => handleClickDistrict({ location })}
                type="submit"
                key={`disctrict-${location}`}
              >
                {location}
              </button>
            );
          })}
        </div>
      )}
      {showVisitButton && (
        <button type="submit" className="button__startVisit">
          <AiFillPlayCircle size="50px" /> <Link to="/museum">Exposition</Link>
        </button>
      )}
    </div>
  );
}

// DropdownMenu.propTypes = {
//   arts: PropTypes.shape({
//     city: PropTypes.string.isRequired,
//     district: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default DropdownMenu;
