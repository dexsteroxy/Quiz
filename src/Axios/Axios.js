

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const QuizSite = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [apiError, setApiError] = useState(null); // Add state for API error
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  useEffect(() => {
    const apiUrl = "https://opentdb.com/api.php?amount=10";

    axios
      .get(apiUrl)
      .then((response) => {
        const updatedQuizData = response.data.results.map((question) => {
          const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          const shuffledAnswers = shuffleArray(allAnswers);
          return {
            ...question,
            answers: shuffledAnswers,
          };
        });

        setQuizData(updatedQuizData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setApiError(
          <div>
            <p className=" mb-4">"The API is not available."</p>
            <button onClick={handleRefresh} className=" text-base border-2 border-black px-3 text-white bg-amazon_blue hover:bg-amazon_light p-1 rounded-md">Try again</button>
          </div>
         ); // Set error message
      });
  }, []);

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedAnswer,
    });
  };


  const handleRefresh = () => {
     const handleRefresh = window.alert('please dear user this page needs to be refresh manuly')
  }

  useEffect(() => {
    // Calculate the score whenever selectedAnswers changes
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  }, [selectedAnswers, quizData]);

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

























  return (
    <div className=" px-4 py-8 bg-amazon_blue lg:hidden min-h-screen">
      
      {userInfo ? (
        <div className="">
          <p className=" font-bold text-xl text-gray-400">
            Total Score: {score} / {quizData.length}
          </p>
          <p className=" text-center text-gray-800 mb-6" >..............................................................</p>
        </div>
      ) : (
        <div></div>
      )}
      {/* <h1 className="text-3xl font-bold mb-4">Quiz Site</h1> */}

      {apiError ? ( // Display error message if API is not available
        <div className="text-red-600 text-4xl font-bold text-center">
          <p>{apiError}</p>
        </div>
      ) : currentQuestionIndex < quizData.length ? (
        <div className="mb-6 p-4  rounded-lg">
          {userInfo ? (
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-300">
                {quizData[currentQuestionIndex].question}
              </h2>
              <ul className="list-none mt-12 ">
                {quizData[currentQuestionIndex].answers.map((answer, idx) => (
                  <li key={idx} className="my-2 border-4 rounded-lg border-cyan-950 text-white   p-2 mb-5">
                    <input
                      type="radio"
                      id={`answer-${idx}`}
                      name={`question-${currentQuestionIndex}`}
                      value={answer}
                      checked={selectedAnswers[currentQuestionIndex] === answer}
                      onChange={() => handleAnswerSelect(answer)}
                      className={`cursor-pointer ml-2 ${
                        selectedAnswers[currentQuestionIndex]
                          ? answer ===
                            quizData[currentQuestionIndex].correct_answer
                            ? "bg-green-300"
                            : "bg-red-300"
                          : ""
                      }`}
                    />
                    <label
                      htmlFor={`answer-${idx}`} // Corresponding input id
                      className={`ml-2 cursor-pointer ${
                        selectedAnswers[currentQuestionIndex] &&
                        answer === quizData[currentQuestionIndex].correct_answer
                          ? " text-green-600  rounded-sm"
                          : ""
                      }`}
                    >
                      {answer}
                    </label>
                  </li>
                ))}
              </ul>{" "}
            </div>
          ) : (
            <div className=" text-red-600 font-semibold text-2xl text-center">
              Please login to answer the quiz questions
            </div>
          )}

          {selectedAnswers[currentQuestionIndex] && (
            <div className="mt-2 text-green-600">
              Correct Answer: {quizData[currentQuestionIndex].correct_answer}
            </div>
          )}
          {userInfo ? (
            <div className="mt-4 flex justify-center items-center space-x-6 md:space-x-20">
              {/* <button
                onClick={previousQuestion}
                className=" bg-blue-800 hover:bg-amazon_light text-white font-bold py-2 px-4 rounded mr-2"
              >
                Back
              </button> */}
              <button
                onClick={nextQuestion}
                className=" bg-blue-800 active:bg-blue-950 text-white font-bold p-6 px-12 rounded-3xl "
              >
                Next
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Your Total Score</h2>
          <p className="text-3xl font-semibold">
            {score} / {quizData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizSite;
