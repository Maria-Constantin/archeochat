import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import style from './Navbar.module.scss';
import brandImage from '../../assets/ArcheoChat-transparent-logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router';

function NavbarComponent() {
  const profilePicture = "https://fastly.picsum.photos/id/966/200/200.jpg?hmac=RmCTCEjm_X8xE8OAxo2-eCKM4eJu4LGQu-8U6Y3OmEM";

  const location = useLocation();
  const [ activeLink, setActiveLink ] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar sticky="top" className={style.navbarContainer}>
        <Navbar.Brand href="#home" className={style.name}>
          <img src={brandImage} alt="Brand Logo" className={style.brandImage} />
        </Navbar.Brand>

        <Nav className={style.menu}>

          {/* Links */}
          <Nav.Link
            href="/" 
            className={style.navLink}
            active={activeLink === '/'}
          >
            <i className="bi bi-house"></i>
          </Nav.Link>

          <Nav.Link 
            href="/Saved" 
            className={style.navLink}
            active={activeLink === '/Saved'}
          >
            <i className="bi bi-bookmark"></i>
          </Nav.Link>

          <Nav.Link 
            href="/Games" 
            className={style.navLink}
            active={activeLink === '/Games'}
          >
            <i className="bi bi-controller"></i>
          </Nav.Link>

          <Nav.Link 
            href="/Polls" 
            className={style.navLink}
            active={activeLink === '/Polls'}
          >
            <i className="bi bi-bar-chart"></i>
          </Nav.Link>

          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className={style.navLink} id="profile-dropdown">
              <img src={profilePicture} alt="Profile" className={style.profilePicture} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
              <Dropdown.Item href="/Logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
