<template>
  <div class="container" id="app">
    <!-- <img alt="Boy with questionmark" src=""> -->
    <h1 class="quiz-header">There will be questions</h1>
      <h2 id="question">Question</h2>
      <h3>{{ question }}</h3>
      <div>answers</div>
  </div>
</template>

<script>
export default {
  name: 'quiz',
  data() {
    return {
      question: '',
    };
  },
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then((questions) => {
        console.log(JSON.stringify(questions.results));
        this.question = questions.results[0].question;
      });
  },
};
</script>

<style lang="scss">
</style>
