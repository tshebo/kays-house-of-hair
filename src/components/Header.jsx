import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import "../assets/main.css";

function Header() {
  const [activeLink, setActiveLink] = useState(""); // State to manage active link

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className="title" style={{ color: "#ce4c7a" }}>
          Khensani's House of Hair
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="home"
              spy={true}
              smooth={true}
              duration={200}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => setActiveLink("home")}
              onSetActive={handleSetActive}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              duration={200}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => setActiveLink("about")}
              onSetActive={handleSetActive}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="services"
              spy={true}
              smooth={true}
              duration={200}
              className={`nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
              onClick={() => setActiveLink("services")}
              onSetActive={handleSetActive}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="products"
              spy={true}
              smooth={true}
              duration={200}
              className={`nav-link ${
                activeLink === "products" ? "active" : ""
              }`}
              onClick={() => setActiveLink("products")}
              onSetActive={handleSetActive}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => setActiveLink("contact")}
              onSetActive={handleSetActive}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            variant="primary"
            style={{ background: "#ce4c7a", border: "none", fontSize: "14px" }}
          >
            Book An Appointment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
