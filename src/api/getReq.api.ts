import axios from "axios";

/**
 * Make GET request using axios
 * @param {string} endpoint - To be appended to the base URL (Production or Local) Ex: "/.../"
 * @returns {Promise<any>} Promise with the response
 */ 
export const getAllItems = (endpoint: string) => {
  const baseURL = import.meta.env.VITE_BACKEND_URL // uses vite env vars (adaptable to vercel or local)
  const res = axios.get(baseURL+endpoint)
  return res
}