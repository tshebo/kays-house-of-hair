import React from "react";
import Card from "../components/Card";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/img/KaysHouse.png";
import "../assets/CardDeck.css";

function Services() {
  return (
    <div>
      <div className="card-container align-items-center">
        <h1>Services</h1>
      </div>
      <Container>
        <Row className="card-deck">
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 1"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. "
              footer="K"
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 2"
              text="This card has supporting text below as a natural lead-in to additional content."
              footer="Last updated 3 mins ago"
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 3"
              text="This is a wider card with supporting tent than the first to show that equal height action."
              footer="Last updated 3 mins ago"
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 4"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content th"
              footer="Last updated 3 mins ago"
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 5"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content"
              footer="Last updated 3 mins ago"
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              image={img}
              title="Card title 6"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              footer="K"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
