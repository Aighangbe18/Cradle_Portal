import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/CHS-Logo.png";
import "../App.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section mt-5 py-4 px-3 text-white">
      <Container>
        <Row className="justify-content-between">
          {/* Logo and Description */}
          <Col md={5} className="mb-4">
            <img src={logo} alt="School Logo" height="100" />
            <p className="mt-3">
              The Cradle Schools has emerged to be the most sought-after
              educational institution, raising scholars to be champions in the
              21st century; thus, employing quality educational systems,
              strategies, and methodologies that will support and influence
              their lives beyond the four walls of the school.
            </p>
          </Col>

          {/* Address and Contact Info */}
          <Col md={4} className="mb-4">
            <div>
              <h5>Contact Information</h5>
            </div>
            <h6>Address:</h6>
            <p>
              Plot 37871, Godwin Abbey Way (The Limit Road),
              <br />
              Off Ugbor Village Road, Benin-City, Edo State
            </p>
            <h6>Phone:</h6>
            <p>
              High School - +234 806-748-1587
              <br />
              Montessori - +234 818-420-2517
            </p>
            <h6>Email:</h6>
            <p>enquiry@thecradleschool.ng</p>
          </Col>

          {/* Social Media Icons */}
          <Col
            md={1}
            className="d-flex flex-column align-items-center social-div"
          >
            <i className="bi bi-facebook mb-3 fs-4"></i>
            <i className="bi bi-instagram mb-3 fs-4"></i>
            <i className="bi bi-twitter mb-3 fs-4"></i>
            <i className="bi bi-linkedin fs-4"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
