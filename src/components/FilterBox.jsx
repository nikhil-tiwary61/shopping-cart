import "../styles/FilterBox.css";

export default function FilterBox({ handleFilter }) {
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
          <label htmlFor={category} key={index}>
            <input
              type="checkbox"
              id={category}
              value={category}
              className="checkbox"
              onChange={(e) => handleFilter(e)}
            />
            {category}
          </label>
        );
      })}
    </div>
  );
}
