import React from "react";
import { Card } from "react-bootstrap";
import "../assets/CollectionPreview.css"; // Ensure to create this CSS file

function CollectionPreview({ image, name, onClick }) {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Card className="collection-preview-card" onClick={onClick}>
        <Card.Img
          variant="top"
          src={image}
          className="collection-preview-image"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>

      {/* <ServicesModal
    show={show}
    handleClose={handleClose}
    image={image}
    title={title}
    text={text}
    /> */}
    </div>
  );
}

export default CollectionPreview;
