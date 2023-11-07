import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Museum.scss";

function Museum() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  /*   const [clickAhead, setClickAhead] = useState(true);
  const [clickBack, setClickBack] = useState(true); */
  const [artsIndexLeft, setArtsIndexLeft] = useState(0);
  const [artsIndexRight, setArtsIndexRight] = useState(1);
  const [movingLeft, setMovingLeft] = useState("");
  const [movingRight, setMovingRight] = useState("");
  const [isDisabled, setIsDisabled] = useState("");

  const transitionOutNext = () => {
    setMovingRight("museum__img--right--nextLeaving");
    setMovingLeft("museum__img--left--nextLeaving");
    /*     setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 2000); */
  };
  const transitionInNext = () => {
    setMovingRight("museum__img--right--next");
    setMovingLeft("museum__img--left--next");
    setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 2000);
  };
  const transitionOutPrev = () => {
    setMovingRight("museum__img--right--previousLeaving");
    setMovingLeft("museum__img--left--previousLeaving");
    /*     setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 2000); */
  };
  const transitionInPrev = () => {
    setMovingRight("museum__img--right--previous");
    setMovingLeft("museum__img--left--previous");
    setTimeout(() => {
      setMovingRight("");
      setMovingLeft("");
    }, 2000);
  };

  /*   const transitionBackward = () => {
    setMovingRight("museum__img--right--previous");
    setTimeout(() => {
      setMovingRight("");
    }, 2000);
    setMovingLeft("museum__img--left--previous");
    setTimeout(() => {
      setMovingLeft("");
    }, 2000);
  }; */
  const disableBtn = () => {
    setIsDisabled("disabled");
    setTimeout(() => {
      setIsDisabled("");
    }, 4000);
  };
  const incrementIndex = () => {
    if (artsIndexLeft >= arts.length - 1) {
      setArtsIndexLeft(0);
    } else {
      setArtsIndexLeft(artsIndexLeft + 2);
    }
    if (artsIndexRight >= arts.length - 2) {
      setArtsIndexRight(1);
    } else {
      setArtsIndexRight(artsIndexRight + 2);
    }
  };
  const decrementIndex = () => {
    if (artsIndexLeft <= 1) {
      setArtsIndexLeft(arts.length - 1);
    } else {
      setArtsIndexLeft(artsIndexLeft - 2);
    }
    if (artsIndexRight <= 1) {
      setArtsIndexRight(arts.length - 2);
    } else {
      setArtsIndexRight(artsIndexRight - 2);
    }
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    transitionOutNext();
    /* disableBtn(); */
    setTimeout(() => {
      incrementIndex("");
      transitionInNext();
    }, 2000);
  };

  const handleClickPrevious = (e) => {
    e.preventDefault();
    /*     setClickBack(!clickBack);
    setTimeout(() => {
      setClickBack();
    }, 2000); */
    transitionOutPrev();
    /* disableBtn(); */
    setTimeout(() => {
      decrementIndex("");
      transitionInPrev();
    }, 2000);
    /*  transitionBackward(); */
    disableBtn();
  };

  return (
    <div className="museum">
      <div className="museum__background">
        <img src="src/assets/bg main.jpg" alt="Portrait de Camille Claudel" />
      </div>
      <div className="museum__walls">
        {arts ? (
          <div className="museum__wall museum__wall--left">
            <img
              className={movingLeft}
              src={`http://localhost:3310/${arts[artsIndexLeft].imgSrc}`}
              alt={arts[artsIndexLeft].imgAlt}
            />
            <p>
              <strong>
                {`${arts[artsIndexLeft].artist} - ${arts[artsIndexLeft].city} `}
              </strong>
              {`(${arts[artsIndexLeft].street})`} <br />
              {arts[artsIndexLeft].description}
            </p>
          </div>
        ) : (
          "Loading"
        )}
        {arts ? (
          <div className="museum__wall museum__wall--right">
            <img
              className={
                movingRight
                /* (clickAhead && "museum__img--right--next") ||
                (clickBack && "museum__img--right--previous") */
              }
              src={`http://localhost:3310/${arts[artsIndexRight].imgSrc}`}
              alt={arts[artsIndexRight].imgAlt}
            />
            <p>
              <strong>
                {`${arts[artsIndexRight].artist} - ${arts[artsIndexRight].city} `}
              </strong>
              {`(${arts[artsIndexRight].street})`} <br />
              {arts[artsIndexRight].description}
            </p>
          </div>
        ) : (
          "Loading"
        )}
        <nav className="museum__navigationArrows">
          <button
            type="button"
            className={`museum__navigationArrows--left ${isDisabled}`}
            onClick={handleClickNext}
          >
            Avant
          </button>
          <button
            type="button"
            className={`museum__navigationArrows--right ${isDisabled}`}
            onClick={handleClickPrevious}
          >
            Arrière
          </button>
        </nav>
      </div>
    </div>
  );
}

Museum.propTypes = {
  arts: PropTypes.shape({
    imgAlt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Museum;
