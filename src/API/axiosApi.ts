import axios from "axios";
// Khởi tạo instance axios với baseURL, timeout và header mặc định
const axiosApi = axios.create({
  baseURL: " https://api.rss2json.com/v1/api.json?rss_url=",
  timeout: 1000,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosApi;
