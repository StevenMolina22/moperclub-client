// in myname.api.js file
// axios for making the requests
import axios from "axios";
// func to get the backend data
export const getAllItems = () => {
  // the api response
  const res = axios.get("http://127.0.0.1:8000/events/api/events/"); // api url not other
  return res;
};