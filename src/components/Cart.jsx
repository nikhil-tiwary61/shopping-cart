import "../styles/Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, cartQuantity, amount }) {
  return (
    <div className="cart-body">
      <div>
        <h2>Cart Items: {cartQuantity} </h2>
        <h2>Total Amount: ${amount}</h2>
      </div>
      {cart.map((cartItem, index) => {
        return <CartItem cartItem={cartItem} key={index} />;
      })}
    </div>
  );
}
