import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

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
    <div>
      <HomePage />
    </div>
  );
}

export default App;
