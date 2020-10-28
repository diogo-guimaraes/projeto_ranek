// refactor(src): services
// add(src): services
// rm(src): services

// aqui basicamente ficam os servicos externos
import axios from "axios";
// http://localhost:3000 -> ranek-api.json
const axiosInstance = axios.create({
  baseURL: "http://localhost/wp_ranek/wp-json/api",
});
// interceptador
axiosInstance.interceptors.request.use(
  function(config){
    const token = window.localStorage.token;
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error){
    return Promise.reject(error);
  }
)
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
  },
  login(body){
    return axios.post("http://localhost/wp_ranek/wp-json/jwt-auth/v1/token", body);
  },
  validateToken(){
    return axiosInstance.post("http://localhost/wp_ranek/wp-json/jwt-auth/v1/token/validate");
  }
  
};

// faz axios na api via cep
export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}