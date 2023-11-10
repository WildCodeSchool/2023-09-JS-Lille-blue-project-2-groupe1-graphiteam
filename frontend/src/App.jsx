import { Outlet } from "react-router-dom";
import "./Variables.scss";
import "./pages/Museum/Museum.scss";
import "./App.scss";
import LandscapeMsg from "./components/LandscapeMsg/LandscapeMsg";
import Navbar from "./components/Navbar/Navbar";
import { FilterProvider } from "./contexts/filterContext";

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <div className="warning-msg">
          <LandscapeMsg />
        </div>
        <div className="landscape">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;
