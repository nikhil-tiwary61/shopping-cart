import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

export default function Router() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  function handleClick(product, quantity) {
    if (quantity == 0) toast.info("Quantity not selected");
    else if (quantity > product.rating.count)
      toast.info("Limited stock available");
    else {
      setCart([...cart, { ...product, quantity: quantity }]);
      setCartAmount(cartAmount + quantity * product.price);
      setCartQuantity(cartQuantity + quantity);
      toast.success("Item added to cart");
    }
  }

  function handleRemoveFromCart(product) {
    let productsLeft = cart.filter((cartItem) => cartItem.id != product.id);
    setCart([...productsLeft]);
    setCartQuantity(cartQuantity - product.quantity);
    setCartAmount(cartAmount - product.quantity * product.price);
    toast.success("Item removed to cart");
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
