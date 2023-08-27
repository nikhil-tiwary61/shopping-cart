import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { useState } from "react";

export default function Router() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  function handleClick(product, quantity) {
    if (quantity == 0) return;
    setCart([...cart, { ...product, quantity: quantity }]);
    setCartAmount(cartAmount + quantity * parseFloat(product.price));
    setCartQuantity(cartQuantity + quantity);
  }

  function handleRemoveFromCart(product) {
    let productsLeft = cart.filter((cartItem) => cartItem.id != product.id);
    setCart([...productsLeft]);
    setCartQuantity(cartQuantity - product.quantity);
    setCartAmount(cartAmount - product.quantity * parseFloat(product.price));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartQuantity={cartQuantity} />,
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
