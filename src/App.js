import Home from "./pages/Home";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <div className="bgImage"></div>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
