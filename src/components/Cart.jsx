export default function Cart({ cart }) {
  return (
    <div>
      {cart.map((cartItem, index) => {
        return (
          <div key={index}>
            <p>{cartItem.title}</p>
          </div>
        );
      })}
    </div>
  );
}
