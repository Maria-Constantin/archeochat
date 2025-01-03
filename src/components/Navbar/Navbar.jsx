import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import style from './Navbar.module.scss';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="name">ArcheoChat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="linkstoggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#profile" className="nav-link">Profile</Nav.Link>
            <Nav.Link href="#games" className="nav-link">Games</Nav.Link>
            <Nav.Link href="#polls" className="nav-link">Polls</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
