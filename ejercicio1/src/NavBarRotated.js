

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBarRotated.css'; 

function ColorSchemesExample() {
  return (
  <>
    <Navbar bg="dark" data-bs-theme="dark" className="mirrored">
      
      <Nav className="me-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Nav>

      <Form inline>
        <Row>
        <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="searchBar"
            />
          </Col>
        <Col xs="auto">
          <Button type="submit" className="custom-srach-button">Search</Button>
        </Col>
        </Row>
      </Form>
    </Navbar>
  </>
  );
}

export default ColorSchemesExample;
  