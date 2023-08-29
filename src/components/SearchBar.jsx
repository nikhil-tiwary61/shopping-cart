import "../styles/SearchBar.css";
import { useState } from "react";

export default function SearchBar({ changeProcessedProducts, changeReset }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      changeProcessedProducts(searchInput);
    }
  }
  return (
    <>
      <input
        type="text"
        value={searchInput}
        placeholder="Search"
        className="search-box"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={changeReset}>Reset</button>
    </>
  );
}
