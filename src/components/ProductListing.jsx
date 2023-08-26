async function fetchProducts() {
  //   const url = "https://fakestoreapi.com/products";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
}
const products = fetchProducts();
console.log(products);

export default function ProductListing() {
  return (
    <>
      <h1>Our Products</h1>
    </>
  );
}
