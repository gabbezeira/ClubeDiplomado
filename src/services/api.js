import axios from "axios";

const api = axios.create({
  baseURL: "https://10.50.1.158:443/api/",

  paramsSerializer: (params) => {
    let result = "";
    Object.keys(params).forEach((key) => {
      result += `${key}=${encodeURIComponent(params[key])}&`;
    });

    return result.substring(0, result.length - 1);
  },
});

export default api;
