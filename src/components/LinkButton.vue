<template>
  <router-link v-bind:to="link" exact>
    <h2 class="font-weight-light">{{ name }}</h2>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class LinkButton extends Vue {
  @Prop() link!: String;
  @Prop() name!: String;
}
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 0 10px 0 10px;
  letter-spacing: 0.15em;
  padding: 15px 20px;
  position: relative;
}
a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  position: absolute;
  background: #00843d;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}
</style>
