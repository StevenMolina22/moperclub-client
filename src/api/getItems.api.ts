import axios from "axios";

export const getAllItems = (server: string) => {
  const res = axios.get(server)
  return res
}