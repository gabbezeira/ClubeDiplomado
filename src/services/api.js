import axios from "axios";

const api = axios.create({
  baseURL:
    "https://publicws.unipam.edu.br/br.edu.unipam.clubediplomado.api/api/v1",
});

api.interceptors.request.use(
  async (config) => {
    const response = await axios.get(
      `https://publicws.unipam.edu.br/br.edu.unipam.unseg.api.Usuario/api/TokenPublico/Get`
    );

    const publicToken = response?.data?.Result;

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${publicToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
