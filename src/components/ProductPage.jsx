import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const location = useLocation();
  const { fromProductListing } = location.state;
  let product = fromProductListing.product;
  console.log(product);

  return (
    <div className="product-page">
      <div className="product-page-details">
        <div className="product-page-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="product-page-actions">
          <div className="product-page-title">{product.title}</div>
          <div className="product-page-price">{product.price}</div>
          <div className="product-page-rating.rate">{product.rating.rate}</div>
        </div>
      </div>
      <div className="product-page-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}
