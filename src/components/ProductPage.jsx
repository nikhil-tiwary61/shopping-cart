import "../styles/ProductPage.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProductPage() {
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
      <div className="product-page-body">
        <div className="product-page-details">
          <div className="product-page-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-page-actions">
            <div className="product-page-title">{product.title}</div>
            <div className="product-page-price">${product.price}</div>
            <div className="product-page-rating">
              Rating: {product.rating.rate} Star
            </div>
            <div className="add-to-cart-box">
              <button onClick={() => handleDecrement(quantity)}>-</button>
              <input
                type="number"
                min={0}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={() => handleIncrement(quantity)}>+</button>
              <button onClick={() => handleClick(quantity)}>Add to cart</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="product-page-description">
          <h4>Details:</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
