<template>
  <div class="panel-container">
    <v-row align="center" justify="center">
      <transition name="fade" mode="out-in" appear>
        <v-expansion-panels
          multiple
          dark
          popout
          class="panel"
          transition="scroll-y-transition"
        >
          <v-expansion-panel
            color="primary"
            class="panel-item"
            v-for="{ question, answer } in qs"
            :key="answer"
          >
            <v-expansion-panel-header>
              <h2 class="panel-header">{{ question }}</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              {{ answer }}
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
  qs: Array<FAQitem> = [
    {
      question: "What is the semester fee?",
      answer: "350 NOK"
    },
    {
      question: "Is the group full?",
      answer:
        "Yes, currently our group is full. We invite more members when we the capacity for it"
    },
    {
      question: "How can i become a member?",
      answer:
        "We only provide membership by invitation only. We send out invitation to the best candidates in our waiting list. The only thing that you have to do is apply to us, and you're automatically listed in our waiting list!"
    },
    {
      question: "Do you have try-outs?",
      answer:
        "At the moment we do not have try-outs. We are in the process of trying to find a location and the resources neccessary to arrange an open trainig for everybody"
    },
    {
      question: "Do i need a NTNUI-membership?",
      answer: "Yes"
    },
    {
      question: "Do i need to be an expert?",
      answer:
        "No not at all! We only expect you to be interested and determinated. Beginners are more than welcome!"
    },
    {
      question: "Do i need any knowledge of calisthenics",
      answer:
        "No knowledge needed. We'll provide you with everything you need to know"
    },
    {
      question: "Can i just show up on your trainings?",
      answer:
        "No unfortunately not. With so many people that want to join that we cannot make such exceptions"
    },
    {
      question: "Do you have a capacity limit?",
      answer:
        "Yes we have. We're around 70-80 active people, and that is currently our max capacity"
    },
    {
      question: "How many trainings do you have each week?",
      answer: "We have 3 trainings each week. Each training is 2 hours"
    }
  ];
}
</script>
<style scoped>
.panel-container {
  z-index: 2;
  margin: 10px;
  padding: 10px;
}

.panel {
  margin: 10px;
  max-width: 80%;
  opacity: 0.95;
}
.panel-header {
  font-weight: 300;
  font-size: 20 !important;
}
</style>
