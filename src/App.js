import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { DataContextProvider } from "./context/data-context";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Leaderboard = React.lazy(() => import("./pages/Leaderboard"));
const Quiz = React.lazy(() => import("./pages/Quiz/Quiz"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Result = React.lazy(() => import("./pages/Result"));

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Suspense
          fallback={
            <CircularProgress style={{ margin: 250 }} size={50} thickness={2} />
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Suspense>
      </div>
    </DataContextProvider>
  );
}

export default App;
