import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);
  return (
    <>
      <h1>Our Products</h1>
      <ul className="product-container">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </ul>
    </>
  );
}
