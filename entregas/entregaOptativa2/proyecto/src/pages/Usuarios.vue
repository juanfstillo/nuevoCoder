<template>
<div>
    <h1>Panel Administrador</h1>
    <div class="container" v-if="usuarios.length != 0">
        <table class="table table-striped table-dark">
            <thead class="thead-light">
                 <tr>
                     <th>#</th>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <!-- <th>Editar</th>
                    <th>Borrar</th> -->
                 </tr>
            </thead>
            <tbody>
                 <tr v-for="(item, index) in usuarios" :key="index.id">
                    <td>{{index +1 | capitalize}}</td>
                    <td>{{item.id | capitalize}}</td>
                    <td>{{item.name | capitalize}}</td>
                    <td>{{item.email | capitalize}}</td>
                    <td><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" style="width:200px; height:200px;"></td>
                    <!-- <td> <p class='btn btn-warning' @click="editarProducto(item.id)" >Editar</p></td>
                    <td> <p class='btn btn-danger' @click="borrarProducto(item)" >Borrar</p></td> -->
                </tr>

            </tbody>
        </table>
            <router-link type="button" class="btn btn-secondary btn-lg btn-block" to="/">Volver</router-link>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: "AdminPage",
    mounted() {
        this.getUsuariosAPI();
    },
    computed: {
        ...mapState(['usuarios']),
        ...mapGetters(['getUsuarios']),
    },
    methods: {
        ...mapActions(['getUsuariosAPI']),
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

body{
    font-family: Nunito;

}
</style>