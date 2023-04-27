import axios from "axios";

const axiosApi = axios.create({
  baseURL: " https://api.rss2json.com/v1/api.json?rss_url=",
  timeout: 1000,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosApi;
