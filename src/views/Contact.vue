<template>
  <v-container class="dark">
    <v-row no-gutters>
      <v-col v-for="contact in contactInfo" :key="contact.key" cols="12" sm="4">
        <h1 class="header">{{ $t(`contact.${contact.key}.title`) }}</h1>
        <p class="contact-p">Bla bla bla</p>
        <v-btn rounded color="#fedb00" fab>
          <v-icon>facebook</v-icon>
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
      icon: "face"
    },
    {
      key: "instagram",
      icon: "book"
    },
    {
      key: "email",
      icon: "mail"
    }
  ];
}
</script>
<style scoped>
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
