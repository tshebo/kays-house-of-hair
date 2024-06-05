import React from "react";
import { Card } from "react-bootstrap";
import "../assets/CollectionPreview.css"; // Ensure to create this CSS file

function CollectionPreview({ image, name, onClick }) {
  return (
    <Card className="collection-preview-card" onClick={onClick}>
      <Card.Img variant="top" src={image} className="collection-preview-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CollectionPreview;
