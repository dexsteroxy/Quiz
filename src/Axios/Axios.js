import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizSite = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://opentdb.com/api.php?amount=10';

    axios.get(apiUrl)
      .then(response => {
        const updatedQuizData = response.data.results.map((question) => {
          const allAnswers = [...question.incorrect_answers, question.correct_answer];
          const shuffledAnswers = shuffleArray(allAnswers);
          return {
            ...question,
            answers: shuffledAnswers,
          };
        });

        setQuizData(updatedQuizData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedAnswer,
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, quizData.length - 1));
    setShowTotal(false); // Reset showTotal to false when navigating to the next question
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setShowTotal(false); // Reset showTotal to false when navigating to the previous question
  };

  const handleShowTotal = () => {
    setShowTotal(true);
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setScore(0);
    setShowTotal(false);
    setCurrentQuestionIndex(0);
  };

  useEffect(() => {
    // Calculate the score whenever selectedAnswers or currentQuestionIndex changes
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  }, [selectedAnswers, currentQuestionIndex, quizData]);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-200 h-[100vh]">
      <h1 className="text-3xl font-bold mb-4">Quiz Site</h1>
      {!showTotal && currentQuestionIndex < quizData.length && (
        <div className="mb-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{quizData[currentQuestionIndex].question}</h2>
          <ul className="list-none">
            {quizData[currentQuestionIndex].answers.map((answer, idx) => (
              <li key={idx} className="my-2">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={answer}
                  checked={selectedAnswers[currentQuestionIndex] === answer}
                  onChange={() => handleAnswerSelect(answer)}
                  className={`cursor-pointer ${selectedAnswers[currentQuestionIndex] ? (answer === quizData[currentQuestionIndex].correct_answer ? 'bg-green-300' : 'bg-red-300') : ''}`}
                />
                <label className={`ml-2 ${selectedAnswers[currentQuestionIndex] && answer === quizData[currentQuestionIndex].correct_answer ? 'bg-green-600 px-4 rounded-sm' : ''}`}>
                  {answer}
                </label>
              </li>
            ))}
          </ul>
          {selectedAnswers[currentQuestionIndex] && (
            <div className="mt-2 text-green-600">
              Correct Answer: {quizData[currentQuestionIndex].correct_answer}
              
            </div>
            
          )}
        </div>
      )}
      {showTotal && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Your Total Score</h2>
          <p className="text-3xl font-semibold"><span className=''>{score}</span> / {quizData.length}</p>
          <button
            className="px-4 py-2 bg-amazon_blue hover:bg-amazon_light duration-300 text-white rounded-md mt-4"
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        </div>
      )}
      {!showTotal && currentQuestionIndex < quizData.length && (
        <div className="flex md:justify-center justify-between md:gap-16 mb-4">
          <button
            className="px-4 py-2 shadow-2xl shadow-white bg-amazon_blue text-white rounded-md"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-amazon_blue text-white rounded-md"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === quizData.length - 1}
          >
            Next
          </button>
          <button
            className="px-4 py-2 bg-amazon_light text-white rounded-md"
            onClick={handleShowTotal}
          >
             Total Score
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSite;


