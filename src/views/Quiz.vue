<template>
  <div class="container" id="app">
    <!-- <img alt="Boy with questionmark" src=""> -->
    <h1 class="quiz-header">Quiz</h1>
      <h3 v-if="questions">{{ questions[currentQuestionIndex].question }}</h3>
      <div v-if="questions">
        <button v-on:click="submitCorrectAnswer" >
          {{ questions[currentQuestionIndex].correct_answer }}
        </button>
        <button v-on:click="showNextQuestion"
                v-for="incorrectAnswer in questions[currentQuestionIndex].incorrect_answers"
                :key="incorrectAnswer">
          {{ incorrectAnswer }}
        </button>
      </div>
      <div v-if="questions === null">
        <h3>Your points: {{ points }} </h3>
        <button v-on:click="reset">Try again</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'quiz',
  data() {
    return {
      question: '',
      questions: null,
      currentQuestionIndex: 0,
      points: 0,
    };
  },
  methods: {
    showNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1;
      } else {
        this.questions = null;
        console.log('no question');
      }
    },
    submitCorrectAnswer() {
      this.points += 1;
      console.log(`correct ${this.points}`);
      this.showNextQuestion();
    },
    reset() {
      this.points = 0;
    },
  },
  // method which starts when component is created on the page
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then((questions) => {
        console.log(JSON.stringify(questions.results));
        this.questions = questions.results;
      });
  },
};
</script>

<style lang="scss">
</style>
