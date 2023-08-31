import "../styles/FilterBox.css";

export default function FilterBox({ handleFilter, filterTags }) {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  return (
    <div className="filter-box">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={filterTags.includes(category) ? "active" : ""}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
