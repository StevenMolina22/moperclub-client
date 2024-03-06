import axios from "axios";

export const getAllItemsAlt = () => {
  const server = "http://localhost:8000/api/featured/"
  const res = axios.get(server)
  return res;
}
