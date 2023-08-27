export default function CartItem({ cartItem, key }) {
  return (
    <div key={key}>
      <img src={cartItem.image} alt="Cart Item Image" />
      <p>{cartItem.title}</p>
      <p>{cartItem.price}</p>
    </div>
  );
}
