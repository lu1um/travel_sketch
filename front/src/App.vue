<template>
  <div id="app" class="container">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
export default{
  name:'App',
  components:{NavBar},
}
</script>

<style>
:root{
  --main-color: #0D3E69;
  /* background-color: var(--black-color); */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
