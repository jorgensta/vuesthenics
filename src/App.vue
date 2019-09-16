<template>
  <v-app id="inspire">
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
.title {
  color: whitesmoke;
  font: 100;
}
</style>
