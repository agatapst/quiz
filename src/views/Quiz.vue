<template>
  <div class="container" id="app">
    <h1 class="quiz-header">Quiz</h1>
    <!-- progress bar -->
    <div id="progress-bar">
      <div v-bind:style="{width: progress + '%'}"></div>
    </div>
    <!-- show questions when they are loaded from api and the user not passed all questions -->
    <div v-if="questions && currentQuestionIndex < questions.length">
      <h3> {{ questions[currentQuestionIndex].question }}</h3>
        <!-- submit answer -->
        <button v-on:click="submitAnswer(answer)"
                v-for="answer in questions[currentQuestionIndex].answers"
                :key="answer">
          {{ answer }}
        </button>
    </div>
    <!-- show final page when questions have been loaded from api and user passed all questions -->
    <div v-if="questions && currentQuestionIndex === questions.length">
      <img class="done-img" alt="Happy girl putting her hands up" src="../assets/done.png">
      <h3>Your points: {{ points }} </h3>
      <button v-on:click="reset">try again</button>
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
      progress: 0,
    };
  },
  methods: {
    submitAnswer(answer) {
      if (answer === this.questions[this.currentQuestionIndex].correct_answer) {
        this.points += 1;
        console.log(`correct ${this.points}`);
      }
      this.showNextQuestion();
    },
    showNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestionIndex += 1;
        this.hitProgress();
      }
    },
    reset() {
      this.$router.go();
    },
    hitProgress() {
      this.progress += 10;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  // method which starts when component is created on the page
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then((questions) => {
        console.log(JSON.stringify(questions.results));
        this.questions = questions.results.map((question) => {
          const newQuestion = question;
          // copy incorrect answers into answers array
          newQuestion.answers = question.incorrect_answers.concat();
          const randomIndex = this.getRandomInt(0, question.incorrect_answers.length);
          // insert correct answer in random place
          newQuestion.answers.splice(randomIndex, 0, question.correct_answer);
          return newQuestion;
        });
      });
  },
};
</script>

<style lang="scss">
#progress-bar {
    width: 300px;
    border: 1px solid #4E73B9;
    margin: 0 auto 20px auto;
    border-radius: 30px;
    overflow: hidden;
}

#progress-bar div {
    height: 20px;
    background: #4E73B9;
}

.done-img {
  width: 300px;
  height: 400px;
}
</style>
