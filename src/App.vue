<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/Posts.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld
  }
});
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.logo {
  height: 125px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


