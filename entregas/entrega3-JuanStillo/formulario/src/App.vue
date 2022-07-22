<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Formulario Clase 8"/>
    <Formulario @emit-agregar-usuario="addUsuarioTabla"/>
    <Tabla :usuarios="usuarios"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/Fomulario.vue'
import Tabla from './components/Tabla.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Formulario,Tabla
  },
  data() {
        return {
            usuarios: []
        }
    },
    methods: {
        addUsuarioTabla(usuario) {
            console.log(usuario);
            const nuevoUsuario = {...usuario};
            this.usuarios.push(nuevoUsuario);
        }
    }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
