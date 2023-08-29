export default function FilterBox({ handleFilter, handleApplyFilters }) {
  return (
    <>
      <fieldset>
        <label htmlFor="mens'clothing">
          <input
            type="checkbox"
            id="mens'clothing"
            value="men's clothing"
            onChange={(e) => handleFilter(e)}
          />
          Men&apos;s Clothing
        </label>
        <label htmlFor="jewelery">
          <input
            type="checkbox"
            id="jewelery"
            value="jewelery"
            onChange={(e) => handleFilter(e)}
          />
          Jewelery
        </label>
        <label htmlFor="electronics">
          <input
            type="checkbox"
            id="electronics"
            value="electronics"
            onChange={(e) => handleFilter(e)}
          />
          Electronics
        </label>
        <label htmlFor="womens'clothing">
          <input
            type="checkbox"
            id="womens'clothing"
            value="women's clothing"
            onChange={(e) => handleFilter(e)}
          />
          Women&apos;s Clothing
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </fieldset>
    </>
  );
}
