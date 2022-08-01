<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
     <router-link class="nav-link" :to="{ name: 'main' }">
      <img src="../assets/logo.png" alt="nrsLogoNavBar" width="30" height="24">       
     </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'login' }">
                Log In
              </router-link><li><hr class="dropdown-divider"></li>
              <router-link class="dropdown-item" :to="{ name: 'register' }">
                Registro
              </router-link><li><hr class="dropdown-divider"></li>
               <router-link class="dropdown-item" :to="{ name: 'admin' }">
                Panel Administrador
              </router-link>
              <li><hr class="dropdown-divider"></li>
              <p class='btn btn-danger btn-lg' @click="desloguear" >Salir</p>
            </ul>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'main' }">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'about' }">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </div>
    </nav>
</div>
  
</template>

<script>
export default {
    name:'NavBar',
    methods: {
    desloguear(){
      localStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>

</style>