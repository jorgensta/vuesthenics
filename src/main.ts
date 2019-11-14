import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
