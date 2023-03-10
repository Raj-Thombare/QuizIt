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

      const data = questionsData.data.map((question) => {
        const handleShuffle = (options) => {
          return options.sort(() => Math.random() - 0.5);
        };
        return {
          id: question.id,
          question: question.question,
          answer: question.correctAnswer,
          options: handleShuffle([
            ...question.incorrectAnswers,
            question.correctAnswer,
          ]),
        };
      });

      setQuestions(data);
      localStorage.setItem("questions", JSON.stringify(data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const localName = JSON.parse(localStorage.getItem("name"));
    const data = JSON.parse(localStorage.getItem("questions"));
    setName(localName);
    setQuestions(data);
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
