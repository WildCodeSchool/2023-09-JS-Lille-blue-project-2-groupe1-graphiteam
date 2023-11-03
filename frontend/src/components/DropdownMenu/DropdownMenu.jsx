import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./dropdownStyle.scss";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useState, useEffect } from "react";

function DropdownMenu() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [showDistrictList, setshowDistrictList] = useState(false);
  const [showVisitButton, setShowVisitButton] = useState(false);
  const [btnText, setBtnText] = useState("--Metropole Lilloise--");
  const [district, selectDistrict] = useState("");
  const uniqueCity = [...new Set(arts?.map((item) => item.city))];
  const filteredDistrict = arts?.filter((item) =>
    item.city?.includes(district)
  );
  const uniqueDistrict = [
    ...new Set(filteredDistrict?.map((item) => item.district)),
  ];

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCity = ({ location }) => {
    selectDistrict(location);
    setOpen();
    setshowDistrictList(true);
  };
  const handleDistrict = ({ location }) => {
    selectDistrict(location);
    setBtnText(location);
    setIsOpen(false);
    setshowDistrictList(false);
    setShowVisitButton(true);
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
                onClick={() => handleCity({ location })}
                type="submit"
                key={location}
              >
                {location}
              </button>
            );
          })}
        </div>
      )}
      {showDistrictList && (
        <div className="dropdownMenu__districtList">
          {uniqueDistrict.map((location) => {
            return (
              <button
                className="dropdownMenu__button"
                onClick={() => handleDistrict({ location })}
                type="submit"
                key={location}
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

DropdownMenu.propTypes = {
  arts: PropTypes.shape({
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
  }).isRequired,
};

export default DropdownMenu;
