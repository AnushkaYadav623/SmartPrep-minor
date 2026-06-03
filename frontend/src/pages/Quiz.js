import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Mock quiz data
  const quizData = [
    {
      id: 1,
      question: "Which of the following sorting algorithms has the best average-case time complexity?",
      options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "What data structure operates on a Last In, First Out (LIFO) principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "In a binary search tree, where is the smallest element located?",
      options: ["Root node", "Rightmost leaf", "Leftmost leaf", "It can be anywhere"],
      correctAnswer: 2
    }
  ];

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = async () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateScore();
      try {
        await fetch('http://localhost:8080/api/quiz/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: 'Data Structures',
            totalQuestions: quizData.length,
            score: score
          })
        });
      } catch (error) {
        console.error("Error submitting quiz", error);
      }
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizData.length) * 100);
    
    return (
      <div className="page-container">
        <div className="quiz-results-card">
          <div className="results-header">
            <CheckCircle size={64} className="success-icon" />
            <h2>Quiz Completed!</h2>
            <div className="score-display">
              <span className="score-number">{percentage}%</span>
              <span className="score-text">You scored {score} out of {quizData.length}</span>
            </div>
          </div>
          
          <div className="results-breakdown">
            {quizData.map((q, idx) => (
              <div key={q.id} className={`result-item ${selectedAnswers[idx] === q.correctAnswer ? 'correct' : 'incorrect'}`}>
                <div className="result-question">
                  {selectedAnswers[idx] === q.correctAnswer ? 
                    <CheckCircle size={20} className="status-icon" /> : 
                    <XCircle size={20} className="status-icon" />
                  }
                  <p>{q.question}</p>
                </div>
                <div className="result-answer">
                  Your answer: {q.options[selectedAnswers[idx]]} 
                  {selectedAnswers[idx] !== q.correctAnswer && (
                    <span className="correct-answer-text"> (Correct: {q.options[q.correctAnswer]})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="results-actions">
            <button className="primary-btn" onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers({});
              setShowResults(false);
            }}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="page-container">
      <div className="content-header">
        <h2 className="content-title">Data Structures Quiz</h2>
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill" 
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>
        <p className="quiz-progress-text">Question {currentQuestion + 1} of {quizData.length}</p>
      </div>

      <div className="quiz-card">
        <h3 className="question-text">{question.question}</h3>
        <div className="options-container">
          {question.options.map((option, idx) => (
            <div 
              key={idx} 
              className={`option-item ${selectedAnswers[currentQuestion] === idx ? 'selected' : ''}`}
              onClick={() => handleSelectOption(idx)}
            >
              <div className="option-letter">{String.fromCharCode(65 + idx)}</div>
              <div className="option-text">{option}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="quiz-footer">
        <button 
          className="primary-btn" 
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === quizData.length - 1 ? 'Submit Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;