import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://publicws.unipam.edu.br/br.edu.unipam.clubediplomado.api/api/v1",
});

api.interceptors.request.use(async config => {

    const response = await axios.get(`https://publicws.unipam.edu.br/br.edu.unipam.unseg.api.Usuario/api/TokenPublico/Get`);
=======
  baseURL:
    "https://publicws.unipam.edu.br",
});

api.interceptors.request.use(
  async (config) => {
    const response = await axios.get(
      `https://publicws.unipam.edu.br/br.edu.unipam.unseg.api.Usuario/api/TokenPublico/Get`
    );
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368

    const publicToken = response?.data?.Result;

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${publicToken}`;
    }

    return config;
  },
<<<<<<< HEAD
  error => {
    return Promise.reject(error);
  },
=======
  (error) => {
    return Promise.reject(error);
  }
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368
);

export default api;
