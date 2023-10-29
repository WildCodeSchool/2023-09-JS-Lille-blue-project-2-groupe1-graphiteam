import { useEffect, useState } from "react";
import "./App.scss";
import PresentationBox from "./components/presentationbBox/PresentationBox";

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
      <PresentationBox />
    </div>
  );
}

export default App;
