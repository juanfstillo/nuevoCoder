<template>
  <div id="app">
    <div v-if="!canAccess">
      <ul class="nav nav-pills nav-justified mb-3">
        <li class="nav-item">
          <a class="navbar-toggler active" data-mdb-toggle="pill" @click="cambiardeRutaLogin" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item">
          <a class="navbar-toggler" data-mdb-toggle="pill" @click="cambiardeRutaLogin" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
      </ul>

      <Login 
      v-show="estoyEnLogin"
      @changeFlag="recibiElMensaje" 
      :usuarios="listadoDeUsuarios"/>
    
      <Registro 
      v-show="!estoyEnLogin"
      @enviarRegistro="recibirRegistro" 
      />
    </div>
    
    <div v-else>
    <MainPage 
    v-if="canAccess" 
    @changeFlagFromMain="recibiElMensaje" 
    :productos="listadoDeProductos"
    @emitVerDetalle="recibirVerDetalle"
    @emitAgregarAlCarrito="recibirAgregarAlCarrito"
    />
    
    <Carrito :carro='carrito' @emitActualizarCarritoPrincipal="recibirActualizarAlCarrito"/>
    
    <Detalle v-if="selected" :producto="selected"/>

    </div>
</div>
</template>

<script>
import Login from './components/Login.vue'
import MainPage from './components/MainPage.vue'
import Registro from './components/Registro.vue'
import Carrito from './components/Carrito.vue'
import Detalle from './components/Detalle.vue'


export default {
  name: 'App',
  components: {
    Login,MainPage,Registro,Carrito,Detalle
  },
  data(){
    return{
    canAccess:false,
    estoyEnLogin:true,
    listadoDeUsuarios:[],
    listadoDeProductos:[{
  "id": 1,
  "titulo": "Campari",
  "descripcion": "Kanlam",
  "cantidad": 74,
  "precio": 23.76,
  "imagen": "https://robohash.org/rerumomniset.png?size=286x180&set=set1"
}, {
  "id": 2,
  "titulo": "Broom",
  "descripcion": "Redhold",
  "cantidad": 53,
  "precio": 14.03,
  "imagen": "https://robohash.org/earumetvero.png?size=286x180&set=set1"
}, {
  "id": 3,
  "titulo": "Chutney",
  "descripcion": "Veribet",
  "cantidad": 25,
  "precio": 69.84,
  "imagen": "https://robohash.org/reprehenderitvoluptatesaut.png?size=286x180&set=set1"
}, {
  "id": 4,
  "titulo": "Swiss",
  "descripcion": "Voyatouch",
  "cantidad": 41,
  "precio": 4.47,
  "imagen": "https://robohash.org/quiacumqueaperiam.png?size=286x180&set=set1"
}, {
  "id": 5,
  "titulo": "Strong",
  "descripcion": "Gembucket",
  "cantidad": 85,
  "precio": 83.36,
  "imagen": "https://robohash.org/reiciendisetmolestiae.png?size=286x180&set=set1"
}, {
  "id": 6,
  "titulo": "Cheddarsliced",
  "descripcion": "Aerified",
  "cantidad": 44,
  "precio": 57.3,
  "imagen": "https://robohash.org/asperiorescumqueexpedita.png?size=286x180&set=set1"
}, {
  "id": 7,
  "titulo": "Brown",
  "descripcion": "Bytecard",
  "cantidad": 13,
  "precio": 20.84,
  "imagen": "https://robohash.org/maximeverodebitis.png?size=286x180&set=set1"
}, {
  "id": 8,
  "titulo": "Rack Black",
  "descripcion": "Holdlamis",
  "cantidad": 67,
  "precio": 2.84,
  "imagen": "https://robohash.org/vitaeoptiovelit.png?size=286x180&set=set1"
}, {
  "id": 9,
  "titulo": "Henry Of",
  "descripcion": "Stim",
  "cantidad": 25,
  "precio": 92.32,
  "imagen": "https://robohash.org/eumnatusat.png?size=286x180&set=set1"
}, {
  "id": 10,
  "titulo": "St. Paulin",
  "descripcion": "Tresom",
  "cantidad": 75,
  "precio": 89.6,
  "imagen": "https://robohash.org/consecteturiddistinctio.png?size=286x180&set=set1"
    }],
    carrito:[],
    selected: null
    }
  },
  methods:{
    recibiElMensaje(){
      this.canAccess = !this.canAccess
    },
    recibirRegistro(payload){
      this.listadoDeUsuarios.push(payload)
    },
    recibirAgregarAlCarrito(payload){
      this.carrito.push(payload)
    },
    recibirActualizarAlCarrito(payload){
          //this.carrito = [...payload]
          this.carrito = Object.assing(this.carrito,payload)
    },
    recibirVerDetalle(payload){
      this.selected = payload
    },
    cambiardeRutaLogin(){
      this.estoyEnLogin = !this.estoyEnLogin;
    }
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
