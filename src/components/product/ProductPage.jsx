import "../../styles/ProductPage.css";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductPage({ AddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromProductListing } = location.state;
  let product = fromProductListing.product;

  const [quantity, setQuantity] = useState(0);
  function handleDecrement() {
    if (quantity == 0) return;
    setQuantity(quantity - 1);
  }
  function handleIncrement() {
    if (quantity == product.rating.count) return;
    setQuantity(quantity + 1);
  }
  function goToShop() {
    navigate("/products");
  }

  return (
    <div className="product-page">
      <ToastContainer position="top-right" limit={3} autoClose={1000} />
      <div className="product-page-body">
        <div className="product-page-details">
          <div className="product-page-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <Card className="text-center">
            <Card.Header className="badge rounded-pill text-bg-success">{ product.category }</Card.Header>
            <Card.Body>
              <Card.Title>{ product.title }</Card.Title>
              <Card.Text className="badge rounded-pill text-bg-success">${ product.price }</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faStar} /> { product.rating.rate }</Card.Text>
              <ButtonGroup aria-label="Basic example" className="w-100">
                <Button variant="success" onClick={() => handleIncrement(+quantity)}>+</Button>
                <input type="number" min={0} value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-50 text-center" />
                <Button variant="success" onClick={() => handleDecrement(+quantity)}>-</Button>
              </ButtonGroup>
              <Button variant="success w-100 mt-1" onClick={() => AddToCart(product, +quantity)}>Add to cart</Button>
            </Card.Body>
            <Card.Footer className="text-muted ">
              <Button variant="secondary w-100" onClick={goToShop}>Continue Shopping &rarr;</Button>
            </Card.Footer>
          </Card>
        </div>
        <hr />
        <div className="product-page-description text-align-left">
          <h4>Description:</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
