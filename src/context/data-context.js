import { useState, useContext, createContext } from "react";
import axios from "../adapters/Axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
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
      setError(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        questions,
        score,
        setScore,
        fetchQuestions,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
