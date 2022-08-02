
<template>
    <div class="container">
        <h1>Carrito</h1>
        <form action="">
            <div class="row">
                <div class="col-3">
                    <label for="name">Name:</label>
                </div>
                <div class="col-9">
                    <input class="form-control" type="text" id="name" placeholder="Name Product" v-model="product.title" readonly/>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-3">
                    <label for="img">Imagen:</label>
                </div>
                <div class="col-9">
                    <input class="form-control" type="image" id="img" placeholder="Imagen URL" v-model="product.avatar">
                </div>
            </div> -->
            <div class="row">
                <div class="col-3">
                    <label for="price">$:</label>
                </div>
                <div class="col-9">
                    <input class="form-control" type="number" id="price" v-model="product.price" readonly>
                </div>
            </div>
               <div class="row">
                <div class="col-3">
                    <label for="price">Cantidad:</label>
                </div>
                <div class="col-9">
                    <input class="form-control" type="number" id="price" v-model= cantidadCarrito readonly>
                </div>
            </div>
            <div>
                <p class="text-center"></p>
                <button class="btn btn-success mx-2" @click="sumarUno()"> + </button>
                <button class="btn btn-danger mx-2" @click="restarUno()"> - </button><br><br>
                
                <input type="button" class="btn btn-primary mt-2 " @click="Comprar()" value="Pagar"/>
                <router-link to="/main" class="btn btn-warning mt-2">Atras</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CarritoPage",
  data() {
    return {
    cantidadCarrito:0,
      product: {
        title: '',
        description:'',
        amount:'',
        price: 0,
      }
    };
  },
  async mounted() {
    /*eslint-disable*/
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/main");
    }
    let paramId = this.$route.params.id
    let resp = await axios.get(
      "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + paramId
    );
    this.product = resp.data;
  },
  methods: {
    async Comprar() {
        "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + this.$route.params.id,
        this.product
      alert('Compra Finalizada')
    },
    sumarUno(){
        this.cantidadCarrito += 1;
        },
    restarUno(){
        this.cantidadCarrito >= 1 ? this.cantidadCarrito -= 1: null;
        }, 
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

body{
    font-family: Nunito;

}
</style>