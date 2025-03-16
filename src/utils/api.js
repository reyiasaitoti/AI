import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // For Vite
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // If using Create React App

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
