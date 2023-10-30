import "./Variables.scss";
import "./App.scss";
import "./pages/Museum/Museum.scss";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);
  console.info(arts);
  return (
    <div className="App">
      {arts ? <Homepage arts={arts} /> : "data not found"}
    </div>
  );
}

export default App;
