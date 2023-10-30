import { useState } from "react";
import PropTypes from "prop-types";
import "./Museum.scss";

function Museum({ arts }) {
  const [artsIndexLeft, setArtsIndexLeft] = useState(0);
  const [artsIndexRight, setArtsIndexRight] = useState(1);

  const handleClickNext = (e) => {
    e.preventDefault();
    setArtsIndexLeft(artsIndexLeft + 2);
    setArtsIndexRight(artsIndexRight + 2);
  };

  const handleClickPrevious = (e) => {
    e.preventDefault();
    setArtsIndexLeft(artsIndexLeft - 2);
    setArtsIndexRight(artsIndexRight - 2);
  };

  return (
    <div className="museum">
      <div className="museum__background">
        <img src="src/assets/bg main.jpg" alt="Portrait de Camille Claudel" />
      </div>
      <div className="museum__walls">
        <div className="museum__wall museum__wall--left">
          <img
            className="arts__pics-left"
            src={`http://localhost:3310/${arts[artsIndexLeft].imgSrc}`}
            alt={arts[artsIndexLeft].imgAlt}
          />
          <p>{arts[artsIndexLeft].artist}</p>
        </div>
        <div className="museum__wall museum__wall--right">
          <img
            className="arts__pics-right"
            src={`http://localhost:3310/${arts[artsIndexRight].imgSrc}`}
            alt={arts[artsIndexRight].imgAlt}
          />
          <p>{arts[artsIndexRight].artist}</p>
        </div>
        <nav className="museum__navigationArrows">
          <button
            type="button"
            className="museum__navigationArrows--left"
            onClick={handleClickNext}
          >
            Avant
          </button>
          <button
            type="button"
            className="museum__navigationArrows--right"
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
