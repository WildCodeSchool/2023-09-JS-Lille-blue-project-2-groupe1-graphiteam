import { useState, useEffect, useContext } from "react";
/* import PropTypes from "prop-types"; */
import "./Museum.scss";
import { FilterContext } from "../../contexts/filterContext";

function Museum() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/artpieces`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);
  const [artsIndexLeft, setArtsIndexLeft] = useState(0);
  const [artsIndexRight, setArtsIndexRight] = useState(1);
  const { filter } = useContext(FilterContext);
  const city = [
    "Lille",
    "Tourcoing",
    "Roubaix",
    "Hellemmes",
    "Marquette-Lez-Lille",
    "Villeneuve d'Ascq",
    "Saint-André-Lez-Lille",
  ];
  const filteredArts = city.includes(filter)
    ? arts?.filter((item) => item.city?.includes(filter))
    : arts?.filter((item) => item.district?.includes(filter));
  const [movingLeft, setMovingLeft] = useState("");
  const [movingRight, setMovingRight] = useState("");
  const [isDisabled, setIsDisabled] = useState("");
  const [popUpLeft, setPopUpLeft] = useState("museum__wall museum__wall--left");
  const [popUpRight, setPopUpRight] = useState(
    "museum__wall museum__wall--right"
  );

  const transitionOutNext = () => {
    setMovingRight("museum__img--right--nextLeaving");
    setMovingLeft("museum__img--left--nextLeaving");
  };
  const transitionInNext = () => {
    setMovingRight("museum__img--right--next");
    setMovingLeft("museum__img--left--next");
    setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 1000);
  };
  const transitionOutPrev = () => {
    setMovingRight("museum__img--right--previousLeaving");
    setMovingLeft("museum__img--left--previousLeaving");
  };
  const transitionInPrev = () => {
    setMovingRight("museum__img--right--previous");
    setMovingLeft("museum__img--left--previous");
    setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 1000);
  };
  const disableBtn = () => {
    setIsDisabled("disabled");
    setTimeout(() => {
      setIsDisabled("");
    }, 2000);
  };
  const incrementIndex = () => {
    if (artsIndexLeft >= filteredArts.length - 2) {
      setArtsIndexLeft(0);
    } else {
      setArtsIndexLeft(artsIndexLeft + 2);
    }
    if (artsIndexRight >= filteredArts.length - 2) {
      setArtsIndexRight(1);
    } else {
      setArtsIndexRight(artsIndexRight + 2);
    }
  };
  const decrementIndex = () => {
    if (artsIndexLeft <= 1) {
      setArtsIndexLeft(filteredArts.length - 1);
    } else {
      setArtsIndexLeft(artsIndexLeft - 2);
    }
    if (artsIndexRight <= 1) {
      setArtsIndexRight(filteredArts.length - 2);
    } else {
      setArtsIndexRight(artsIndexRight - 2);
    }
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    transitionOutNext();
    disableBtn();
    setTimeout(() => {
      incrementIndex("");
      transitionInNext();
    }, 1000);
  };
  const handleClickPrevious = (e) => {
    e.preventDefault();
    transitionOutPrev();
    disableBtn();
    setTimeout(() => {
      decrementIndex("");
      transitionInPrev();
    }, 1000);
  };

  const handleClickPopUpLeft = (e) => {
    e.preventDefault();
    if (popUpLeft !== "museum__wall museum__wall--left museum__popUpImg") {
      setPopUpLeft("museum__wall museum__wall--left museum__popUpImg");
    } else {
      setPopUpLeft("museum__wall museum__wall--left");
    }
  };

  const handleClickPopUpRight = (e) => {
    e.preventDefault();
    if (popUpRight !== "museum__wall museum__wall--right museum__popUpImg") {
      setPopUpRight("museum__wall museum__wall--right museum__popUpImg");
    } else {
      setPopUpRight("museum__wall museum__wall--right");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowUp") {
      handleClickNext(event);
    }
    if (event.key === "ArrowDown") {
      handleClickPrevious(event);
    }
  };

  return (
    <button type="button" className="museum" onKeyDown={handleKeyPress}>
      <div className="museum__background">
        <img src="src/assets/anguille.png" alt="Portrait de Camille Claudel" />
      </div>
      <div className="museum__walls">
        {filteredArts ? (
          <div
            className={
              filteredArts?.length === 1
                ? "museum__wall museum__wall--left museum__popUpImg"
                : popUpLeft
            }
          >
            <button
              type="button"
              className="museum__img--button"
              onClick={handleClickPopUpLeft}
            >
              <img
                className={movingLeft}
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  arts[artsIndexLeft].imgSrc
                }`}
                alt={arts[artsIndexLeft].imgAlt}
              />
            </button>
            <article className={{ movingLeft } && "museum__caption"}>
              <strong className="fancy">
                {`${filteredArts[artsIndexLeft].artist} - ${filteredArts[artsIndexLeft].city} `}
              </strong>
              <p className="fancy">
                {`(${filteredArts[artsIndexLeft].street})`} - {/* <br /> */}
                {filteredArts[artsIndexLeft].description}
              </p>
            </article>

            {popUpLeft ===
            "museum__wall museum__wall--left museum__popUpImg" ? (
              <p className="museum__img--escapeMessage text">
                Cliquez ou touchez l'oeuvre pour retourner au Musée.
              </p>
            ) : null}
          </div>
        ) : (
          "Loading"
        )}
        {filteredArts?.length > 1 ? (
          <div className={popUpRight}>
            <button
              type="button"
              className="museum__img--button"
              onClick={handleClickPopUpRight}
            >
              <img
                className={movingRight}
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  arts[artsIndexRight].imgSrc
                }`}
                alt={arts[artsIndexRight].imgAlt}
              />
            </button>
            <p className={movingRight}>
              <strong>
                {`${filteredArts[artsIndexRight].artist} - ${filteredArts[artsIndexRight].city} `}
              </strong>
              {`(${filteredArts[artsIndexRight].street})`} <br />
              {filteredArts[artsIndexRight].description}
            </p>
            {popUpRight ===
            "museum__wall museum__wall--right museum__popUpImg" ? (
              <p className="museum__img--escapeMessage">
                Cliquez ou touchez l'oeuvre pour retourner au Musée.
              </p>
            ) : null}
          </div>
        ) : (
          "Loading"
        )}
        <nav className="museum__navigationArrows">
          <button
            type="button"
            className={`museum__navigationArrows--left ${isDisabled}`}
            onClick={handleClickNext}
            label="flecheavant"
          >
            <img
              className="fleche__haut"
              src="src/assets/flechehaut96.png"
              alt=""
            />
          </button>
          <button
            type="button"
            className={`museum__navigationArrows--right ${isDisabled}`}
            onClick={handleClickPrevious}
            label="flechearriere"
          >
            <img
              className="fleche__bas"
              src="src/assets/flechebas96.png"
              alt=""
            />
          </button>
        </nav>
      </div>
    </button>
  );
}

// Museum.propTypes = {
//   arts: PropTypes.shape({
//     imgAlt: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Museum;
