<template>
  <div>
    <NewsFeed class="hello" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NewsFeed from "../components/NewsFeed.vue";

@Component({
  components: {
    NewsFeed
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
.hello {
  z-index: 1;
  color: white;
}
</style>
