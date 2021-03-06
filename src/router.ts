import Vue from "vue";
import Router from "vue-router";

const About = () => import("./views/About.vue");
const Faq = () => import("./views/Faq.vue");
const Apply = () => import("./views/Apply.vue");
const Instagram = () => import("./views/Instagram.vue");
const Contact = () => import("./views/Contact.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/about"
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
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
    },
    {
      path: "/instagram",
      name: "instagram",
      component: Instagram
    }
  ]
});
