// refactor(src): services
// add(src): services
// rm(src): services

// aqui basicamente ficam os servicos externos
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  }
};

// faz axios na api via cep
export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}