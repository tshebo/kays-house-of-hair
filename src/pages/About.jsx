import React from "react";
import "../assets/aboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import about from "../assets/img/KaysHouse.png";
import {
  RiWhatsappFill,
  RiFacebookFill,
  RiTiktokFill,
  RiInstagramFill,
} from "@remixicon/react";

function About() {
  return (
    <div className="about-section">
      <Container style={{ background: "white" }} className="p-3">
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
              <h4 className="d-flex justify-content-center mb-2">Follow <span style={{ color: "#ce4c7a" }}>Us</span></h4>
              <div className="social-links mb-3">
               
                <a
                  href="https://api.whatsapp.com/send?phone=%2B27767831191&context=ARApjTuFOG_BrE8E48GnE0pXAUe0Qgjll2sXMXsIlmMJajv9ujDE8vQZEswBKYzgNrEdzD5Eo5b0eqj9RWBW6hoR1YXcraAXtuAmquuGWizoiBmqkh4sGj-v2PUJJJP2yUPR6lkSxcyiDqRbkU_Jh2_j1Q&source=FB_Page&app=facebook&entry_point=page_cta"
                  target="_blank"
                  className="social-link"
                >
                  <RiWhatsappFill />
                </a>
                <a
                  href="https://www.facebook.com/p/Khensani-House-Of-Hair-100063489014753/"
                  target="_blank"
                  className="social-link"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.tiktok.com/discover/khensani-house-of-hair"
                  target="_blank"
                  className="social-link"
                >
                  <RiTiktokFill />
                </a>
                <a
                  href=" https://www.instagram.com/khensani_house_of_hair?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className="social-link"
                >
                  <RiInstagramFill />
                </a>
              </div>
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
