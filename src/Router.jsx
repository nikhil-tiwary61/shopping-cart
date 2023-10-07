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
  const [cartDetails, setCartDetails] = useState({
    cartQuantity: 0,
    cartAmount: 0,
  });

  function AddToCart(product, quantity) {
    if (quantity == 0) toast.info("Quantity not selected");
    else if (quantity > product.rating.count)
      toast.info("Limited stock available");
    else {
      let productPresent = [];
      productPresent = cart.find((item) => item.id == product.id);
      if (productPresent == null) {
        setCart([...cart, { ...product, quantity: quantity }]);
      } else {
        let productsLeft = cart.filter((item) => item.id !== product.id);
        productPresent.quantity += quantity;
        setCart([...productsLeft, productPresent]);
      }
      setCartDetails({
        cartQuantity: cartDetails.cartQuantity + quantity,
        cartAmount: cartDetails.cartAmount + quantity * product.price,
      });
      toast.success("Item added to cart");
    }
  }

  function RemoveFromCart(product) {
    let productsLeft = cart.filter((cartItem) => cartItem.id != product.id);
    setCart([...productsLeft]);
    setCartDetails({
      cartQuantity: cartDetails.cartQuantity - product.quantity,
      cartAmount: cartDetails.cartAmount - product.quantity * product.price,
    });
    toast.success("Item removed to cart");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartDetails={cartDetails} />,
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
              cartDetails={cartDetails}
              RemoveFromCart={RemoveFromCart}
            />
          ),
        },
        {
          path: "/products/productpage/:id",
          element: <ProductPage AddToCart={AddToCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
