// refactor:router
// add:router
// rm:router
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
  ],
  // função para subir a tela de forma suave 
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
