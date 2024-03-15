import axios from "axios";

export const getAllItems = (endpoint: string) => {
  const baseURL = import.meta.env.VITE_BACKEND_URL // uses vite env vars (adaptable to vercel or local)
  const res = axios.get(baseURL+endpoint)
  return res
}