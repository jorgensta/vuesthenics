<template>
  <div class="zindex">
    <Status />
    <NewsFeed class="zindex" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NewsFeed from "../components/NewsFeed.vue";
import Status from "../components/Status.vue";

@Component({
  components: {
    NewsFeed,
    Status
  }
})
export default class Home extends Vue {}
</script>
<style></style>
