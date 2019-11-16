<template>
  <div>
    <v-app-bar class="app-bar" color="black" app height="100">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row align="center" justify="space-between" class="hamburger">
              <v-row>
                <v-app-bar-nav-icon
                  v-if="isMobile"
                  color="primary"
                  @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
              </v-row>

              <v-img
                src="../assets/CALISTHENICS_LOGO_NETTSIDE.png"
                contain
                height="70"
                max-width="140"
              />
              <v-menu v-if="isMobile" bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn dark icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list dark rounded>
                  <v-list-item class="tile" @click="dialog = !dialog">
                    <v-list-item-title class="list-item-text">{{
                      $t("changeLanguage")
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
            <v-list-item-title class="list-item-text">{{
              $t(link.name)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row justify="center">
      <v-dialog v-model="dialog" dark scrollable max-width="300px">
        <v-card>
          <v-card-title>{{ $t("selectLanguage") }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-radio-group v-model="selectedLanguage" column>
              <v-radio label="Norsk" value="no"></v-radio>
              <v-radio label="English" value="en"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="green lighten-1" text @click="dialog = false">{{
              $t("close")
            }}</v-btn>
            <v-btn
              color="green lighten-1"
              text
              @click="saveLanguage(selectedLanguage)"
              >{{ $t("save") }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
  dialog: boolean = false;

  saveLanguage(lang: string) {
    this.$i18n.locale = lang;
    this.dialog = false;
  }

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
.hamburger {
  margin-left: 2rem;
}
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
