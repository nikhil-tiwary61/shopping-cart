import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
  const { id, image, title, price } = product;
  return (
    <li>
    <Link
        to={"productpage/" + id}
        state={{ fromProductListing: { product } }}
      >
      <Card style={{ width: '18rem', height: '23rem' }} className="p-4">
        <div className="h-75">
          <Card.Img variant="top" src={image} alt="Product Image" className="card-image" />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text className="badge rounded-pill text-bg-success">${price}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </li>
  );
}
