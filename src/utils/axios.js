import axios from "axios";

const ajax = axios.create({
  baseURL: "http://localhost:3060",
});

const handleConfig = (config) => {
  config.headers.Authorization = "Bearer " + sessionStorage.getItem("token");
  return {
    withCredentials: true,
    ...config,
  };
};

const handleError = (error) => {
  return Promise.reject(error);
};

ajax.interceptors.request.use(handleConfig, handleError);
axios.defaults.withCredentials = true;

export default ajax;
