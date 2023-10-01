import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  function goToShop() {
    navigate("/products");
  }

  return (
    <div className="homepage">
      <h1>Welcome to our shop</h1>
      <p>From clothes to accessories, electronics to home decor, we got you!</p>
      <button className="black-btns" id="start-shopping" onClick={goToShop}>
        go to shop &rarr;
      </button>
    </div>
  );
}
