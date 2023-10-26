import { useEffect, useState } from "react";
/* import Counter from "./components/Counter";
import logo from "./assets/logo.svg"; */
import "./App.css";
import Main from "./pages/main/main";

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
      <Main />
    </div>
  );
}

export default App;
