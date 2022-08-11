import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import usuarios from './modules/usuarios'
import productos from './modules/productos'


Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        productos,usuarios
        }
});