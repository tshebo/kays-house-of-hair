import React from "react";
import "../assets/aboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import about from "../assets/img/KaysHouse.png";
function About() {
  return (
    <div className="about-section">
      
        <Container style={{ backgroud: "white" }} className="p-3">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="about-content">
                <h2 className="text-center mb-3">
                  About
                  <span style={{ color: "#ce4c7a" }}>Us</span>
                </h2>
                <p className="p-2">
                  Khensani's House of Hair is a premium hair salon located in
                  Hammanskraal. We specialize in creating beautiful frontals and
                  providing high-quality hair products to our customers. Our
                  mission is to enhance your natural beauty and boost your
                  confidence with our exceptional services and products.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-image">
                <img src={about} alt="About Us" />
              </div>
            </Col>
          </Row>
        </Container>
    
    </div>
  );
}

export default About;
