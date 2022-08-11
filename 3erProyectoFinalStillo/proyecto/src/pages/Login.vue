<template>
<div>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
                    <form>

                    <div class="row">
                        <div class="col-md-12 mb-4">

                        <div class="form-outline">
                            <input type="text" id="usuario" class="form-control form-control-lg" v-model="usuario"/>
                            <label class="form-label" for="usuario">Email</label>
                        </div>

                        <div class="form-outline">
                            <input type="password" id="password" class="form-control form-control-lg" v-model="password"/>
                            <label class="form-label" for="password">Contraseña</label>
                        </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <input type="button" class="btn btn-secondary btn-lg" value="Login" @click="validarLogin"/>
                    </div>
                </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</div> 
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
   name:'LoginPage',
   data(){
    return {
        usuario:'',
        password:'',
    }
   },
   mounted(){
    this.getUsuariosAPI();
        localStorage.clear();
    },
     methods: {
    ...mapActions("usuarios", ["getUsuariosAPI", "setUsuarioLogueado"]),

    preValidarLogin(usuarios){
      for(const us of usuarios){
        if(us.name == this.usuario && us.password == this.password){
          let acceso = {"correcto":true, "usuario": us};
              return acceso;
          }else{
            acceso = {"correcto":false}          
              return acceso;
            }
        }
      },
      validarLogin(){
        debugger
        let resultado = this.preValidarLogin()
        if(resultado.correcto){
          this.setUsuarioLogueado(resultado.usuario)
        }
        if(resultado.usuario.isAdmin){
            this.$router.push('/admin')
        }else{
            this.$router.push('/main')
        }
      },
      },
      computed:{
      ...mapState(["usuarios",["usuarios","usuarioLogueado"]]),
      ...mapGetters(["getUsuarios","getUsuarioLogueado"])
      }
  
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

body{
    font-family: Nunito;
    }
.gradient-custom {
/* fallback for old browsers */
background: #f093fb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}
.card-registration .select-arrow {
top: 13px;
}
</style>