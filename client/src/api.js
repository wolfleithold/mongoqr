// client/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://mongoqr.onrender.com", // Fallback to production URL if env variable fails
});

export default api;
