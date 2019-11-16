<template>
  <div class="container">
    <Carousel />
    <div v-for="section in aboutSections" :key="section.title">
      <h1 class="display-1 font-weight-light">{{ section.title }}</h1>
      <p>{{ section.paragraph }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Carousel from "../components/Carousel.vue";

interface AboutSection {
  title: String;
  paragraph: String;
}

@Component({
  components: {
    Carousel
  }
})
export default class About extends Vue {
  aboutSections: Array<AboutSection> = [
    {
      title: "About us",
      paragraph:
        "Vestibulum condimentum in ante ac venenatis. Pellentesque bibendum risus nibh, eget cursus magna porttitor id. Nam eget diam eros. Vestibulum in hendrerit est. Vivamus in ligula ultricies risus placerat hendrerit. Sed lectus nisi, luctus vitae magna nec, hendrerit sollicitudin dolor. Nam tempor diam sit amet massa tempor, eget sodales turpis finibus. Aliquam erat volutpat. Aliquam blandit tristique ullamcorper. Praesent vitae volutpat ligula, vel lobortis lorem. Etiam a turpis ac ante mattis varius nec id enim. Curabitur ac magna purus. Donec accumsan nulla in sodales tempor. Pellentesque rutrum lectus orci."
    },
    {
      title: "Social activies",
      paragraph:
        "Vivamus id tristique neque. Maecenas ornare, erat non laoreet sollicitudin, est velit ultrices mauris, aliquam accumsan dui felis eu quam. Etiam vitae dui odio. Aliquam porta est id mi rutrum, sed imperdiet diam egestas. Curabitur eget imperdiet justo. Nunc eleifend dui nec sapien bibendum, quis pellentesque enim condimentum. Maecenas accumsan lectus tempor finibus vestibulum. Ut euismod elementum tortor, et mattis leo porttitor non. Duis vitae augue sed metus ultrices maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed turpis sem. Sed posuere tincidunt vehicula. Etiam nec neque sit amet tortor viverra tincidunt ac a ligula."
    },
    {
      title: "Training",
      paragraph:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pretium ex eget molestie sagittis. Maecenas tincidunt dolor id laoreet dictum. Phasellus eget nisl non elit convallis eleifend. Donec tortor magna, dapibus vitae sapien quis, consectetur egestas quam. Etiam nec tortor id odio congue ornare ornare eget eros. Donec dapibus, libero eu euismod scelerisque, orci massa maximus enim, non euismod quam turpis non ante. In ornare lacus sem, sed facilisis urna mattis at. Etiam sapien enim, finibus ac mauris eget, vehicula lobortis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
    },
    {
      title: "The board",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nulla ut ligula dignissim pharetra. Curabitur vulputate molestie odio at congue. Cras pretium, turpis vitae commodo eleifend, quam ipsum maximus quam, sed facilisis metus justo sed sem. Proin mattis cursus porttitor. Donec non ligula non libero pretium hendrerit. Aliquam in condimentum justo. Curabitur tempus vehicula dolor sit amet tincidunt. Nullam eleifend hendrerit velit, ac fermentum mi auctor quis. Nam vel ante tristique, dignissim tellus posuere, faucibus tortor. Ut malesuada justo eu augue consectetur, ut dapibus risus varius. Mauris in est id arcu eleifend iaculis dictum at nibh. Fusce fringilla justo laoreet tincidunt auctor. Praesent venenatis velit ac ex fringilla tempor. Proin euismod fringilla gravida. Nullam nec felis fringilla, auctor urna at, cursus diam. Proin vestibulum malesuada ante a hendrerit."
    }
  ];
}
</script>

<style scoped>
.container {
  z-index: 1;
  color: white;
}

.container div h1 {
  margin: 5px;
  padding: 5px;
  display: inline-block;
  font-weight: 300;
  border-bottom: 2px solid #00843d;
}

.container div p {
  max-width: 80%;
  margin: 5px;
}
</style>
