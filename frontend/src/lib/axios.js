import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.BASE_URL}/api`
      : "/api",
  withCredentials: true,
});
