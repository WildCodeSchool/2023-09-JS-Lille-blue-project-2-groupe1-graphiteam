import { Link } from "react-router-dom";
import "./DropdownMenu.scss";
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/filterContext";

function DropdownMenu() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/artpieces`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  const { setFilter } = useContext(FilterContext);
  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showDistrictList, setshowDistrictList] = useState(false);
  const [showVisitButton, setShowVisitButton] = useState(false);
  const [btnText, setBtnText] = useState("Métropole Lilloise");
  const [districtToFilter, setDistrictToFilter] = useState("");

  const uniqueCity = [];
  arts?.map((item) =>
    uniqueCity.includes(item.city) ? "" : uniqueCity.push(item.city)
  );
  const filteredDistrict = arts?.filter((item) =>
    item.city?.includes(districtToFilter)
  );
  const uniqueDistrict = [];
  filteredDistrict?.map((item) =>
    uniqueDistrict.includes(item.district)
      ? ""
      : uniqueDistrict.push(item.district)
  );
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
    <div>
      <div className="dropdown__Container">
        <div className="dropdownMenu">
          <button
            className="dropdownMenu__button fancy"
            type="submit"
            onClick={setOpen}
          >
            {btnText}
            {isOpen ? (
              <div className="iconContainer fancy">
                <img
                  className="dropDownMenu__arrow"
                  src="src/assets/yellowUp.png"
                  alt="a spray painted arrow up"
                />
              </div>
            ) : (
              <div className="iconContainer fancy">
                <img
                  className="dropDownMenu__arrow"
                  src="src/assets/yellowDown.png"
                  alt="a spray painted arrow down"
                />
              </div>
            )}
          </button>
          {isOpen && (
            <div className="dropdownMenu__cityList fancy">
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
            <div className="dropdownMenu__districtList city">
              <button
                type="submit"
                className="dropdownMenu__button fancy"
                onClick={handleClickCityOnly}
              >
                Toute la ville
              </button>
              {uniqueDistrict.map((location) => {
                return (
                  <button
                    className="dropdownMenu__button fancy"
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
            <div className="button__startVisit">
              <button type="submit" className="button__startVisit fancy">
                <Link to="/museum">Exposition</Link>
              </button>
              <img className="small" src="src/assets/arrowRightHD.png" alt="" />
            </div>
          )}
        </div>
        {showVisitButton ? (
          <img
            className="dropdownMenu__dripping"
            src="src/assets/dripDDYellow.png"
            alt="dripping paint"
          />
        ) : (
          <img
            className="dropdownMenu__dripping"
            src="src/assets/dripDDGreen.png"
            alt="dripping paint"
          />
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
