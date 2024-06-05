import React from "react";
import { PropTypes } from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { RiCloseCircleFill, RiCloseLargeLine } from "@remixicon/react";

function ServicesModal({ show, handleClose, image, title, text }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image} alt={title} className="img-fluid mb-3" />
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          <RiCloseLargeLine />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ServicesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesModal;
