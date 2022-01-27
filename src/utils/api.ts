import axios, { AxiosInstance } from "axios";

import { API_URL } from "../constants";

export const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
