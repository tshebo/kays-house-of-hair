// ProjectCard.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../assets/Card.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {
  RiArrowDropRightFill,
  RiArrowGoForwardLine,
  RiArrowRightCircleLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import ServicesModal from "./ServicesModal";

function Cards({ image, title, text }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Card className="align-items-center border-none " onClick={handleShow}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <div className="card-button align-items-center mb-4">
          <Link type="button" className="button-hover-effect">
            <RiArrowRightCircleLine className="icon" size={30} />
          </Link>
        </div>
      </Card>

      <ServicesModal
        show={show}
        handleClose={handleClose}
        image={image}
        title={title}
        text={text}
      />
    </div>
  );
}

export default Cards;
