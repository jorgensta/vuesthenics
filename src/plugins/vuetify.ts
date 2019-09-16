import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';



Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    default: "light",
    themes: {
      light: {
        primary: {
          base: colors.grey.lighten1,
          lighten5: colors.grey.darken4,
          lighten4: colors.grey.darken4,
          lighten3: colors.grey.darken4,
          lighten2: colors.grey.darken4,
          lighten1: colors.grey.darken4,
          darken1: colors.grey.darken4,
          darken2: colors.grey.darken4,
          darken3: colors.grey.darken4,
          darken4: colors.grey.darken4,
          tekst: colors.lightBlue.base
        },
        secondary: {
          base: colors.grey.darken4,
          lighten5: colors.grey.darken4,
          lighten4: colors.grey.darken4,
          lighten3: colors.grey.darken4,
          lighten2: colors.grey.darken4,
          lighten1: colors.grey.darken4,
          darken1: colors.grey.darken4,
          darken2: colors.grey.darken4,
          darken3: colors.grey.darken4,
          darken4: colors.grey.darken4
        },
        green: {
          base: "#00843d",
          lighten5: colors.grey.darken4,
          lighten4: colors.grey.darken4,
          lighten3: colors.grey.darken4,
          lighten2: colors.grey.darken4,
          lighten1: colors.grey.darken4,
          darken1: colors.grey.darken4,
          darken2: colors.grey.darken4,
          darken3: colors.grey.darken4,
          darken4: colors.grey.darken4
        },
        yellow: {
          base: "#fedb00",
          lighten5: colors.grey.darken4,
          lighten4: colors.grey.darken4,
          lighten3: colors.grey.darken4,
          lighten2: colors.grey.darken4,
          lighten1: colors.grey.darken4,
          darken1: colors.grey.darken4,
          darken2: colors.grey.darken4,
          darken3: colors.grey.darken4,
          darken4: colors.grey.darken4
        },
        black: {
          base: "#191919",
          lighten5: colors.grey.darken4,
          lighten4: colors.grey.darken4,
          lighten3: colors.grey.darken4,
          lighten2: colors.grey.darken4,
          lighten1: colors.grey.darken4,
          darken1: colors.grey.darken4,
          darken2: colors.grey.darken4,
          darken3: colors.grey.darken4,
          darken4: colors.grey.darken4
        }
      }
    }
  }
});


