<template>
  <v-app
    id="inspire"
    :style="{
      backgroundImage: 'url(' + require('@/assets/bilde1-4.jpg') + ')',
      backgroundSize: 'cover'
    }"
  >
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import NavBar from "./components/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style scoped>
.hello {
  z-index: inherit;
  color: white;
}
.title {
  color: whitesmoke;
  font: 100;
}
</style>
