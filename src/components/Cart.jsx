import "../styles/Cart.css";
import CartItem from "./CartItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({
  cart,
  cartQuantity,
  cartAmount,
  handleRemoveFromCart,
}) {
  return (
    <div className="cart-body">
      <ToastContainer position="top-right" />
      <div>
        <h2>Items: {cartQuantity} </h2>
        <h2>Total: ${cartAmount}</h2>
      </div>
      {cart.map((cartItem, index) => {
        return (
          <CartItem
            cartItem={cartItem}
            key={index}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        );
      })}
    </div>
  );
}
