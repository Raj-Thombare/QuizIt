// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkS4pdfD79r8gSSVyW1GWLQKyHTh4CIM",
  authDomain: "quizit-48b37.firebaseapp.com",
  projectId: "quizit-48b37",
  storageBucket: "quizit-48b37.appspot.com",
  messagingSenderId: "420257406203",
  appId: "1:420257406203:web:6851b1a7d3b8cd6aab245e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
