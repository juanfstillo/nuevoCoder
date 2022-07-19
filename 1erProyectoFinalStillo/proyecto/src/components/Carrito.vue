<template>
    <div>
        <hr>
        <h1 class="display-2 text-center">Carrito</h1>
        <ul>
            <li v-for="item in carroLocal" :key="item.id">
                <p class="text-center"><i>{{item.titulo}}</i></p>
                <p class="text-center">{{item.cantidadCarrito}}</p>
                <p class="text-center">Precio: {{item.precio}}</p>
                <button class="btn btn-success mx-2" @click="sumarUno(item)"> + </button>
                <button class="btn btn-danger mx-2" @click="restarUno(item)"> - </button><br>
            <hr>
            </li>
        </ul>
            <p class="text-center">Precio Total: {{precioTotal}}</p>
            <button class="btn btn-secondary btn-lg mt-4">Pagar</button>
        <hr>

    </div>
</template>

<script>
export default {
name:'Carrito',
props:['carro'],
data(){
    return {
        carroLocal:[],
        precioTotal:0
    }
},
mounted(){
    this.carroLocal = this.carro
},
methods:{
    sumarUno(payload){
        payload.cantidadCarrito++;
        this.precioTotal += payload.precio
        },
    restarUno(payload){
        payload.cantidadCarrito > 0?payload.cantidadCarrito--:null;
        this.precioTotal -= payload.precio
        }, 
    carroLocalMethod(newObject,oldObject){
    this.$emit("emitActualizarCarritoPrincipal", newObject)
    },    
    },
watch:{
    carro(newValue){
        debugger;
        this.carroLocal= newValue
    }
}   
}
</script>

<style scoped>

</style>