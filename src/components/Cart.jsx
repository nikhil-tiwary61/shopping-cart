import "../styles/Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart }) {
  return (
    <div className="cart-body">
      {cart.map((cartItem, index) => {
        return <CartItem cartItem={cartItem} key={index} />;
      })}
    </div>
  );
}
