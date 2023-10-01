import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar({ cartQuantity }) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <header>
      <div>
        <Link to="/">Shopping Cart App</Link>
      </div>
      <nav>
        <ul className="route-links desktop-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
        <img
          src={visible ? "/closeBtn.png" : "/hamburgerMenu.png"}
          alt="Hamburger Menu"
          className="mobile-menu-btn"
          onClick={handleClick}
        />
        <ul
          className="route-links mobile-menu"
          style={{ display: visible ? "flex" : "none" }}
        >
          <li onClick={() => setVisible(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setVisible(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setVisible(false)}>
            <Link to="products">Products</Link>
          </li>
          <li onClick={() => setVisible(false)}>
            <Link to="cart">
              Cart <span className="cart-quantity">{cartQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
