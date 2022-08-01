<template>
  <div class="app">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <form>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="nombre">Nombre y Apellido</label>
              <input type="text" id="nombre" class="form-control" @keyup="validarNombre" v-model="usuario.nombre">
            </div>
             <div class="col-md-12 mb-2" v-if='mensajeNombre != ""'>
                <p class="errorForm">{{ mensajeNombre }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="mail">Mail</label>
              <input type="text" id="mail" class="form-control" @keyup="validarMail" v-model="usuario.email">
            </div>
            <div class="col-md-12 mb-2" v-if='mensajeMail != ""'>
                <p class="errorForm">{{ mensajeMail }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="edad">Edad</label>
              <input type="number" class="form-control" @keyup="validarEdad" v-model="usuario.edad">
            </div>
            <div class="col-md-12 mb-2" v-if='mensajeEdad != ""'>
                <p class="errorForm">{{ mensajeEdad }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="password">Contraseña</label>
              <p class="form-label">Incluir una mayúscula, un caracter especial (!#$..) y un número</p>
              <input type="password" class="form-control" @keyup="validarPassword" v-model="usuario.password">
            </div>
             <div class="col-md-12 mb-2" v-if='mensajePassword != ""'>
                <p class="errorForm">{{ mensajePassword }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <br>
                <input type="button" class="btn btn-secondary btn-lg mb-2" value="Registrar" @click="createUser"/>
            </div>
            </form>
    </div>
  </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Formulario',
    data() {
        return {
            usuario: {
                nombre: "",
                email: "",
                edad: "",
                password: "",
            },
            mensajeNombre: "",
            mensajeMail: "",
            mensajeEdad: "",
            mensajePassword: "",
        }
    },
    methods: {
          async createUser(){
            if(this.checkForm()){
              const newUser = {
              name: this.usuario.nombre,
              password: this.usuario.password,
              email: this.usuario.email,
              edad: this.usuario.edad,
              isAdmin: false,
            };
          let resp = await axios.post(
          "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/users",newUser
            );
            this.usuarios = resp.data;
            this.$router.push('/login')
            }
          },
        checkForm () {
            return (this.validarNombre() && this.validarMail() && this.validarEdad() && this.validarPassword())
            },
        validarNombre(){
            let regex1 = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            if (regex1.test(this.usuario.nombre)){
                this.mensajeNombre = "";
                return true;
            } else {
                this.mensajeNombre = "Nombre inválido";
                return false;
            }
        },
        validarMail(){
            let regex2 =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (regex2.test(this.usuario.email)){
                this.mensajeMail = "";
                return true;
            } else {
                this.mensajeMail = "Email inválido";
                return false;
            }
        },
        validarEdad(){
            if (this.usuario.edad >= 18 && this.usuario.edad <=100){
                this.mensajeEdad = "";
                return true;
            } else {
                this.mensajeEdad = "Edad inválida";
                return false;
            }
        },
        validarPassword(){
            let regex3 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (regex3.test(this.usuario.password)){
                this.mensajePassword = "";
                return true;
            } else {
                this.mensajePassword = "Clave inválida"
                return false;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
    background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
}
.errorForm{
    color:white;
    font-size: 20px;
}

</style>