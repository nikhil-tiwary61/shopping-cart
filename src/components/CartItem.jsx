import "../styles/CartItem.css";

export default function CartItem({ cartItem, handleRemoveFromCart }) {
  return (
    <div className="cart-item-tile">
      <div className="cart-item-image-box">
        <img
          src={cartItem.image}
          alt="Cart Item Image"
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-details">
        <h3 className="truncate">{cartItem.title}</h3>
        <p className="truncate">${cartItem.price * cartItem.quantity}</p>
        <p className="truncate">Quantity: {cartItem.quantity}</p>
      </div>
      <button onClick={() => handleRemoveFromCart(cartItem)}>
        Remove from cart
      </button>
    </div>
  );
}
