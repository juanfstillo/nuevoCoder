<template>
        <div>
            <table class="table table-striped table-dark">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, i) in registros" :key="i">
                        <th :class="clase">{{ i + 1 }}</th>
                        <th :class="clase" v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
export default {
  name: 'Tabla',
  props: {
      titulos:{
        type:Array,
        required:true
      },
      registros:{
        type: Array,
        required:true,
      },
      clase:{
        type:String,
        required:true,

      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.azul{
    color:blue;
}
.rojo{
    color:red;
}
.verde{
    color: green
}
.fondoAzul{
    background-color: blue;
}

.fondoRojo{
    background-color: red;
}

.fondoGris{
    background-color: grey;
}
</style>
