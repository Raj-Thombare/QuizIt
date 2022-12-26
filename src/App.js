import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className="bgImage"></div>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
