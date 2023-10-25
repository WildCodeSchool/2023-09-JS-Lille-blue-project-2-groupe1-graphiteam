import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Counter from "./components/Counter";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [arts, setArts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3310/artpieces")
      .then((response) => {
        setArts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.info(arts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to your P2 project</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
