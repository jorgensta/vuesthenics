<template>
  <div class="container">
    <v-img
      id="img"
      :src="src"
      height="350"
      alt="Fremsidebilde av calisthenics"
    ></v-img>
    <AboutSection
      v-for="section in aboutSocialSections"
      :key="section.title"
      :section="section"
    >
    </AboutSection>
    <Training />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Training from "../components/Training.vue";
import AboutSection from "../components/AboutSection.vue";

import { AboutSectionType } from "../types/aboutSectionType";

@Component({
  components: {
    Training,
    AboutSection
  }
})
export default class About extends Vue {
  src: String =
    "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/31180300_816269808565180_9184631427549888512_o.jpg?_nc_cat=104&_nc_oc=AQlxVeLawK7ERK587QTBYX7KLAab_hUpyneEPpxzgqfz-q3Jb_KUTtk86cBKFxg42w8&_nc_ht=scontent.fosl3-2.fna&oh=05c5e7149eb635a1ec4d1ffa00c7deb5&oe=5E528C92";
  aboutSocialSections: Array<AboutSectionType> = [
    {
      title: "about.aboutus.title",
      paragraph: "about.aboutus.p"
    },
    {
      title: "about.social.title",
      paragraph: "about.social.p"
    }
  ];
}
</script>

<style scoped>
.aboutContainer {
  z-index: 1;
  padding: 1rem;
  color: white;
}
</style>
