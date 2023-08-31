import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [processedProducts, setProcessedProducts] = useState(products);
  const [reset, setReset] = useState(true);
  const [filterTags, setFilterTags] = useState([]);

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }

  useEffect(() => {
    fetchData();
    applyFilters();
  }, [filterTags]);

  //Search Bar Feature
  function changeProcessedProducts(searchInput) {
    setProcessedProducts(
      products.filter((product) => {
        return product.category.match(searchInput);
      })
    );
    setReset(false);
  }

  function changeReset() {
    setReset(true);
  }

  //Filter Feature
  function handleFilter(e) {
    e.target.checked
      ? setFilterTags([...filterTags, e.target.value])
      : setFilterTags(
          filterTags.filter((filterTag) => filterTag !== e.target.value)
        );
  }

  function applyFilters() {
    filterTags.length > 0 ? setReset(false) : setReset(true);
    if (filterTags.length > 0) {
      let tempItems = filterTags.map((filter) => {
        let temp = products.filter((product) => product.category === filter);
        return temp;
      });
      setProcessedProducts(tempItems.flat());
    } else {
      setProcessedProducts([...products]);
    }
  }

  return (
    <>
      <h1 className="product-page-heading">Our Products</h1>
      <SearchBar
        changeProcessedProducts={changeProcessedProducts}
        changeReset={changeReset}
      />
      <FilterBox handleFilter={handleFilter} />
      <ul className="product-container">
        {reset
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
