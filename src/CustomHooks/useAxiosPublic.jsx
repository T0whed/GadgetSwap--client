import axios from "axios";
import { BASE_URL } from "../SharedUtilities/SharedUtilities.jsx";

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json" },
});

const UseAxiosPublic = () => {
  return instance;
};

export default UseAxiosPublic;
