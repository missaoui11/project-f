import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'; // Optional: Create this CSS file for custom styles.
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce company providing top-quality products
              and services. Follow us for the latest updates!
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaWhatsapp size={24} />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@example.com" className="text-light text-decoration-none">info@example.com</a>
            </p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
