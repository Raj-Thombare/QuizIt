import { useState, createContext } from "react";
import axios from "../adapters/Axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [error, setError] = useState(false);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const questionsData = await axios.get(
        `?${category && `categories=${category}`}&limit=10&region=IN&${
          difficulty && `difficulty=${difficulty}`
        }`
      );
      setQuestions(questionsData.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const value = {
    name,
    setName,
    questions,
    score,
    showProfile,
    setShowProfile,
    fetchQuestions,
    incrementScore,
    resetScore,
    error,
    setError,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
