import axios from "axios";

export const restApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
    ContentType: "application/json",
  },
});
