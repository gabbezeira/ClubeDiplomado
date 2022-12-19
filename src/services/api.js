import axios from "axios";

const api = axios.create({
  baseURL: "https://backendhomologacao.unipam.edu.br/br.edu.unipam.diplomado.api/api/v1",

  paramsSerializer: (params) => {
    let result = "";
    Object.keys(params).forEach((key) => {
      result += `${key}=${encodeURIComponent(params[key])}&`;
    });

    return result.substring(0, result.length - 1);
  },
});

export default api;
