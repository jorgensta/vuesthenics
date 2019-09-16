import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Faq = () => import("./views/Faq.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    }
  ]
});
