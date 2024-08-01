import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ cartDetails }) {
  const { cartQuantity } = cartDetails;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setVisible(!visible);
  }

  function goToHomePage() {
    navigate("/");
  }

  return (
    <header>
      <img src="/banner.png" alt="Banner" onClick={goToHomePage} />
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
            <Link to="cart" className="position-relative">
            <FontAwesomeIcon icon={faCartShopping} />
              Cart <span className="position-absolute translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>
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
          className="list-group mobile-menu position-absolute"
          style={{ display: visible ? "flex" : "none" }}
        >
          <li className="list-group-item" onClick={() => setVisible(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="list-group-item" onClick={() => setVisible(false)}>
            <Link to="/about">About</Link>
          </li>
          <li className="list-group-item" onClick={() => setVisible(false)}>
            <Link to="products">Products</Link>
          </li>
          <li className="list-group-item" onClick={() => setVisible(false)}>
          <Link to="cart" className="position-relative">
            <FontAwesomeIcon icon={faCartShopping} />
              Cart <span className="position-absolute translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
