<template>
  <div id="app">
    <NavBar/> 
        <router-view></router-view>
    <Footer/>

    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'



export default {
  name: "App",
  components: {NavBar, Footer},
  data() {
    return {
    };
  },
  methods: {
    desloguear(){
      localStorage.clear()
      this.$router.push('login')
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    font-family: Nunito;
}
</style>
