<template>
  <v-img
    id="img"
    :src="src"
    height="350"
    alt="Fremsidebilde av calisthenics"
  ></v-img>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Carousel extends Vue {
  src: String =
    "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/31180300_816269808565180_9184631427549888512_o.jpg?_nc_cat=104&_nc_oc=AQlxVeLawK7ERK587QTBYX7KLAab_hUpyneEPpxzgqfz-q3Jb_KUTtk86cBKFxg42w8&_nc_ht=scontent.fosl3-2.fna&oh=05c5e7149eb635a1ec4d1ffa00c7deb5&oe=5E528C92";
}
</script>
