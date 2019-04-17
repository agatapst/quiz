import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


// btnSearch.addEventListener("click", function() {
//   fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
//   .then(function(response) {
//       if(response.ok) {
//           return response.json();
//       }
//       throw new Error("Network response was not ok.");
//   })
//   .then(function(repos) {
//       reset();
//       mainContent.classList.remove("is-hidden");
//       repos.forEach(function(repo) {
//           addRepoToList(repo);
//           countLanguages(repo.language);
//       });
//       let languagesNames = Object.keys(languageCount);
//       languagesNames.forEach(function(language) {
//           addLanguageToList(language, languageCount[language]);
//       });
//       createLanguagesChart()
//   })
//   .catch(function(error) {
//       console.log("There has been a problem with your fetch operation: ", error.message);
//       mainContent.classList.add("is-hidden");
//       message.classList.remove("is-hidden")
//   })
// });
