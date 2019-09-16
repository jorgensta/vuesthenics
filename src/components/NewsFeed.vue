<template>
  <FeedItem />
</template>

<script lang="ts">
import Vue from "vue";
import FeedItem from "./FeedItem.vue";
import Component from "vue-class-component";

@Component({
  components: {
    FeedItem
  }
})
export default class NewsFeed extends Vue {
  items: Array<String> = ["1", "3", "4", "5", "6", "7"];
}
</script>

<style></style>
