<template>
  <v-footer class="footer" padless>
    <v-card flat tile width="100%" color="black" dark>
      <v-card-text class="white--text"
        >{{ year }} — Calisthenics IT-crew</v-card-text
      >
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import moment from "moment";

@Component
export default class FooterBar extends Vue {
  icons: Array<String> = [
    "fab fa-facebook",
    "fab fa-instagram",
    "far fa-envelope"
  ];

  get year(): String {
    return moment().format("Y");
  }
}
</script>

<style scoped>
.footer {
  margin-top: 1%;
}
.v-card {
  text-align: center;
}
</style>
