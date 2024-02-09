import axios from "axios";

export const api = axios.create({
  baseURL: "https://backpowtfolio.onrender.com/",
  // baseURL: "http://localhost:3000",
});