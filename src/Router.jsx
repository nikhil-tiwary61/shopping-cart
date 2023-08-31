import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { useState } from "react";
import ErrorPage from "./components/ErrorPage";
import { toast } from "react-toastify";

export default function Router() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  function handleClick(product, quantity) {
    if (quantity == 0) toast.info("Quantity not selected");
    if (quantity > product.rating.count) toast.info("Limited stock available");
    setCart([...cart, { ...product, quantity: quantity }]);
    setCartAmount(cartAmount + quantity * product.price);
    setCartQuantity(cartQuantity + quantity);
  }

  function handleRemoveFromCart(product) {
    let productsLeft = cart.filter((cartItem) => cartItem.id != product.id);
    setCart([...productsLeft]);
    setCartQuantity(cartQuantity - product.quantity);
    setCartAmount(cartAmount - product.quantity * product.price);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartQuantity={cartQuantity} />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        { path: "products", element: <ProductListing /> },
        {
          path: "cart",
          element: (
            <Cart
              cart={cart}
              cartQuantity={cartQuantity}
              cartAmount={cartAmount}
              handleRemoveFromCart={handleRemoveFromCart}
            />
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
