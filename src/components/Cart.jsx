import "../styles/Cart.css";
import CartItem from "./CartItem";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({ cart, cartDetails, handleRemoveFromCart }) {
  const navigate = useNavigate();

  function goToShop() {
    navigate("/products");
  }
  return (
    <section className="cart-body">
      <ToastContainer position="top-right" limit={3} autoClose={1000} />
      {cartDetails.cartQuantity ? (
        <div className="cart-details">
          <div className="cart-items">
            <div>
              <span>CART</span>
              <span>ITEMS: {cartDetails.cartQuantity}</span>
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
          <div className="bill">
            <h2>Order Summary</h2>
            <div className="price-list">
              <div className="row">
                <span>Items: {cartDetails.cartQuantity}</span>
                <span>${cartDetails.cartAmount}</span>
              </div>
              <div className="row">
                <span>SHIPPING</span>
                <span>${0}</span>
              </div>
            </div>
            <div>
              <div className="row">
                <span>TOTAL COST</span>
                <span>${cartDetails.cartAmount}</span>
              </div>
              <button>CHECKOUT</button>
              <button onClick={goToShop}>Continue Shopping &rarr;</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <button onClick={goToShop}>Continue Shopping &rarr;</button>
        </div>
      )}
    </section>
  );
}
