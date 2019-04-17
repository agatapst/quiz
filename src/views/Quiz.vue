<template>
  <div class="container" id="app">
    <!-- <img alt="Boy with questionmark" src=""> -->
    <h1 class="quiz-header">There will be questions</h1>
      <h2 id="question">Question</h2>
      <h3 v-if="questions">{{ questions[currentQuestionIndex].question }}</h3>
      <button v-on:click="showNextQuestion">next question</button>
      <ul v-if="questions">
        <li>
          {{ questions[currentQuestionIndex].correct_answer }}
        </li>
        <li v-for="incorrectAnswer in questions[currentQuestionIndex].incorrect_answers"
           :key="incorrectAnswer">
          {{ incorrectAnswer }}
        </li>
      </ul>
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
    };
  },
  methods: {
    showNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1;
      } else {
        console.log('no question');
      }
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
