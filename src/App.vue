<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TableSSE />
  </div>
</template>

<script>
import TableSSE from './components/TableSSE.vue'

export default {
  name: 'App',
  components: {
    TableSSE
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
