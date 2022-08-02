
<template>
    <div class="container">
        <h1>Detalle del Producto</h1>
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
                    <label for="stock">Detalle:</label>
                </div>
                <div class="col-9">
                    <textarea class="form-control" type="textarea" id="detalle" rows="4" cols="50" v-model="product.description" readonly></textarea>
                </div>
            </div>
            <div>
                <router-link to="/main" class="btn btn-primary mt-2 mb-2">Atras</router-link>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Detalle",
  data() {
    return {
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
    debugger;

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
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

body{
    font-family: Nunito;

}
</style>