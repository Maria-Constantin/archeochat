import React from "react";
import { Container, Form, Button, Carousel } from "react-bootstrap";
import styles from './Register.module.scss';

import templeImage from '../../../assets/frontPage/temple.jpg';
import coinsImage from '../../../assets/frontPage/coins.jpg';
import mosaicsImage from '../../../assets/frontPage/mosaic.jpg';
import vasesImage from '../../../assets/frontPage/vases.jpg';

const Register = () => {
  return (
    <>
      <div className={styles.registerContainer}>
        {/* slideshow */}
        <div className={styles.carrouselSection}>
          <Carousel>
            <Carousel.Item>
              <img src={templeImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={coinsImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mosaicsImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={vasesImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={templeImage} />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* login form */}
        <div className={styles.formSection}>
          <h1 className={styles.header}>Register</h1>
          <Form>
          <Form.Group className={styles.formGroup} controlId="formusername">
              <Form.Label className={styles.formLabel}>Username</Form.Label>
              <Form.Control className={styles.formControl} type="text" placeholder="Enter your username" />
            </Form.Group >
            <Form.Group className={styles.formGroup} controlId="formemail">
              <Form.Label className={styles.formLabel}>Email address</Form.Label>
              <Form.Control className={styles.formControl} type="email" placeholder="Enter your email" />
            </Form.Group >
            <Form.Group className={styles.formGroup} controlId="formpassword">
              <Form.Label className={styles.formLabel}>Password</Form.Label>
              <Form.Control className={styles.formControl} type="password" placeholder="Enter your password" />
            </Form.Group>
            <div className={styles.buttonContainer}>
              <Button className={styles.registerButton} type="submit">Register</Button>
              <p>or</p>
              <Button className={styles.guestButton}>Continue as guest</Button>
            </div>
          </Form>
          <p>Already have an account?<a className={styles.loginLink}>Click here</a></p>
        </div>
      </div>
    </>
  )
}

export default Register;