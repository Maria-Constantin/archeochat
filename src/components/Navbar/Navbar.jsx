import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import style from './Navbar.module.scss';
import {auth} from '../../utils/firebaseConfig';

function NavbarComponent() {
  const [profilePicture, setProfilePicture] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;

    if(user){
      setIsLoggedIn(true);
      setProfilePicture(user.photoURL);
    }
  }, [auth]);

  return (
    <Navbar expand="lg" className={style.navbar} sticky='top'>
      <Container>
        <Navbar.Brand href="#home" className={style.name}>ArcheoChat</Navbar.Brand>
        <Navbar.Toggle bg="light" aria-controls="basic-navbar-nav" className={style.linkstoggler}>
        <img src={profilePicture} alt="Profile" className={style.listIcon} />
        </Navbar.Toggle>

        <Navbar.Offcanvas id="basic-navbar-nav" className={style.menu} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link href="/Forum" className={style.navLink}>Home</Nav.Link>
              <Nav.Link href="/Profile" className={style.navLink}>Profile</Nav.Link>
              <Nav.Link href="/Games" className={style.navLink}>Games</Nav.Link>
              <Nav.Link href="/Polls" className={style.navLink}>Polls</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
