<template>
  <div id="app">
      <div>
          <Tabla :titulos="tabla1.titulos" :registros="tabla1.registros" :clase="tabla1.clase"/>
      </div>   
      <div>
          <Tabla :titulos="tabla2.titulos" :registros="tabla2.registros" :clase="tabla2.clase"/>
      </div>
      <div>
          <Tabla :titulos="tabla3.titulos" :registros="tabla3.registros" :clase="tabla3.clase"/>
      </div>
  </div>
</template>

<script>
import Tabla from './components/Tabla.vue'

export default {
  name: 'App',
  components: {
    Tabla
  },
  data(){
    return {
      tabla1: {
            titulos: ["ID", "Nombre", "Director", "Año"],
            registros: [
                ["La Mascara", "Velez", "1999"],
                ["El Rey Leon", "Gomez", "2001 "],
                ["Titanic", "Godino", "2001"],
                ["Los Simpsons", "Gimenez", "1998"],
            ],
            clase:"azul fondoRojo",
        },
        tabla2: {
            titulos: ["ID", "Linea", "Ramal", "Color"],
            registros: [
                ["93", "Avellaneda", "Amarillo"],
                ["107", "Ciudad Universitaria", "Blanco"],
                ["111", "Constitucion", "Verde"],
                ["10", "Wilde", "Cyan"],
            ],
            clase:"rojo fondoAzul",
        },
        tabla3: {
            titulos: ["ID", "Gerencia", "Origen", "Destino"],
            registros: [
                ["Roca", "Constitucion", "Retiro"],
                ["San Martin", "Retiro", "Pilar"],
                ["Servicio Nacional", "A", "B"],
                ["Tren de la Costa", "Retiro", "Olivos"],
            ],
            clase:"verde fondoGris"
        },
    }
  }
}
</script>

<style>


</style>
