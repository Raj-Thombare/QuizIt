import Home from "./components/Home";
import Result from "./components/Result";
import Quiz from "./components/Quiz";

import "./App.css";

function App() {
  return (
    <div>
      <div className="bgImage"></div>
      <div className="App">
        <Home />
        <Result />
        <Quiz />
      </div>
    </div>
  );
}

export default App;
