import axios from "axios";

const config = {
  baseURL: "https://random-data-api.com/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export const globalAxios = axios.create(config);
