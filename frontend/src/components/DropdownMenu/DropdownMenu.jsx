import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./dropdownStyle.scss";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useState } from "react";

function DropdownMenu({ arts }) {
  console.warn(arts);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("--Metropole Lilloise--");
  const [list, setList] = useState("default");
  console.info(list);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    setList(e.target.name);
    setBtnText(e.target.name);
    setOpen();
    setShow(true);
  };
  /*   const filter = (e) => {
   // const filteredArts = arts.filter((element) => element.district === list);
    //console.log(filteredArts);
    //setList(e.target.name);
   // console.log("list:", list);
  }; */
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
      {/* To finish setup the dropdown on click a set isOpen to false also create a new state to put the selected LI or button to show on the main button + add a last button to start visit  */}
      {isOpen && (
        <div className="dropdownMenu__dropdownItem">
          <button
            className="dropdownMenu__button"
            type="submit"
            onClick={handleClick}
            name="Moulins"
            value="Moulins"
          >
            Moulins
          </button>
          <button
            className="dropdownMenu__button"
            type="submit"
            onClick={handleClick}
            name="Gambetta"
            value="Gambetta"
          >
            Gambetta
          </button>
          <button
            className="dropdownMenu__button"
            type="submit"
            onClick={handleClick}
            name="Saint Sauveur"
            value="Saint Sauveur"
          >
            Saint Sauveur
          </button>
        </div>
      )}

      {show && (
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
