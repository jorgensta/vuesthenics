<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="image in ImageInfo"
            :key="image.id"
            class="d-flex child-flex"
            cols="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <a :href="image.link" target="_blank">
                  <v-img
                    :src="image.images.standard_resolution.url"
                    aspect-ratio="1"
                    @click="clicked(image)"
                  />
                </a>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class Instagram extends Vue {
  token?: String =
    process.env.ACCESS_TOKEN_INSTAGRAM ||
    "3098531026.e2af318.e605fa96db2e4855b1a69e6901461b2a";

  ImageInfo: Array<Object> = [];

  fetchData() {
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
      this.token
    }`;

    fetch(url)
      .then(res => res.json())
      .then(({ data }) => (this.ImageInfo = data.slice(0, 15)));
  }

  mounted() {
    this.fetchData();
  }

  clicked(image: Object) {
    console.log("clicked", image);
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
