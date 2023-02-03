import { useState, useContext, createContext, useEffect } from "react";
import axios from "../adapters/Axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);


  const fetchQuestions = async (category, difficulty) => {
    try {
      const questionsData = await axios.get(
        `?${category && `categories=${category}`}&limit=10&region=IN&${
          difficulty && `difficulty=${difficulty}`
        }`
      );
      setQuestions(questionsData.data);
      localStorage.setItem("questions", JSON.stringify(questionsData.data));
      localStorage.setItem("score", JSON.stringify(score));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const localName = JSON.parse(localStorage.getItem("name"));
    const data = JSON.parse(localStorage.getItem("questions"));
    const score = JSON.parse(localStorage.getItem("score"));
    setName(localName);
    setQuestions(data);
    setScore(score);
  }, [name]);

  return (
    <DataContext.Provider
      value={{
        name,
        setName,
        category,
        setCategory,
        difficulty,
        setDifficulty,
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
