<template>
  <div id="app">
    <Language title="Python" use-cases="Data Science, Videogames, General purpose, NetOps" />
    <Language title="PHP" use-cases="Server side scripting" />
  </div>
</template>

<script>
import Language from './components/Language.vue'

export default {
  name: 'App',
  components: {
    Language
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
