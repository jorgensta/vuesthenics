<template>
  <v-container class="dark">
    <h1 class="contactHeader">
      {{ $t("contact.title") }}
    </h1>
    <v-row no-gutters>
      <v-col v-for="contact in contactInfo" :key="contact.key" cols="12" sm="4">
        <a :href="contact.href" target="_blank">
          <h2 class="header">{{ $t(`contact.${contact.key}.title`) }}</h2>
        </a>
        <v-btn
          class="contactButton"
          rounded
          color="#00843d"
          fab
          :href="contact.href"
          target="_blank"
        >
          <v-icon large>{{ contact.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Contact extends Vue {
  contactInfo: Array<Object> = [
    {
      key: "facebook",
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/ntnuicalisthenics/?ref=bookmarks"
    },
    {
      key: "instagram",
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/ntnuicalisthenics/"
    },
    {
      key: "email",
      icon: "far fa-envelope",
      href: "mailto:calisthenics-leder@ntnui.no"
    }
  ];
}
</script>
<style scoped>
.contactHeader {
  color: white;
  margin: 5px;
  margin-bottom: 1%;
  display: inline-block;
  font-weight: 300;
  font-size: calc(2vw + 2vh +0.8vmin);
}
.contactButton {
  margin: 5px;
}
.contact-p {
  color: white;
}
.header {
  color: white;
  margin: 5px;
  margin-bottom: 1%;
  display: inline-block;
  font-weight: 300;
  font-size: calc(2vw + 2vh +0.8vmin);
  border-bottom: 2px solid #00843d;
}
</style>
