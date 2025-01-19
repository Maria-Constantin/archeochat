import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

import pollsdata from '../../utils/Polls.json';
import trendingdata from '../../utils/TrendingTitles.json';
import styles from './RightSideBar.module.scss';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const RightSideBar = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [pollData, setPollData] = useState(pollsdata.polls);
  const [showGraph, setShowGraph] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const handlePollChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  // map colours
  const [chartColors, setChartColors] = useState({
    primaryButton: '#9E6F4B',
    secondaryButton: '#B99F87',
    info: '#506B8E',
    hoverButton: '#7A4C2F',
    primaryBorder: '#474747',
    white: '#FFFFFF'
  });

  // chart colours
  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    setChartColors({
      primaryButton: rootStyle.getPropertyValue('--primary-button').trim(),
      secondaryButton: rootStyle.getPropertyValue('--secondary-button').trim(),
      hoverButton: rootStyle.getPropertyValue('--hover-button').trim(),
      primaryBorder: rootStyle.getPropertyValue('--primary-border').trim(),
      info: rootStyle.getPropertyValue('--info').trim(),
      white: rootStyle.getPropertyValue('--white').trim(),
    });
  }, []);

  // responsive legend font
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setFontSize(12); 
      } else if (window.innerWidth < 768) {
        setFontSize(14); 
      } else {
        setFontSize(16); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePollSubmit = () => {
    const updatedPollData = { ...pollData };
    const selectedOption = updatedPollData.options.find(option => option.id === parseInt(selectedAnswer));
    selectedOption.votes = (selectedOption.votes || 0) + 1;

    setPollData(updatedPollData);
    setShowGraph(true);
  };

  const chartData = {
    labels: pollData.options.map(option => option.text),
    datasets: [
      {
        label: 'Votes',
        data: pollData.options.map(option => option.votes || 0),
        backgroundColor: [chartColors.primaryButton, chartColors.secondaryButton, chartColors.hoverButton, chartColors.info],
        borderColor: chartColors.primaryBorder,
        borderWidth: 1,
        hoverBackgroundColor: chartColors.white,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspecRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          textAlign: 'left',
          font: {
            size: fontSize,
            color: '#D1D1D1',
          },
          boxWidth: 20,
          padding: 10,
        },
      },
    },
  };
  

  return (
    <div className={styles.rightSidebar}>

      {/* Search Bar */}
      <Form className={styles.formContainer}>
        <Form.Group className={styles.formGroup} controlId="searchInput">
          <Form.Control
            className={styles.searchInput}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </Form.Group>
      </Form>

      {/* Trending Topics Section */}
      {trendingdata?.trendingTitles && trendingdata.trendingTitles.length > 0 && (
        <Container className={styles.trendingContainer}>
          <h5 className={styles.sectionTitle}>Trending</h5>
          <ListGroup>
            {trendingdata.trendingTitles.map((title, index) => (
              <ListGroup.Item key={index} className={styles.trendingItem}>
                {title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )}

      {/* Polls Section */}
      {!showGraph && pollData?.question && (
        <Container className={styles.pollsContainer}>
          <h5 className={styles.pollsTitle}>{pollData.question}</h5>
          <Form className={styles.formContainer}>
            {pollData.options.map((option) => (
              <Form.Check
                type="radio"
                id={`poll-option-${option.id}`}
                label={option.text}
                name="poll"
                value={option.id}
                onChange={handlePollChange}
                checked={selectedAnswer === option.id.toString()}
                key={option.id}
                className={styles.pollOption}
              />
            ))}
            <Button
              className={styles.pollSubmitButton}
              variant="primary"
              disabled={!selectedAnswer}
              onClick={handlePollSubmit}
            >
              Submit
            </Button>
          </Form>
        </Container>
      )}

      {/* Pie chart */}
      {showGraph && (
        <Container className={styles.pollsContainer}>
          <h5 className={styles.sectionTitle}>{pollData.question}</h5>
            <Doughnut data={chartData} options={chartOptions} />
        </Container>
      )}
    </div>
  );
};

export default RightSideBar;