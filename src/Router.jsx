import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useReducer } from "react";
import { toast } from "react-toastify";
import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const initialState = {
  cart: [],
  cartDetails: {
    cartQuantity: 0,
    cartAmount: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action.payload);
    default:
      return state;
  }
};

const addToCart = (state, { product, quantity }) => {
  if (quantity === 0) {
    toast.info("Please select a quantity");
    return state;
  }

  if (quantity > product.rating.count) {
    toast.info("Limited stock available");
    return state;
  }

  const productPresent = state.cart.find((item) => item.id === product.id);
  const updatedCart = productPresent
    ? state.cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    : [...state.cart, { ...product, quantity }];
  toast.success("Item added to cart");

  return {
    ...state,
    cart: updatedCart,
    cartDetails: {
      cartQuantity: state.cartDetails.cartQuantity + quantity,
      cartAmount: state.cartDetails.cartAmount + quantity * product.price,
    },
  };
};

const removeFromCart = (state, product) => {
  const updatedCart = state.cart.filter(
    (cartItem) => cartItem.id !== product.id
  );
  const quantityToRemove = product.quantity || 0;
  toast.success("Item removed from cart");

  return {
    ...state,
    cart: updatedCart,
    cartDetails: {
      cartQuantity: state.cartDetails.cartQuantity - quantityToRemove,
      cartAmount:
        state.cartDetails.cartAmount - quantityToRemove * product.price,
    },
  };
};

export default function Router() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const RemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartDetails={state.cartDetails} />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        { path: "products", element: <ProductListing /> },
        {
          path: "cart",
          element: (
            <Cart
              cart={state.cart}
              cartDetails={state.cartDetails}
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
