import { Outlet } from "react-router-dom";
import "./Variables.scss";
import "./pages/Museum/Museum.scss";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { FilterProvider } from "./contexts/filterContext";

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </FilterProvider>
  );
}

export default App;
