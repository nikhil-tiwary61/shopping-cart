import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { useState } from "react";

export default function Router() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [amount, setAmount] = useState(0);

  function handleClick(product, quantity) {
    if (quantity == 0) return;
    setCart([...cart, { ...product, quantity: quantity }]);
    setAmount(amount + quantity * parseInt(product.price));
    setCartQuantity(cartQuantity + quantity);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "products", element: <ProductListing /> },
        {
          path: "cart",
          element: (
            <Cart cart={cart} cartQuantity={cartQuantity} amount={amount} />
          ),
        },
        {
          path: "/products/productpage/:id",
          element: <ProductPage handleClick={handleClick} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
