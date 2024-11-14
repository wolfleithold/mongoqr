// client/src/services/api.js
import axios from "axios";

const API_URL = "/api/qr";

export const createQRCode = async (data) => {
  return await axios.post(API_URL, data);
};

export const getQRCodes = async () => {
  return await axios.get(API_URL);
};
