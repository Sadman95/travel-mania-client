import {  Button } from "@mui/material";
import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const NavigationBar = () => {
  const { user, handleSignOut } = useAuth();
  const userLogOut = () => {
    handleSignOut();
  };


  return (
    <div>
      <Navbar
        className='fixed-top w-100 nav bg-secondary'
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="text-dark fw-bold fs-3"
            as={NavLink}
            to="/home"
          >
            Travel Mania
          </Navbar.Brand>
          <Navbar.Toggle
            className="text-dark"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-dark" as={HashLink} to="/home#about">
                About
              </Nav.Link>
              <Nav.Link className="text-dark" as={HashLink} to="/home#places">
                Places
              </Nav.Link>
              <Nav.Link
                className="text-dark"
                as={HashLink}
                to="/home#subscribe"
              >
                Subscribe
              </Nav.Link>
              <Nav.Link className="text-dark" as={HashLink} to="/home#guides">
                Our Guides
              </Nav.Link>
              {!user.email && <Nav.Link className="text-dark" as={Link} to="/register">
                Register
              </Nav.Link>}

              {
                  user.email && <>
                    <div>
                      <img style={{borderRadius: '50%', marginRight: '3px'}} width='50px' src={user.photoURL} alt={user.displayName} />
                      <span className='text-light'>{user.displayName}</span>
                    </div>

              <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle className='bg-secondary text-dark border-0' id="dropdown-autoclose-outside">
                  
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/allBookings">
                    My Bookings
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Button}
                    variant="contained"
                    color="error"
                    onClick={userLogOut}
                  >
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                  </>
              }

              <Link to="/admin">
                <Button variant="contained">Admin</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
