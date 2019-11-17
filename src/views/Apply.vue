<template>
  <div class="container">
    <h1 class="header">{{ $t("apply.title") }}</h1>
    <p class="paragraph">{{ $t("apply.p") }}</p>
    <v-btn
      class="white--text"
      :href="googleDocsLink"
      target="_blank"
      elevation="10"
      color="#00843d"
      rounded
      x-large
      >{{ $t("apply.button") }}</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Apply extends Vue {
  googleDocsLink: String =
    "https://docs.google.com/forms/d/1SZN6VbFeGoXt6nGPCJ-aaYwb0QfQdRGOS2CBf1-vaBc/edit?fbclid=IwAR3Uo2NCRrHs2I8EDfC1YGVutoakCRadYnylPZxzgsGN8afN3TdMWeUgfXI";
}
</script>
<style scoped>
.container {
  color: white;
  padding: 1rem;
  z-index: 2;
}

.header {
  margin: 5px;
  margin-bottom: 1%;
  display: inline-block;
  font-weight: 300;
  border-bottom: 2px solid #00843d;
}

.paragraph {
  padding: 0.5rem;
  font-size: calc(0.2vw + 1.4vh + 0.4vmin);
}
</style>
