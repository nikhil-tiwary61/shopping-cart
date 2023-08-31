import "../styles/ProductPage.css";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPage({ handleClick }) {
  const location = useLocation();
  const { fromProductListing } = location.state;
  let product = fromProductListing.product;

  const [quantity, setQuantity] = useState(0);
  function handleDecrement() {
    if (quantity == 0) return;
    setQuantity(quantity - 1);
  }
  function handleIncrement() {
    if (quantity == product.rating.count) return;
    setQuantity(quantity + 1);
  }

  return (
    <div className="product-page">
      <ToastContainer position="top-right" />
      <div className="product-page-body">
        <div className="product-page-details">
          <div className="product-page-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-page-actions">
            <h3 className="text-align-left">
              <b>{product.title}</b>
            </h3>
            <div className="text-align-left">${product.price}</div>
            <div className="text-align-left">
              Rating: {product.rating.rate} Star
            </div>
            <div className="add-to-cart-box">
              <div className="quantity">
                <button
                  className="black-btns"
                  onClick={() => handleDecrement(+quantity)}
                >
                  -
                </button>
                <input
                  type="number"
                  min={0}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  className="black-btns"
                  onClick={() => handleIncrement(+quantity)}
                >
                  +
                </button>
              </div>
              <div className="add-to-cart-button-box">
                <button
                  className="black-btns"
                  onClick={() => handleClick(product, +quantity)}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="continue-shopping">
              <Link to="/products">Continue Shopping</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="product-page-description text-align-left">
          <h4>Description:</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
