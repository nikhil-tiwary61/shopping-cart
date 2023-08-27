import CartItem from "./CartItem";

export default function Cart({ cart }) {
  return (
    <div>
      {cart.map((cartItem, index) => {
        return <CartItem cartItem={cartItem} key={index} />;
      })}
    </div>
  );
}
