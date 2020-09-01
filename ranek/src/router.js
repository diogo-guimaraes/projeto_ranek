// refactor:router
// add:router
// rm:router
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import rota pra página de produto
import Produto from "./views/Produto.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      // add rota pra página de produto
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true
    }   
  ],
  // função para subir a tela de forma suave 
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
