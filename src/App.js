import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./context/data-context";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Leaderboard = React.lazy(() => import("./pages/Leaderboard"));
const Quiz = React.lazy(() => import("./pages/Quiz/Quiz"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Result = React.lazy(() => import("./pages/Result/Result"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<LoadingSpinner />}>
        <DataContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </DataContextProvider>
      </Suspense>
    </div>
  );
}

export default App;
