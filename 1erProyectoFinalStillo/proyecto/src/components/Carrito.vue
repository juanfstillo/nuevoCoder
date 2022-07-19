<template>
    <div>
        <hr>
        <h1>Carrito</h1>
        <ul>
            <li v-for="item in carroLocal" :key="item.id">
                <p>{{item.nombre}}</p>
                <p>{{item.cantidadCarrito}}</p>
                <button @click="sumarUno(item)">+</button>
                <button @click="restarUno(item)">-</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name:'Carrito',
props:['carro'],
data(){
    return {
        carroLocal:[]
    }
},
mounted(){
    this.carroLocal = this.carro
},
methods:{
    sumarUno(payload){
        payload.cantidadCarrito++;
        },
    restarUno(payload){
        payload.cantidadCarrito--;
        },     
    },
watch:{
    carroLocal(newObject,oldObject){
    this.$emit("emitActualizarCarritoPrincipal", newObject)
    }
},   
}
</script>

<style scoped>

</style>