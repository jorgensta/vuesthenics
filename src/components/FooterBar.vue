<template>
  <v-footer padless>
    <v-card flat tile width="100%" color="black" dark>
      <v-card-text>
        <v-btn icon v-for="iconName in icons" :key="iconName">
          <v-icon x-large>{{ iconName }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text"
        >{{ new Date().getFullYear() }} — Calisthenics IT-crew</v-card-text
      >
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FooterBar extends Vue {
  icons: Array<String> = [
    "fab fa-facebook",
    "fab fa-instagram",
    "far fa-envelope"
  ];
}
</script>

<style scoped>
.v-card {
  text-align: center;
}
</style>
