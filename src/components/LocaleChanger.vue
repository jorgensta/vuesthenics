<template>
  <v-select
    rounded
    background-color="#00843D"
    dark
    class="v-select"
    v-model="$i18n.locale"
    :items="langs"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LocaleChanger extends Vue {
  langs: Array<String> = ["no", "en"];
}
</script>

<style scoped>
.v-select {
  align-items: center;
  align-self: center;
  padding: 5px;
  margin: 5px;
  max-width: 100px;
}
</style>
