import "../styles/CartItem.css";

export default function CartItem({ cartItem }) {
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
        <p>{cartItem.title}</p>
        <p>${cartItem.price}</p>
        <p>Quantity: {cartItem.quantity}</p>
      </div>
    </div>
  );
}
