import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import style from './Navbar.module.scss';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className={style.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={style.name}>ArcheoChat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={style.linkstoggler} />
        <Navbar.Collapse id="basic-navbar-nav" className={style.menu}>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={style.navLink}>Home</Nav.Link>
            <Nav.Link href="#profile" className={style.navLink}>Profile</Nav.Link>
            <Nav.Link href="#games" className={style.navLink}>Games</Nav.Link>
            <Nav.Link href="#polls" className={style.navLink}>Polls</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
