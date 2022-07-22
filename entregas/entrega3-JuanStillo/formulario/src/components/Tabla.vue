<template>
    <div class="container" v-if="usuarios.length != 0">
        <table class="table table-striped table-dark">
            <thead class="thead-light">
                 <tr>
                     <th>#</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                 </tr>
            </thead>
            <tbody>
                 <tr v-for="(item, i) in usuarios" :key="item.id">
                    <td>{{i+1 | capitalize}}</td>
                    <td>{{item.nombre | capitalize}}</td>
                    <td>{{item.edad}}</td>
                    <td>{{item.email | capitalize}}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        usuarios: {
            type: Array,
            required: true,
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

<style scoped>

</style>