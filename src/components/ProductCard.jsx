import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="image">
        <img
          src={product.image}
          alt="Product Image"
          className="product-image"
        />
      </div>
      <div className="product-detail">
        <h4>
          <b>{product.title}</b>
        </h4>
        <h4>${product.price}</h4>
      </div>
    </div>
  );
}
