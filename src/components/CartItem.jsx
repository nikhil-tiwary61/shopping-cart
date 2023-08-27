import "../styles/CartItem.css";

export default function CartItem({ cartItem, key }) {
  return (
    <div key={key} className="cart-item-tile">
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
      </div>
    </div>
  );
}
