// refactor(src): Store
// add(src): Store
// rm(src): Store 

import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  // muda o valor de usuário
  // passando dois arguementos, state para ter acesso aos 
  // atributos e payload que vai mandar as informações que for feito um commit na mutação
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    }
  },
});
