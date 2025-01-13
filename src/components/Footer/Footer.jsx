import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <Row>
          <Col md={4} className={style.footerSection}>
            <h5 className={style.footerTitle}>About Us</h5>
            <p className={style.footerText}>
              ArcheoChat is a forum for archaeology enthusiasts and history buffs. Join us in exploring the wonders of ancient civilizations, discussing history, and sharing archaeological discoveries.
            </p>
          </Col>

        <div className={style.linksContainer}>
          {/* quick links */}
          <Col md={4} className={style.footerSection}>
            <h5 className={style.footerTitle}>Quick Links</h5>
            <ul className={style.footerLinks}>
              <li><a href="/Forum" className={style.footerLink}>Forum</a></li>
              <li><a href="/Profile" className={style.footerLink}>Profile</a></li>
              <li><a href="/Settings" className={style.footerLink}>Settings</a></li>
              <li><a href="/Contact" className={style.footerLink}>Contact</a></li>
            </ul>
          </Col>

          {/* follow us section */}
          <Col md={4} className={style.footerSection}>
            <h5 className={style.footerTitle}>Follow Us</h5>
            <div className={style.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                <FaGithub size={24} />
              </a>
            </div>
          </Col>

          </div>
        </Row>


        <Row>
          <Col className="text-center mt-3">
            <p className={style.footerText}>© 2025 ArcheoChat. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
