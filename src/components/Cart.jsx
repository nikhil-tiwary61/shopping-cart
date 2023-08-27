import "../styles/Cart.css";
import CartItem from "./CartItem";

export default function Cart({
  cart,
  cartQuantity,
  cartAmount,
  handleRemoveFromCart,
}) {
  return (
    <div className="cart-body">
      <div>
        <h2>Cart Items: {cartQuantity} </h2>
        <h2>Total Amount: ${cartAmount}</h2>
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
