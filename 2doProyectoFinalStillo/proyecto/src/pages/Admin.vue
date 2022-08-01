<template>
<div>
    <h1>Panel Administrador</h1>
    <div class="container" v-if="products.length != 0">
        <table class="table table-striped table-dark">
            <thead class="thead-light">
                 <tr>
                     <th>#</th>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Stock</th>
                    <th>Precio Unitario</th>
                    <th>Imagen</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                 </tr>
            </thead>
            <tbody>
                 <tr v-for="(item, index) in products" :key="index">
                    <td>{{index +1 | capitalize}}</td>
                    <td>{{item.id | capitalize}}</td>
                    <td>{{item.title | capitalize}}</td>
                    <td>{{item.description | capitalize}}</td>
                    <td>{{item.amount | capitalize}}</td>
                    <td>{{item.price | capitalize }}</td>
                    <td><img src="https://www.clickbank.com/wp-content/uploads/2021/11/Sell-Your-Product.png" alt="" style="width:200px; height:200px;"></td>
                    <td> <p class='btn btn-warning' @click="editarProducto(item.id)" >Editar</p></td>
                    <td> <p class='btn btn-danger' @click="borrarProducto(item)" >Borrar</p></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/*eslint-disable*/
export default {
  name: "AdminPage",
  data() {
    return {
      products: [],
      selected: 0,
    };
  },
  async mounted() {
    debugger;
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");
    if (isLogged != "true") {
      this.$router.push("/login");
    }
    if (isAdmin != "true") {
      this.$router.push("/main");
    }
    let resp = await axios.get(
      "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos"
    );
    this.products = resp.data;
  },
  methods: {
    editarProducto(payload) {
      /*eslint-disable*/
      this.$router.push({ name: "editar", params: { id: payload } });
    },
     async borrarProducto(payload) {
            await axios.delete("https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + payload.id);
            alert(`${payload.title} eliminado`)
            location. reload()
        }
  },
  filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
    },
  
};
</script>

<style>

</style>