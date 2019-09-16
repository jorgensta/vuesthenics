<template>
  <div class="flag-container"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({
  components: {},
  filters: {
    countryFilter(value: string): string {
      return value === "en" ? "gb" : value;
    }
  }
})
export default class Home extends Vue {
  country: String = "en";

  supportedLanguages: Array<String> = ["gb", "no"];

  setCountry = (country: string) => (this.country = country);

  onClick = (country: string) => {
    console.log(this.country);
    this.setCountry(country);
    console.log(country);
  };
}
</script>
<style scoped>
.flag-container {
  margin: 5px 20px 0px 20px;
}
.button--locale {
  color: white;
}
</style>
