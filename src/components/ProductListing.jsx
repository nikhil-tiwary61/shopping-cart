import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [processedProducts, setProcessedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchAll, setSearchAll] = useState(true);

  //Search bar
  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      setProcessedProducts(
        products.filter((product) => {
          return product.category.match(searchInput);
        })
      );
      setSearchAll(false);
      console.log(processedProducts);
      setSearchAll(false);
    }
  }

  function handleReset() {
    setSearchAll(true);
  }

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Our Products</h1>
      <input
        type="text"
        value={searchInput}
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleReset}>Reset</button>
      <ul className="product-container">
        {searchAll
          ? products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })
          : processedProducts.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
      </ul>
    </>
  );
}
