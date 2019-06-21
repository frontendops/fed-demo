import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddServicePage from "./views/AddServicePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/addservice",
      name: "AddServicePage",
      component: AddServicePage
    }
  ]
});
