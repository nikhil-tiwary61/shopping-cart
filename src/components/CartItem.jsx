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
        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
      </div>
      <div>
        <p className="truncate">Price: ${cartItem.price}</p>
        <p className="truncate">Quantity: {cartItem.quantity}</p>
        <p className="truncate">Total: ${cartItem.price * cartItem.quantity}</p>
      </div>
    </div>
  );
}
