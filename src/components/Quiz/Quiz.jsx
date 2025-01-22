import React, { useState } from 'react';
import Question from './Question';

function Quiz({ quizData, onReset }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz completed!');
      onReset();
    }
  };

  return (
    <div>
      <Question question={currentQuestion} onNextQuestion={handleNextQuestion} />
    </div>
  );
}

export default Quiz;