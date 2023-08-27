import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App({ cartQuantity }) {
  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
