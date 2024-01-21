import axios from "axios";

export const api = axios.create({
  baseURL: "https://notify-flame.vercel.app/",
});