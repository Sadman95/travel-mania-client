import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavigationBar = () => {
    return (
        <div>
            <Navbar className='fixed-top w-100' collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand className='text-dark fw-bold fs-3' as={NavLink} to="/home">Travel Mania</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className='text-dark' to="/home">Home</Nav.Link>
      <Nav.Link className='text-dark' as={HashLink} to="/home#about">About</Nav.Link>
      <Nav.Link className='text-dark' as={HashLink} to="/home#places">Places</Nav.Link>
      <Nav.Link className='text-dark' as={HashLink} to="/home#plans">Plans</Nav.Link>
      <Nav.Link className='text-dark' as={HashLink} to="/home#guides">Our Guides</Nav.Link>
      <Nav.Link className='text-dark' to="/register">Register</Nav.Link>
      <Nav.Link className='text-dark' eventKey={2} to="/memes">
        User
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavigationBar;