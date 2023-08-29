import "../styles/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const featuredImage1 =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  const featuredImage2 =
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";
  const featuredImage3 =
    "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg";
  const featuredImage4 =
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  return (
    <div className="homepage">
      <h1>Welcome to our shop</h1>
      <p>From clothes to accessories, electronics to home decor, we got you!</p>
      <div id="start-shopping">
        <Link to="/products">Go to shop &rarr;</Link>
      </div>
      <div className="categories">
        <div>
          <img src={featuredImage1} alt="Featured Image" />
        </div>
        <div>
          <img src={featuredImage2} alt="Featured Image" />
        </div>
        <div>
          <img src={featuredImage3} alt="Featured Image" />
        </div>
        <div>
          <img src={featuredImage4} alt="Featured Image" />
        </div>
      </div>
    </div>
  );
}
