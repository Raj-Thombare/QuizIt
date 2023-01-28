import axios from "axios";

const API = axios.create({
  baseURL: "https://the-trivia-api.com/api/questions",
});

export default API;
