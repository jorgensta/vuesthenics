<template>
  <div class="hover">
    <v-btn :to="link" link text x-large active-class="btnActive">
      <h2>{{ name }}</h2>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Link } from "../types/link";

@Component
export default class LinkButton extends Vue {
  @Prop() link!: String;
  @Prop() name!: String;
}
</script>

<style scoped>
.hover {
  text-decoration: none;
  margin: 0 10px 0 10px;
  letter-spacing: 0.15em;
  position: relative;
}
.hover:after {
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
.hover:hover:after {
  width: 95%;
  left: 3%;
}

.btnActive {
  background: #00843d;
}

h2 {
  font-weight: 300;
  color: white;
}
.v-btn {
  min-width: 0;

  font-weight: 300;
  font-size: 72!;
  color: white;
}
</style>
