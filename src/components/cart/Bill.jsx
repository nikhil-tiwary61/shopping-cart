import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Bill({ cartQuantity = 0, cartAmount = 0 }) {
    const navigate = useNavigate();

    function goToShop() {
        navigate("/products");
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Total Items: {cartQuantity}</ListGroup.Item>
                    <ListGroup.Item className="text-truncate">Product Cost: ${Number(cartAmount).toFixed(2)}</ListGroup.Item>
                    <ListGroup.Item>Shipping Cost: $0</ListGroup.Item>
                    <ListGroup.Item className="h6">TOTAL: ${Number(cartAmount).toFixed(2)}</ListGroup.Item>
                </ListGroup>
                <Button variant="success" onClick={() => alert("Feature not available yet")} className='m-1'>Checkout</Button>
                <Button variant="success" onClick={goToShop} className='m-1'>Continue Shopping &rarr;</Button>
            </Card.Body>
        </Card>
    );
}