import React from 'react';
import styles from './LeftSideBar.module.scss';
import { NavLink } from 'react-router';
import { Button } from 'react-bootstrap';
import logo from "../../assets/ArcheoChat-transparent-logo.png";

const LeftSideBar = () => {
  const profilePicture = "https://fastly.picsum.photos/id/966/200/200.jpg?hmac=RmCTCEjm_X8xE8OAxo2-eCKM4eJu4LGQu-8U6Y3OmEM";

  return(
    <>
    {/* left side section */}
    <div className={styles.leftSidebar}>
          {/* header */}
          <div className={styles.forumHeader}><img className={styles.logo} src={logo} /> <p className={styles.forumTitle}>ArcheoChat</p></div>

          {/* links */}
          <div className={styles.linksContainer}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              <i className="bi bi-house"></i>
              Home
            </NavLink>

            <NavLink
              to="/Trending"
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              <i className="bi bi-graph-up"></i>
              Trending
            </NavLink>

            <NavLink
              to="/Saved"
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              <i className="bi bi-bookmark"></i>
              Bookmarks
            </NavLink>

            <NavLink
              to="/Games"
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              <i className="bi bi-controller"></i>
              Games
            </NavLink>

            <NavLink
              to="/Polls"
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              <i className="bi bi-bar-chart"></i>
              Polls
            </NavLink>
          </div>
          {/* post */}
          <div className={styles.postButtonContainer}>
            <Button className={styles.postButton}>
              Post
            </Button>
          </div>

          {/* profile */}
          <NavLink className={styles.profileContainer}>
            <img src={profilePicture} className={styles.profilePic} />rafraywhitelake
            <Button className={styles.optionsButtonProfile}>
              <i className="bi bi-three-dots"></i>
            </Button>
          </NavLink>

        </div>
    </>
  )
}

export default LeftSideBar;