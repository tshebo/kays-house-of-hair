// ProjectCard.js
import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function ProjectCard({ icon, title, description }) {
  return (
    <Card className="text-center p-3 my-3">
      <div className="project-card-icon">
        <span className="ico-circle">
          <i className={`bi ${icon}`}></i>
        </span>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
