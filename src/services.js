import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const docRef = collection(db, "leaderboard");

export const addUser = (data) => {
  return addDoc(docRef, data);
};

export const getUsers = () => {
  return getDocs(docRef);
};
