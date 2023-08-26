import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const location = useLocation();
  const { fromProductListing } = location.state;
  let product = fromProductListing.product;
  console.log(product);

  return (
    <div className="product-page">
      <p>{product.title}</p>
    </div>
  );
}
