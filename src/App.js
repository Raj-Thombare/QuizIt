import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./context/data-context";
import { AuthContextProvider } from "./context/auth-context";
import Background from "./components/UI/Background";
import MainWrapper from "./components/UI/MainWrapper";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Leaderboard = React.lazy(() => import("./pages/Leaderboard/Leaderboard"));
const Quiz = React.lazy(() => import("./pages/Quiz/Quiz"));
const Result = React.lazy(() => import("./pages/Result/Result"));
const NotFound = React.lazy(() => import("./pages/404/NotFound"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));

function App() {
  return (
    <Background>
      <MainWrapper>
        <Suspense fallback={<LoadingSpinner />}>
          <DataContextProvider>
            <AuthContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthContextProvider>
          </DataContextProvider>
        </Suspense>
      </MainWrapper>
    </Background>
  );
}

export default App;
