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
  const [searchInput, setSearchInput] = useState("");

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }

  //for fetching data
  useEffect(() => {
    fetchData();
  }, []);

  //for applying filters
  useEffect(() => {
    applyFilters();
  }, [filterTags]);

  //for searchbar
  useEffect(() => {
    searchProducts(searchInput);
  }, [searchInput]);

  //Search Bar Feature
  function handleSearch(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      searchProducts(searchInput);
    }
  }

  function searchProducts(searchInput) {
    searchInput.length > 0 ? setReset(false) : setReset(true);
    setProcessedProducts(
      products.filter((product) => {
        return product.title.match(searchInput);
      })
    );
  }

  function handleFilter(selectedCategory) {
    if (filterTags.includes(selectedCategory)) {
      let filters = filterTags.filter(
        (filterTag) => filterTag !== selectedCategory
      );
      setFilterTags(filters);
    } else {
      setFilterTags([...filterTags, selectedCategory]);
    }
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
      <SearchBar handleSearch={handleSearch} searchInput={searchInput} />
      <FilterBox handleFilter={handleFilter} filterTags={filterTags} />
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
