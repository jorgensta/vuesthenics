import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Faq = () => import("./views/Faq.vue");
const Apply = () => import("./views/Apply.vue");

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
      path: "/apply",
      name: "apply",
      component: Apply
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    }
  ]
});
