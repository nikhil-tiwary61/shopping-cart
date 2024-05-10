import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const { id, image, title, price } = product;
  return (
    <li className="card">
      <Link
        to={"productpage/" + id}
        state={{ fromProductListing: { product } }}
      >
        <div className="image">
          <img src={image} alt="Product Image" className="product-image" />
        </div>
        <div className="product-detail">
          <p className="product-title">
            <b>{title}</b>
          </p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </li>
  );
}
