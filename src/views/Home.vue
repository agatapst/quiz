<template>
  <div class="home">
    <img class="start-img" alt="Boy with questionmark" src="../assets/start_questionmark.png">
    <HelloWorld msg="Welcome to Quiz app"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.start-img {
  width: 500px;
  height: 500px;
}
</style>
