export default function FilterBox({ handleFilter, handleApplyFilters }) {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <label htmlFor={category} key={index}>
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={(e) => handleFilter(e)}
            />
            {category}
          </label>
        );
      })}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}
