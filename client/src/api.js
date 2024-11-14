// client/src/api.js
import axios from "axios";

console.log("VITE_API_URL:", import.meta.env.VITE_API_URL); // Debug log

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;