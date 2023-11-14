import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./DropdownMenu.scss";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState, useEffect } from "react";

function DropdownMenu() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/artpieces`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [showDistrictList, setshowDistrictList] = useState(false);
  const [showVisitButton, setShowVisitButton] = useState(false);
  const [btnText, setBtnText] = useState("-- Métropole Lilloise --");
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

  const handleClickCity = ({ location }) => {
    selectDistrict(location);
    setBtnText(location);
    setOpen();
    setshowDistrictList(true);
  };
  const handleClickDistrict = ({ location }) => {
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
                onClick={() => handleClickCity({ location })}
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
                onClick={() => handleClickDistrict({ location })}
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
          <Link to="/museum">
            Exposition {">"}
            {">"}
          </Link>
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
