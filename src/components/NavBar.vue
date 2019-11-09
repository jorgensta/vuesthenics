<template>
  <div>
    <v-app-bar class="app-bar" app height="100" color="black">
      <div class="container" v-resize="onResize">
        <v-app-bar-nav-icon
          v-if="isMobile"
          color="primary"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <div>
          <v-img
            src="../assets/CALISTHENICS_LOGO_NETTSIDE.png"
            contain
            height="80"
            max-width="140"
          />
        </div>
        <div class="flex-container" v-if="!isMobile">
          <LinkButton
            v-for="link in links"
            :key="link.name"
            :name="link.name"
            :link="link.link"
            :menuLinks="link.menuLinks"
          />
        </div>
        <div width="140"></div>
      </div>
    </v-app-bar>

    <v-navigation-drawer color="black" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-btn
          class="ma-2"
          color="primary"
          text
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-list nav shaped>
        <v-list-item
          class="tile"
          active-class="tile--active"
          v-for="link in links"
          :key="link.name"
          :name="link.name"
          link
          :to="link.link"
        >
          <v-list-item-content>
            <v-list-item-title class="list-item-text">{{
              link.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LinkButton from "./LinkButton.vue";
import LocalizationButton from "./LocalizationButton.vue";
import { Link } from "../types/link";

@Component({
  components: {
    LinkButton,
    LocalizationButton
  }
})
export default class NavBar extends Vue {
  isMobile: boolean = false;
  drawer: boolean = false;

  links: Array<Link> = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Apply",
      link: "/apply"
    },
    {
      name: "Instagram",
      link: "/instagram"
    },
    {
      name: "F.A.Q.",
      link: "/faq"
    }
  ];

  onResize() {
    this.isMobile = window.innerWidth <= 880;
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
}
.spaceBlock {
  max-width: 200px;
  width: 75px;
}

.list-item-text {
  color: white;
  font-weight: 300;
  font-size: 20px;
  margin: 5px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tile {
  margin: 5px;
  border-radius: 4px;
}
.tile:hover {
  background: green;
}
.tile--active {
  background: green;
}
</style>
