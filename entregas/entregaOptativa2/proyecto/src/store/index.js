import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    strict:true,
    state:{
        usuarios:[]
    },
    getters: {
        getUsuarios(state) {
          return state.usuarios;
        }
      },
    mutations: {
        setUsuarios(state, data){
            state.usuarios = data;
          },
        agregarUsuario(state, data) {
          state.usuarios.push(data);
        }    
      },
      actions: {
        async getUsuariosAPI({ commit }) {
            await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/users')
            .then(response => {
              let resp = response.data;
              commit('setUsuarios', resp);
              return resp;
            })
          },
        async agregarUsuario({ commit }, data) {
          await axios.post('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/users', data)
          .then(response => {
            let resp = response.data;
            commit('agregarUsuario', data);
            return resp;
          })
        },
      },
})

