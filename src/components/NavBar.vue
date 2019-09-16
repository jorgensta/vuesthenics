<template>
  <v-app-bar class="app-bar" app height="100" color="black">
    <v-layout align-center justify-start>
      <div class="spaceBlock"></div>
      <v-img
        src="../assets/NTNUI_TRYKK.png"
        contain
        height="80"
        max-width="160"
      ></v-img>
      <LinkButton
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :link="link.link"
      ></LinkButton>
    </v-layout>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Link from "../types/link";
import Component from "vue-class-component";
import LinkButton from "./LinkButton.vue";

@Component({
  components: {
    LinkButton
  }
})
export default class NavBar extends Vue {
  links: Array<Link> = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Apply",
      link: "/apply"
    }
  ];
}
</script>

<style scoped>
.spaceBlock {
  max-width: 200px;
  width: 75px;
}
</style>
