<template>
  <div>
    <h1 class="display-2 text-center">{{text | capitalize}}</h1>
        <div class="row">
            <div class = "col-md-4" v-for= "(item, index) in products" :key="index">
             <div class="card" style="width: 15rem;">
                <img class="card-img" :src="item.avatar" :alt="item.title">
                <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${{item.price}}</h6>
                <button @click="agregarAlCarrito(item.id)" class="btn btn-secondary mb-2">Agregar al carrito</button>
                <button @click="verDetalle(item.id)" class="btn btn-primary">Ver Detalle</button>
            </div>
        </div>
     </div>
    </div>
</div>
</template>
<script>
import axios from "axios"
export default {
  name: "MainPage",
  data(){
    return {
        text:"productos",
        products: [],
    }
  },
  methods:{
      agregarAlCarrito(payload){
      this.$router.push({ name: "carrito", params: { id: payload } });
      },
      verDetalle(payload){
      this.$router.push({ name: "detalle", params: { id: payload } });

        },
        

  },
  async mounted() {
    /*eslint-disable*/
    debugger;

    let isLogged = localStorage.getItem("isLogged");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    let resp = await axios.get(
      "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos"
    );
    this.products = resp.data;
  },
  filters: {
    capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

body{
    font-family: Nunito;

}
</style>