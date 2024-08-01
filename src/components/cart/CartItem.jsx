import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CartItem({ cartItem, RemoveFromCart }) {
  const { image, title, price, quantity } = cartItem;

  return (
    <>
      <Card>
        <Card.Header className="text-truncate">{title}</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="h-75">
                  <Card.Img variant="top" src={image} alt="Product Image" className="card-image" />
                </div>
              </Col>
              <Col sm={8}>
                <Card.Title className="text-truncate">Total: ${price * quantity}</Card.Title>
                <Card.Text className="text-truncate">Price: ${price}</Card.Text>
                <Card.Text className="text-truncate">Quantity: {quantity}</Card.Text>
                <Button variant="danger" onClick={() => RemoveFromCart(cartItem)}>Remove</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
