import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const signupUserHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ signupUserHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
