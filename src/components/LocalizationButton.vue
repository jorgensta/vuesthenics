<template>
  <div>
    <button>Change locale!</button>
    <CountryFlag country="no" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({
  filters: {
    countryFilter(value: string): string {
      return value === "en" ? "gb" : value;
    }
  }
})
export default class Home extends Vue {}
</script>
<style scoped></style>
