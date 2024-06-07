import React from "react";
import { Card, Container } from "react-bootstrap";

function ProductCard({ image, name, price, length }) {
  return (
    <Container className="my-4">
    <Card>
      <Card.Img 
        variant="top" 
        src={image} 
        className="product-image" 
        style={{ objectFit: 'cover', height: 'auto', maxHeight: '100%' }} // Adjusted style
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> R{price}
        </Card.Text>
        <Card.Text>
          <strong>Length:</strong> {length}
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default ProductCard;
