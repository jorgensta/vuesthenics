<template>
  <div class="panel-container">
    <v-row align="center" justify="center">
      <transition name="fade" mode="out-in" appear>
        <v-expansion-panels
          multiple
          dark
          accordion
          :class="isMobile ? 'panel__mobile' : 'panel'"
          transition="scroll-y-transition"
        >
          <v-expansion-panel
            color="primary"
            class="panel-item"
            v-for="{ question, answer } in qs"
            :key="answer"
          >
            <v-expansion-panel-header>
              <h2 class="panel-header">{{ $t(question) }}</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              {{ $t(answer) }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </transition>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface FAQitem {
  question: String;
  answer: String;
}

@Component({})
export default class Faq extends Vue {
  get isMobile(): boolean {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return true;
      default:
        return false;
    }
  }
  qs: Array<FAQitem> = [
    {
      question: "faq.semester.q",
      answer: "faq.semester.a"
    },
    {
      question: "faq.groupfull.q",
      answer: "faq.groupfull.a"
    },
    {
      question: "faq.memberhow.q",
      answer: "faq.memberhow.a"
    },
    {
      question: "faq.tryouts.q",
      answer: "faq.tryouts.a"
    },
    {
      question: "faq.ntnuimembership.q",
      answer: "faq.ntnuimembership.a"
    },
    {
      question: "faq.expert.q",
      answer: "faq.expert.a"
    },
    {
      question: "faq.knowledge.q",
      answer: "faq.knowledge.a"
    },
    {
      question: "faq.showup.q",
      answer: "faq.showup.a"
    },
    {
      question: "faq.capacity.q",
      answer: "faq.capacity.a"
    },
    {
      question: "faq.howmanytrainings.q",
      answer: "faq.howmanytrainings.a"
    }
  ];
}
</script>
<style scoped>
.panel-container {
  z-index: 2;
  color: white;
  margin: 1rem;
  padding: 1rem;
}

.panel {
  margin: 10px;
  max-width: 80%;
  opacity: 0.95;
}

.panel__mobile {
  margin: 5px;
  max-width: 95%;
  opacity: 0.95;
}
.panel-header {
  font-weight: 300;
  font-size: 20 !important;
}
</style>
