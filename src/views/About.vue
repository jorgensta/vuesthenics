<template>
  <div class="container">
    <div v-for="section in aboutSections" :key="section.title">
      <h1 class="display-1 font-weight-light">{{ section.title }}</h1>
      <p>{{ section.paragraph }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface AboutSection {
  title: String;
  paragraph: String;
}

@Component({})
export default class About extends Vue {
  aboutSections: Array<AboutSection> = [
    {
      title: "About us",
      paragraph: "We are the best group ever, period."
    },
    {
      title: "Social activies",
      paragraph: "We do so much cool stuff that your FOMO levels will skyrocket"
    },
    {
      title: "Training",
      paragraph: "Beast mode"
    },
    {
      title: "The board",
      paragraph: "Bunch of retards that do not know what they're doing"
    }
  ];
}
</script>

<style scoped>
.container {
  z-index: 1;
  color: white;
}

.container div h1 {
  margin: 5px;
  padding: 5px;
  display: inline-block;
  font-weight: 300;
  border-bottom: 2px solid #00843d;
}

.container div p {
  max-width: 70%;
  margin: 5px;
}
</style>
