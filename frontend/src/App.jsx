import { Outlet } from "react-router-dom";
/* import Navbar from "./components/navbar/Navbar";
import Museum from "./pages/Museum/Museum"; */
import "./Variables.scss";
import "./pages/Museum/Museum.scss";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
