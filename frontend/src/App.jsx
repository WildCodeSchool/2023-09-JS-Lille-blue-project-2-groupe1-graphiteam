import { Outlet } from "react-router-dom";
import "./Variables.scss";
import "./pages/Museum/Museum.scss";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
