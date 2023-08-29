import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [processedProducts, setProcessedProducts] = useState([]);
  const [searchAll, setSearchAll] = useState(true);
  const [filterTags, setFilterTags] = useState([]);

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

  //Filter Feature
  function handleFilter(e) {
    e.target.checked
      ? setFilterTags([...filterTags, e.target.value])
      : setFilterTags(
          filterTags.filter((filterTag) => filterTag !== e.target.value)
        );
  }

  function handleApplyFilters() {
    filterTags.length > 0 ? setSearchAll(false) : setSearchAll(true);
    setProcessedProducts(
      products.filter((product) => {
        return filterTags.length > 0
          ? filterTags.every((filtertag) => filtertag == product.category)
          : products;
      })
    );
  }

  return (
    <>
      <h1 className="product-page-heading">Our Products</h1>
      <SearchBar
        changeProcessedProducts={changeProcessedProducts}
        changeReset={changeReset}
      />
      <FilterBox
        handleFilter={handleFilter}
        handleApplyFilters={handleApplyFilters}
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
