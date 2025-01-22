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
            <video className={styles.video} ref={bearificRef} autoPlay muted playsInline>
              <source src={BearificAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Bearific</Card.Title>
              <Card.Text>
                Discover the history of bears in the UK and their possible return. Test your knowledge about these majestic creatures!
              </Card.Text>
              <div className={styles.buttonsCardContainer}>
                <Button variant="primary">Start Game</Button>
                <Button variant="outline-primary">Join Game</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Romans Quiz Card */}
          <Card className={styles.cardContainer} onMouseEnter={() => handleMouseEnter(romansRef)}>
            <video className={styles.video} ref={romansRef} autoPlay muted playsInline>
              <source src={RomansAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Veni, Vidi, Vici</Card.Title>
              <Card.Text>
                Explore the achievements of the Roman Empire, from architectural wonders to military tactics. Test your Roman knowledge!
              </Card.Text>
              <div className={styles.buttonsCardContainer}>
                <Button variant="primary">Start Game</Button>
                <Button variant="outline-primary">Join Game</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Prehistoric Quiz Card */}
          <Card className={styles.cardContainer} onMouseEnter={() => handleMouseEnter(prehistoricRef)}>
            <video className={styles.video} ref={prehistoricRef} autoPlay muted playsInline>
              <source src={PrehisAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body className={styles.cardBody}>
              <Card.Title>Prehistoric Tools</Card.Title>
              <Card.Text>
                Learn about ancient tools and materials used by early humans. Test your knowledge of prehistoric craftsmanship!
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
