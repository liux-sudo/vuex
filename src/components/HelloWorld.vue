<template>
  <div class="hello">
    <ul>
      <router-link to="/home" tag="li">home</router-link>
      <router-link to="/state" tag="li">state</router-link>
      <router-link to="/getter" tag="li">getter</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
  ul>li{
    list-style: none;
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px 20px;
    background: #f2f2f2;
    margin-bottom: 10px;
  }
</style>
