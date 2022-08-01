<template>
    <div>
        <hr>
        <h1 class="display-2 text-center">Detalle</h1>
        <h3>Nombre: {{producto.titulo}}</h3>
        <p>Descripción: {{producto.descripcion}}</p>
        <p>Precio: {{producto.precio}}</p>
    </div>
</template>

<script>
export default {
name:'Detail',
props:['producto'],
data(){
    return {
    }
},
mounted(){
},   
}
</script>

<style scoped>

</style>