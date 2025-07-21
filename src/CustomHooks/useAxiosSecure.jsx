import axios from "axios";
import { BASE_URL } from "../SharedUtilities/SharedUtilities.jsx";
import { useContext, useEffect } from "react";
import AuthContext from "../Providers/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const UseAxiosSecure = () => {
  const { signOutCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.request.use(
      (request) => {
        return request;
      },
      (error) => {
        console.log("Error caught in request interceptor:");
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("Error caught in response interceptor: ", error);

        if (error?.data?.status === 401 || error?.data?.status === 403) {
          signOutCurrentUser();
          navigate("/sign-in");
          console.log(error?.data?.status);
        }

        return Promise.reject(error);
      }
    );
  }, [navigate, signOutCurrentUser]);

  return instance;
};

export default UseAxiosSecure;
