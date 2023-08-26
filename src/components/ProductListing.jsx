import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

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
      <Navbar />
      <h1>Our Products</h1>
      <div>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </>
  );
}
