<template>
  <v-app
    id="inspire"
    :style="{
      backgroundImage: 'url(' + require('@/assets/bilde1-4.jpg') + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto'
    }"
  >
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

@Component({
  components: {
    NavBar,
    FooterBar
  }
})
export default class App extends Vue {}
</script>

<style>
.zindex {
  z-index: inherit;
}
.title {
  color: whitesmoke;
  font: 100;
}
</style>
