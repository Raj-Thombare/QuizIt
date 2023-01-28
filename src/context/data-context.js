import { useState, createContext } from "react";
import axios from "../adapters/Axios";

const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState();
  const [showProfile, setShowProfile] = useState(false);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const apiData = await axios.get(
      `?${category && `categories=${category}`}&limit=10&region=IN&${
        difficulty && `difficulty=${difficulty}`
      }`
    );
    setQuestions(apiData);
  };

  const value = {
    name,
    setName,
    questions,
    setQuestions,
    score,
    setScore,
    showProfile,
    setShowProfile,
    fetchQuestions,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
