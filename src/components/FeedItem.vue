<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col :key="i" cols="12" md="6">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="isMobile ? { 'on-hover': true } : { 'on-hover': hover }"
            >
              <v-img :src="item.img" height="225px">
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">{{ item.title }}</p>

                    <div>
                      <p
                        class="ma-0 body-1 font-weight-bold font-italic text-left text-shadow: 1px 0 0"
                      >
                        {{ item.text }}
                      </p>
                      <p
                        class="caption font-weight-medium font-italic text-left"
                      >
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class FeedItem extends Vue {
  isMobile: boolean = this.$vuetify.breakpoint.mdAndDown;
  icons: Array<String> = ["mdi-rewind", "mdi-play", "mdi-fast-forward"];
  items: Array<Object> = [
    {
      title: "",
      text: "",
      subtext: "",
      img:
        "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/30742026_10160344381530626_3815715122622496768_n.jpg?_nc_cat=101&_nc_oc=AQniK1wD0MB8qFxfti17KsrKlAhi0KDor56O9xJwRzSHJrx-tpLNY3z2QiKUi1YfQzw&_nc_ht=scontent.fosl3-2.fna&oh=6c2f8099383b9c88c9475c5bdb1c0463&oe=5E251EE3"
    }
  ];
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card-mobile {
  opacity: 1;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.mt-4,
.ma-0,
.main-text {
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;
}
</style>
