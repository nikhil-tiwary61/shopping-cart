import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App({ cartQuantity }) {
  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet />
    </>
  );
}

export default App;
