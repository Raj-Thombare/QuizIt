import Form from "../components/Form/Form";

import "./Home.css";

const Home = ({ name, setName, fetchQuestions, setShowProfile }) => {
  return (
    <div className="content">
      <Form
        name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}
        setShowProfile={setShowProfile}
      />
    </div>
  );
};

export default Home;
