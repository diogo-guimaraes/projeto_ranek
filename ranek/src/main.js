
// refactor: main
// add: main
// rm: main
 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PaginaCarregando from "@/components/PaginaCarregando.vue";
Vue.config.productionTip = false;

Vue.component("PaginaCarregando", PaginaCarregando);
// add filtro para converter integer para float
Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
