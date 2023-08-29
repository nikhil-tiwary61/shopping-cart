import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import SearchBar from "./SearchBar";

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [processedProducts, setProcessedProducts] = useState([]);
  const [searchAll, setSearchAll] = useState(true);

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Search Bar Feature
  function changeProcessedProducts(searchInput) {
    setProcessedProducts(
      products.filter((product) => {
        return product.category.match(searchInput);
      })
    );
    setSearchAll(false);
  }

  function changeReset() {
    setSearchAll(true);
  }

  return (
    <>
      <h1>Our Products</h1>
      <SearchBar
        changeProcessedProducts={changeProcessedProducts}
        changeReset={changeReset}
      />
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
