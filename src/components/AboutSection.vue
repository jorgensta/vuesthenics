<template>
  <div class="about-section-container">
    <h1 class="display-1 font-weight-ligth header">
      {{ $t(section.title) }}
    </h1>
    <p class="body-1">{{ $t(section.paragraph) }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { AboutSectionType } from "../types/aboutSectionType";

@Component
export default class AboutSection extends Vue {
  @Prop() section: AboutSectionType | undefined;
}
</script>

<style scoped>
.about-section-container {
  color: white;
  padding: 1rem;
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
