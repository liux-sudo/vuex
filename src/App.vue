<template>
  <div id="app">
    <transition mode="out-in"
      enter-active-class="animated zoomInUp"
      leave-active-class="animated zoomOutDown"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
