import React from "react";
import { Card, Container } from "react-bootstrap";

function ProductCard({ image }) {
  return (
    <Container>
      <Card>
        <Card.Img variant="center" src={image} className="product-image" />
      </Card>
    </Container>
  );
}

export default ProductCard;
