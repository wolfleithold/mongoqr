// client/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Sets the base URL from the environment variable
});

export default api;
