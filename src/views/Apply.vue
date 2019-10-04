<template>
  <div class="container">
    <h1 class="display-3 font-weight-light">Hello</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Apply extends Vue {}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.display-3 {
  color: #bdbdbd;
}
</style>
