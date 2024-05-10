import "../styles/CartItem.css";

export default function CartItem({ cartItem, RemoveFromCart }) {
  const { image, title, price, quantity } = cartItem;

  return (
    <div className="cart-item-tile">
      <div className="cart-item-image-box">
        <img src={image} alt="Cart Item Image" className="cart-item-image" />
      </div>
      <div className="cart-item-details">
        <h3 className="truncate">{title}</h3>
        <button onClick={() => RemoveFromCart(cartItem)}>Remove</button>
      </div>
      <div>
        <p className="truncate">Price: ${price}</p>
        <p className="truncate">Quantity: {quantity}</p>
        <p className="truncate">Total: ${price * quantity}</p>
      </div>
    </div>
  );
}
