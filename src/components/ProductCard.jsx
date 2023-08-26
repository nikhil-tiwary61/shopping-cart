import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <li className="card">
      <Link
        to={"productpage/" + product.id}
        state={{ fromProductListing: { product } }}
      >
        <div className="image">
          <img
            src={product.image}
            alt="Product Image"
            className="product-image"
          />
        </div>
        <div className="product-detail">
          <p className="product-title">
            <b>{product.title}</b>
          </p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </li>
  );
}
