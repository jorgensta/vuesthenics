import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import no from "../locale/no";
import en from "../locale/en";

const messages = {
  en,
  no
};

export default new VueI18n({
  locale: "no",
  messages
});
