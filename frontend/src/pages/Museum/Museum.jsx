import "./Museum.scss";

function Museum() {
  return (
    <div className="museum">
      <div className="museum__background">
        <img src="src/assets/bg main.jpg" alt="oeuvre" />
      </div>
      <div className="museum__walls">
        <div className="museum__wall museum__wall--left">
          <img src="src/assets/tableaux/Mcity_moulins_2015.jpg" alt="oeuvre" />
          <p>M City - Lille (Moulins) - 2015</p>
        </div>
        <div className="museum__wall museum__wall--right">
          <img
            src="src/assets/tableaux/jefaerosol_roubaix_2017.jpg"
            alt="oeuvre"
          />
          <p>Ted Nomad - Roubaix - 2017</p>
        </div>
      </div>
    </div>
  );
}

export default Museum;
