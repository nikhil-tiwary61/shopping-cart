import CartItem from "./CartItem";
import Bill from "./Bill"
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Cart({ cart = [], cartDetails, RemoveFromCart }) {
  const { cartQuantity, cartAmount } = cartDetails;

  const navigate = useNavigate();

  function goToShop() {
    navigate("/products");
  }
  return (
    <section className="cart-body">
      <ToastContainer position="top-right" limit={3} autoClose={1000} />
      {cartQuantity ? (
        <Container>
          <Row>
            <Col sm={8}>
              <Stack gap={3}>
                <div className="p-2 badge rounded-pill text-bg-success"><span>Total Items: {cartQuantity}</span></div>
                {cart.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} RemoveFromCart={RemoveFromCart} className="p-2" />)}
              </Stack>
            </Col>
            <Col sm={4}><Bill cartQuantity={cartQuantity} cartAmount={cartAmount} /></Col>
          </Row>
        </Container>
      ) : (
        <div>
          <h2>Your cart is empty!</h2>
          <Button variant="success" onClick={goToShop} className='m-1'>Continue Shopping &rarr;</Button>
        </div>
      )}
    </section>
  );
}
