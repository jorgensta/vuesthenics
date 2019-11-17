<template>
  <v-container class="container" fluid>
    <v-row justify="center">
      <div v-for="image in images" :key="image.url">
        <h1 class="headline font-weight-light text-center">
          {{ $t(image.time) }}
        </h1>
        <v-img
          class="trainingImage"
          :width="isMobile ? '250' : '350'"
          :height="isMobile ? '250' : '350'"
          :src="image.url"
          :alt="image.alt"
          contain
        >
        </v-img>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Training extends Vue {
  get isMobile(): boolean {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
      case "sm":
      case "md":
        return true;
      default:
        return false;
    }
  }
  images: Array<Object> = [
    {
      url: "https://photos.smugmug.com/photos/i-J3tqd73/0/X4/i-J3tqd73-X4.jpg",
      time: "about.training.time1",
      alt: "Personer sitter i sirkel"
    },
    {
      url: "https://photos.smugmug.com/photos/i-nNpnJFW/0/X4/i-nNpnJFW-X4.jpg",
      time: "about.training.time2",
      alt: "Handstand med tekst på rygg"
    },
    {
      url: "https://photos.smugmug.com/photos/i-tVpmxcd/0/X4/i-tVpmxcd-X4.jpg",
      time: "about.training.time3",
      alt: "Backflip bilde"
    }
  ];
}
</script>

<style scoped>
.container {
  margin: 2rem 0 2rem 0;
  color: white;
}
.trainingImage {
  margin: 1rem;
}
</style>
