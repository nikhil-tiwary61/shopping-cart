import "../../styles/Cart.css";
import CartItem from "./CartItem";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cart({ cart = [], cartDetails, RemoveFromCart }) {
  const { cartQuantity, cartAmount } = cartDetails;

  const navigate = useNavigate();

  function goToShop() {
    navigate("/products");
  }
  return (
    <>
    <section className="cart-body">
      <ToastContainer position="top-right" limit={3} autoClose={1000} />
      {cartQuantity ? (
        // <div className="cart-details">
        //   <div className="cart-items">
        //     <div>
        //       <span>CART</span>
        //       <span>ITEMS: {cartQuantity}</span>
        //     </div>

        //     {cart.map((cartItem, index) => {
        //       return (
        //         <CartItem
        //           cartItem={cartItem}
        //           key={index}
        //           RemoveFromCart={RemoveFromCart}
        //         />
        //       );
        //     })}
        //   </div>
        //   <div className="bill">
        //     <h2>Order Summary</h2>
        //     <div className="price-list">
        //       <div className="row">
        //         <span>Items: {cartQuantity}</span>
        //         <span>${cartAmount}</span>
        //       </div>
        //       <div className="row">
        //         <span>SHIPPING</span>
        //         <span>${0}</span>
        //       </div>
        //     </div>
        //     <div>
        //       <div className="row">
        //         <span>TOTAL COST</span>
        //         <span>${cartAmount}</span>
        //       </div>
        //       <button>CHECKOUT</button>
        //       <button onClick={goToShop}>Continue Shopping &rarr;</button>
        //     </div>
        //   </div>
        // </div>
        <Container>
        <Row>
          <Col sm={8}>
              <Stack gap={3}>
                <div className="p-2 badge rounded-pill text-bg-success"><span>Total Items: {cartQuantity}</span></div>
                {cart.map((cartItem, index) => {
                return (
                  <CartItem
                    cartItem={cartItem}
                    key={index}
                    RemoveFromCart={RemoveFromCart}
                    className="p-2"
                  />
                );
              })}
              </Stack>
          </Col>
          <Col sm={4}>
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
            </Col>
        </Row>
      </Container>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <button onClick={goToShop}>Continue Shopping &rarr;</button>
        </div>
      )}
    </section>
    </>
  );
}
