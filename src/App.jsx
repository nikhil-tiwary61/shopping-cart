import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App({ cartDetails }) {
  return (
    <>
      <Navbar cartDetails={cartDetails} />
      <Outlet />
    </>
  );
}

export default App;
