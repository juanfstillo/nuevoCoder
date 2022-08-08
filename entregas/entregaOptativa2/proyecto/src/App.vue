<template>
  <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>




export default {
  name: "App",
};
</script>

<style scoped>
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
