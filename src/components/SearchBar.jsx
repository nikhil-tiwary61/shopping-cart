import "../styles/SearchBar.css";

export default function SearchBar({ handleSearch, searchInput }) {
  return (
    <>
      <input
        type="text"
        value={searchInput}
        placeholder="Search"
        className="search-box"
        onChange={(e) => handleSearch(e)}
      />
    </>
  );
}
