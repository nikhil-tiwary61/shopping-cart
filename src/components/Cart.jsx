import "../styles/Cart.css";
import CartItem from "./CartItem";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({
  cart,
  cartQuantity,
  cartAmount,
  handleRemoveFromCart,
}) {
  const navigate = useNavigate();

  function goToShop() {
    navigate("/products");
  }
  return (
    <section className="cart-body">
      <ToastContainer position="top-right" limit={3} autoClose={1000} />
      <div className="cart-details">
        {cartQuantity ? (
          <div className="cart-items">
            <div>
              <span>CART</span>
              <span>ITEMS: {cartQuantity}</span>
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
        ) : (
          <></>
        )}

        <div className="bill">
          <h2>Order Summary</h2>
          <div className="price-list">
            <div className="row">
              <span>Items: {cartQuantity}</span>
              <span>${cartAmount}</span>
            </div>
            <div className="row">
              <span>SHIPPING</span>
              <span>${0}</span>
            </div>
          </div>
          <div>
            <div className="row">
              <span>TOTAL COST</span>
              <span>${cartAmount}</span>
            </div>
            <button>CHECKOUT</button>
            <button onClick={goToShop}>Continue Shopping &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
