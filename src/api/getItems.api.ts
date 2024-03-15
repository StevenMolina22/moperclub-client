import axios from "axios";

export const getAllItems = (endpoint: string) => {
  const baseURL = import.meta.env.VITE_BACKEND_URL
  const res = axios.get(baseURL+endpoint)
  return res
}