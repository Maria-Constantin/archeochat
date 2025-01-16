import React from "react";
import Thread from "../../components/Forum/Thread/Thread";
import NavbarComponent from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import styles from './ForumPage.module.scss';
import Footer from "../../components/Footer/Footer";

import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const ForumPage = () => {


  return (
    <>
    {/* navbar - mobile */}
      <NavbarComponent />
      <div className={styles.forumPage}>

        {/* left side bar */}
        <LeftSideBar />

        {/* main content */}
        <Container className={styles.forumContainer}>
          <div className={styles.threadList}>
            <Thread></Thread>
          </div>
        </Container>

        {/* right side bar */}
        <RightSideBar />

      </div>
      <Footer />
    </>

  );
};

export default ForumPage;
