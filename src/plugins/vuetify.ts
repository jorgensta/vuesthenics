import Vue from "vue";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    themes: {
      dark: {
        primary: "#000000",
        accent: "#000000",
        secondary: "#00843D",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      },
      light: {
        primary: "#FFFFFF",
        accent: "#FFFF00",
        secondary: "#00843D",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }
});
