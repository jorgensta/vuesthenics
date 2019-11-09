<template>
  <div class="container">
    <h1 class="display-3 font-weight-light">Apply for membership</h1>
    <p class="paragraph">
      Lorem upsum kontra hey bro Lorem is upon us these days
    </p>
    <v-btn
      to="https://docs.google.com/forms/d/1SZN6VbFeGoXt6nGPCJ-aaYwb0QfQdRGOS2CBf1-vaBc/edit?fbclid=IwAR3Uo2NCRrHs2I8EDfC1YGVutoakCRadYnylPZxzgsGN8afN3TdMWeUgfXI"
    >
      <a
        href="https://docs.google.com/forms/d/1SZN6VbFeGoXt6nGPCJ-aaYwb0QfQdRGOS2CBf1-vaBc/edit?fbclid=IwAR3Uo2NCRrHs2I8EDfC1YGVutoakCRadYnylPZxzgsGN8afN3TdMWeUgfXI"
      ></a
      >Apply
    </v-btn>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.paragraph {
  color: white;
}
.display-3 {
  color: white;
}
</style>
