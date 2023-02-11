import axios from "axios";

const createAPI = (baseURL = "http://localhost:3000/api", config = {}) => {
  const axiosInstance = axios.create({
    baseURL,
    crossDomain: true,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...config,
  });

  // setup axios.intercept
  return axiosInstance;
};

const api = createAPI();

export default api;
