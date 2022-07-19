<template>
<div>
    <h1 class="display-2 text-center">{{text | capitalize}}</h1>
        <div class="row">
            <div class = "col-md-4" v-for= "item in productos" :key="item.id">
             <div class="card" style="width: 15rem;">
                <img class="card-img" :src="item.imagen" :alt="item.titulo">
                <div class="card-body">
                <h5 class="card-title">{{item.titulo}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{item.descripcion}}</h6>
                <button @click="agregarAlCarrito(item)" class="btn btn-secondary mb-2">Agregar al carrito</button>
                <button @click="verDetalle(item)" class="btn btn-primary">Ver Detalle</button>
            </div>
        </div>
     </div>
    </div>


 <button @click="desloguear" type="button" class="btn btn-danger">Salir</button>

</div>
</template>

<script>
export default {
    name:'Mainpage',
    props: ["productos"],
    data(){
        return{
            text:"productos"

        }
    },
    methods:{
        desloguear(){
                this.$emit('changeFlagFromMain')
        },
        agregarAlCarrito(payload){
            let objetoCarrito = {...payload,cantidadCarrito:1}
                this.$emit('emitAgregarAlCarrito',objetoCarrito)
        },
        verDetalle(payload){
            this.$emit('emitVerDetalle',payload)
        }
    },
    filters: {
    capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<style>

</style>