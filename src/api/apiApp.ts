import axios from "axios";
import { getCookie } from "cookies-next";

const api = axios.create({
    baseURL: "http://localhost:8080"
})
api.interceptors.request.use(
    (config) => {
      // Get the token from wherever you store it (e.g., localStorage, Vuex store)
      const token = getCookie("access_token");
      // Add the token to the request headers
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle errors
      return Promise.reject(error);
    }
  );

export default api