import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/misc/Navbar";

function App({ cartDetails }) {
  return (
    <>
      <Navbar cartDetails={cartDetails} />
      <Outlet />
    </>
  );
}

export default App;
