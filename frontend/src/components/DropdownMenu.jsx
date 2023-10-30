import PropTypes from "prop-types";
import "./dropdownMenu.scss";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import StartVisitBtn from "./StartVisitBtn";

function DropdownMenu({ arts }) {
  console.warn(arts);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("--Metropole Lilloise--");
  const [list, setList] = useState("default");

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
    <div>
      <button type="submit" onClick={setOpen}>
        {btnText}
        {isOpen ? (
          <div className="iconContainer">
            <AiOutlineCaretUp />
          </div>
        ) : (
          <div className="iconContainer">
            <AiOutlineCaretDown />
          </div>
        )}
      </button>
      {/* To finish setup the dropdown on click a set isOpen to false also create a new state to put the selected LI or button to show on the main button + add a last button to start visit  */}
      {isOpen && (
        <div className="dropdown__menu">
          <button
            className="button__dropdown"
            type="submit"
            onClick={handleClick}
            name="Moulins"
            value="Moulins"
          >
            Moulins
          </button>
          <button
            className="button__dropdown"
            type="submit"
            onClick={handleClick}
            name="Gambetta"
            value="Gambetta"
          >
            Gambetta
          </button>
          <button
            className="button__dropdown"
            type="submit"
            onClick={handleClick}
            name="Saint Sauveur"
            value="Saint Sauveur"
          >
            Saint Sauveur
          </button>
        </div>
      )}

      {show && <StartVisitBtn list={list} />}
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
