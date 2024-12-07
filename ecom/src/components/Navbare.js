import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbare() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "black", // Background color
        color: 'white', // Text color
      }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Use Link to navigate to Login */}
            <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
              Se connecter
            </Nav.Link>
            <Nav.Link as={Link} to="Aide" style={{ color: 'white' }}>
              Aide
            </Nav.Link>
            <Nav.Link as={Link} to="" style={{ color: 'white' }}>
              Panier
            </Nav.Link>
            <Nav.Link as={Link} to="contact" style={{ color: 'white' }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                backgroundColor: '#e9ecef', // Search bar background
                color: '#333', // Search bar text color
              }}
            />
            <Button
              style={{
                color: 'white',
                borderColor: 'white',
                backgroundColor: 'gray',
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbare;
