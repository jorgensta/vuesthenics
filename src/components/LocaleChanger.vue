<template>
  <div class="v-select-container">
    <v-select
      rounded
      light
      color="black"
      background-color="#00843D"
      class="v-select"
      v-model="$i18n.locale"
      :items="langs"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LocaleChanger extends Vue {
  langs: Array<Object> = [
    { text: "Norsk", value: "no" },
    { text: "English", value: "en" }
  ];
}
</script>

<style scoped>
.v-select {
  display: flex;
  align-items: center;
  align-content: center;
  max-width: 120px;
}
.v-select-container {
  margin: 20px 5px 0px 5px;
}
</style>
