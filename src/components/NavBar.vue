<template>
  <div>
    <v-app-bar class="app-bar" color="black" app height="100">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row align="center" justify="space-between">
              <v-row align="center" justify="space-evenly">
                <v-app-bar-nav-icon
                  v-if="isMobile"
                  color="primary"
                  @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
                <LocaleChanger v-if="isMobile" />
              </v-row>

              <v-img
                src="../assets/CALISTHENICS_LOGO_NETTSIDE.png"
                contain
                height="70"
                max-width="140"
              />
            </v-row>
          </v-col>
          <v-row align="center" justify="end" v-if="!isMobile">
            <LinkButton
              v-for="link in links"
              :key="link.name"
              :name="$t(link.name)"
              :link="link.link"
              :menuLinks="link.menuLinks"
            />
            <LocaleChanger />
          </v-row>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer color="black" v-model="drawer" absolute temporary>
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
            <v-list-item-title class="list-item-text">
              {{ $t(link.name) }}
            </v-list-item-title>
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
import LocaleChanger from "./LocaleChanger.vue";
import { Link } from "../types/link";

@Component({
  components: {
    LinkButton,
    LocaleChanger,
    LocalizationButton
  }
})
export default class NavBar extends Vue {
  drawer: boolean = false;

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
  links: Array<Link> = [
    {
      name: "navbar.about",
      link: "/about"
    },
    {
      name: "navbar.contact",
      link: "/contact"
    },
    {
      name: "navbar.apply",
      link: "/apply"
    },
    {
      name: "navbar.instagram",
      link: "/instagram"
    },
    {
      name: "navbar.faq",
      link: "/faq"
    }
  ];
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
  background: #00843d;
}
.tile--active {
  background: #00843d;
}
</style>
