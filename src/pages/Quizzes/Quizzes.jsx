import React, { useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import NavbarComponent from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './Quizzes.module.scss';

import BearificAnimation from '../../assets/animations/BearificAnim.mp4';
import PrehisAnimation from '../../assets/animations/PrehisAnim.mp4';
import RomansAnimation from '../../assets/animations/RomansAnim.mp4';

const Quizzes = () => {
  const bearificRef = useRef(null);
  const romansRef = useRef(null);
  const prehistoricRef = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if(videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }

  return (
    <>
      {/* Mobile View Top Navbar */}
      <NavbarComponent />

      <div className={styles.quizContainer}>
        <LeftSideBar />

        {/* Center Content */}
        <div className={styles.cardsContainer}>
          
          {/* Bearific Quiz Card */}
          <Card className={styles.cardContainer} onMouseEnter={() => handleMouseEnter(bearificRef)}>
            <Card.Header>Limited</Card.Header>
            <video className={styles.video} ref={bearificRef} autoPlay muted>
              <source src={BearificAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Bearific</Card.Title>
              <Card.Text>
                Explore the fascinating history of bears in the UK! This quiz takes you through their ancient habitats, the reasons behind their extinction, and the ongoing discussions about their potential return. Test your knowledge and uncover the story of these majestic creatures that once roamed the British wilderness!
              </Card.Text>
              <div className={styles.buttonsCardContainer}>
                <Button variant="primary">Start Game</Button>
                <Button variant="outline-primary">Join Game</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Romans Quiz Card */}
          <Card className={styles.cardContainer} onMouseEnter={() => handleMouseEnter(romansRef)}>
            <video className={styles.video} ref={romansRef} autoPlay muted>
              <source src={RomansAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Veni, Vidi, Vici</Card.Title>
              <Card.Text>
                Step back in time to Ancient Rome! This quiz hunts through the incredible achievements of the Roman Empire, from architectural wonders like the Colosseum and Pantheon to the innovations of Roman engineering, such as aqueducts and roads. Test your knowledge of Roman life, including their grand public structures, iconic emperors, and military tactics.
              </Card.Text>
              <div className={styles.buttonsCardContainer}>
                <Button variant="primary">Start Game</Button>
                <Button variant="outline-primary">Join Game</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Prehistoric Quiz Card */}
          <Card className={styles.cardContainer} onMouseEnter={() => handleMouseEnter(prehistoricRef)}>
            <video className={styles.video} ref={prehistoricRef} autoPlay muted>
              <source src={PrehisAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Prehistoric Tools</Card.Title>
              <Card.Text>
                Dive into the world of prehistoric tools! This quiz explores the fascinating materials and techniques used by ancient humans to craft essential tools for survival. From flint to bone needles, test your knowledge of the tools that shaped early human cultures. Uncover the evolution of craftsmanship through the Paleolithic, Mesolithic, and Neolithic periods!
              </Card.Text>
              <div className={styles.buttonsCardContainer}>
                <Button variant="primary">Start Game</Button>
                <Button variant="outline-primary">Join Game</Button>
              </div>
            </Card.Body>
          </Card>

        </div>

        <RightSideBar />
      </div>
      <Footer/>
    </>
  );
}

export default Quizzes;
