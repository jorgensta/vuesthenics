<template>
  <div class="container">
    <h1 class="header">Apply for membership</h1>
    <p class="paragraph">
      Lorem upsum kontra hey bro Lorem is upon us these days, Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Atque impedit suscipit a illum
      aperiam quidem sed sapiente obcaecati libero minus odit adipisci natus eos
      rem, omnis ipsam magnam veniam. Expedita? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Cum aperiam quia necessitatibus esse, harum
      voluptates veritatis maxime explicabo reprehenderit facilis impedit,
      deserunt, officia labore at ab. Perferendis maiores quis accusantium?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, natus
      cumque facilis tenetur ab voluptate quos provident ipsum fugiat harum
      temporibus asperiores cupiditate expedita nobis vel, reiciendis nemo.
      Reprehenderit, impedit? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Nesciunt tempora reiciendis, quibusdam laboriosam
      voluptates dolorum cupiditate temporibus modi rerum neque sapiente facilis
      quasi impedit earum hic ab enim sint asperiores. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Enim amet architecto, expedita suscipit
      quia odit eligendi maiores aut sapiente non nobis harum similique facilis
      explicabo dicta ea, dolores rem natus!
    </p>
    <v-btn
      class="white--text"
      href="https://docs.google.com/forms/d/1SZN6VbFeGoXt6nGPCJ-aaYwb0QfQdRGOS2CBf1-vaBc/edit?fbclid=IwAR3Uo2NCRrHs2I8EDfC1YGVutoakCRadYnylPZxzgsGN8afN3TdMWeUgfXI"
      target="_blank"
      elevation="10"
      color="green"
      rounded
      x-large
      >Apply</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Apply extends Vue {}
</script>
<style scoped lang="styl">
.container {
  color: white;
  margin-top: 1%;
  padding: 5px;
  z-index: 2;
}

.header {
  margin: 5px;
  margin-bottom: 1%;
  display: inline-block;
  font-weight: 300;
  font-size: calc(2vw + 2vh + 1vmin);
  border-bottom: 2px solid #00843d;
}

.paragraph {
  font-size: calc(0.6vw + 0.6vh + 0.5vmin);
}
</style>
