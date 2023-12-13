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

const updateProcessedProducts = (state, searchInput) => {
  const processedProducts = state.products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return processedProducts;
};

export default function ProductListing() {
  const url = "https://fakestoreapi.com/products";
  const [state, dispatch] = useReducer(reducer, initialState);
  const { reset, searchInput, filterTags } = state;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "CHANGE_PRODUCTS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //for fetching data
  useEffect(() => {
    fetchData();
  }, []);

  //for changing processed products
  useEffect(() => {
    const applyFilters = () => {
      let processedProducts = [...state.products];

      if (state.filterTags.length > 0) {
        processedProducts = state.products.filter((product) =>
          state.filterTags.includes(product.category)
        );
      }

      dispatch({
        type: "CHANGE_PROCESSED_PRODUCTS",
        payload: processedProducts,
      });
      dispatch({
        type: "TOGGLE_RESET",
        payload: processedProducts.length === 0,
      });
    };

    applyFilters();
  }, [state.filterTags, state.products]);

  //Search Bar Feature
  const handleSearch = (e) => {
    const input = e.target.value;
    dispatch({ type: "CHANGE_SEARCH_INPUT", payload: input });
    dispatch({
      type: "CHANGE_PROCESSED_PRODUCTS",
      payload: updateProcessedProducts(state, input),
    });
    dispatch({
      type: "TOGGLE_RESET",
      payload: input.length > 0 ? false : true,
    });
  };

  //Filter feature
  const handleFilter = (selectedCategory) => {
    const updatedFilters = filterTags.includes(selectedCategory)
      ? filterTags.filter((filterTag) => filterTag !== selectedCategory)
      : [...filterTags, selectedCategory];

    dispatch({ type: "CHANGE_FILTER_TAGS", payload: updatedFilters });
  };

  return (
    <>
      <h1 className="product-page-heading">Our Products</h1>
      <SearchBar handleSearch={handleSearch} searchInput={searchInput} />
      <FilterBox handleFilter={handleFilter} filterTags={filterTags} />
      <ul className="product-container">
        {reset
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
