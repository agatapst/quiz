<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Are you ready for a quiz?</h2>
    <button class="start"><router-link to="/quiz">start</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.start {
  text-transform: uppercase;
  font-size: 20px;
  border: 1px solid #4E73B9;
  outline: none;
  padding: 20px;
    &:hover {
    background: #4E73B9;
  }
}
</style>
