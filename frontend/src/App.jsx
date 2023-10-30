import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Museum from "./pages/Museum/Museum";
import "./Variables.scss";
import "./pages/Museum/Museum.scss";
import "./App.scss"

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
      <Navbar />
      {arts ? <Museum arts={arts} /> : <div> data not found </div>}
    </div>
  );
}

export default App;
