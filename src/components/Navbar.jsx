import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ cartQuantity }) {
  return (
    <header>
      <div>
        <Link to="/">Shopping App</Link>
      </div>
      <nav>
        <ul className="route-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">
              Cart <span className="cart-quantity">{cartQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
