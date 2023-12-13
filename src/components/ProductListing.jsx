import { useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";

const initialState = {
  reset: true,
  searchInput: "",
  filterTags: [],
  products: [],
  processedProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_RESET":
      return { ...state, reset: action.payload };
    case "CHANGE_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "CHANGE_FILTER_TAGS":
      return { ...state, filterTags: action.payload };
    case "CHANGE_PRODUCTS":
      return { ...state, products: action.payload };
    case "CHANGE_PROCESSED_PRODUCTS":
      return { ...state, processedProducts: action.payload };
    default:
      return state;
  }
};

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchData() {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => changeProducts(response));
  }

  //for fetching data
  useEffect(() => {
    fetchData();
  }, []);

  //for applying filters
  useEffect(() => {
    applyFilters();
  }, [state.filterTags]);

  //for searchbar
  useEffect(() => {
    searchProducts(state.searchInput);
  }, [state.searchInput]);

  function toggleReset(boolean) {
    dispatch({ type: "TOGGLE_RESET", payload: boolean });
  }
  function changeSearchInput(val) {
    dispatch({ type: "CHANGE_SEARCH_INPUT", payload: val });
  }
  function changeFilterTags(tags) {
    dispatch({ type: "CHANGE_FILTER_TAGS", payload: tags });
  }
  function changeProducts(val) {
    dispatch({ type: "CHANGE_PRODUCTS", payload: val });
  }
  function changeProcessedProducts(val) {
    dispatch({ type: "CHANGE_PROCESSED_PRODUCTS", payload: val });
  }

  //Search Bar Feature
  function handleSearch(e) {
    e.preventDefault();
    changeSearchInput(e.target.value);
    if (state.searchInput.length > 0) {
      searchProducts(state.searchInput);
    }
  }

  function searchProducts(searchInput) {
    state.searchInput.length > 0 ? toggleReset(false) : toggleReset(true);
    changeProcessedProducts(
      state.products.filter((product) => {
        return product.title.match(searchInput);
      })
    );
  }

  //Filter feature
  function handleFilter(selectedCategory) {
    if (state.filterTags.includes(selectedCategory)) {
      let filters = state.filterTags.filter(
        (filterTag) => filterTag !== selectedCategory
      );
      changeFilterTags(filters);
    } else {
      changeFilterTags([...state.filterTags, selectedCategory]);
    }
  }

  function applyFilters() {
    state.filterTags.length > 0 ? toggleReset(false) : toggleReset(true);
    if (state.filterTags.length > 0) {
      let tempItems = state.filterTags.map((filter) => {
        let temp = state.products.filter(
          (product) => product.category === filter
        );
        return temp;
      });
      changeProcessedProducts(tempItems.flat());
    } else {
      changeProcessedProducts([...state.products]);
    }
  }

  return (
    <>
      <h1 className="product-page-heading">Our Products</h1>
      <SearchBar handleSearch={handleSearch} searchInput={state.searchInput} />
      <FilterBox handleFilter={handleFilter} filterTags={state.filterTags} />
      <ul className="product-container">
        {state.reset
          ? state.products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })
          : state.processedProducts.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
      </ul>
    </>
  );
}
