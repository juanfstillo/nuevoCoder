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
                       
                        <div class="alert alert-danger" v-if="error_login" role="alert">Usuario o contraseña incorrecta</div>

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
import { mapGetters } from 'vuex';
export default {
    name:'LoginPage',
   data(){
    return {
        usuario:'',
        password:'',
        error_login: false
    }
   },
    methods: {
       
       async validarLogin(){
            this.error_login = false;
            await this.$store.dispatch('login')
            let data = this.getUsers.find((x)=> x.email === this.usuario && x.password === this.password);
            if(!data){
                this.error_login = true
            }
            localStorage.clear();
            if (data) {
            this.$store.commit('SET_CURRENT_USER', data)
            localStorage.setItem("isLogged", true);
            localStorage.setItem("user", JSON.stringify(data));
            
            if (data?.isAdmin) {
                localStorage.setItem("isAdmin", true);
                this.$router.push("/admin");
            } else {
                localStorage.setItem("isAdmin", false);
                this.$router.push("/main");
            }
            }
        }
    },
    computed:{
      ...mapGetters({getUsers:'getUsers'})
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