
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        usuarios:[],
        usuarioLogueado:{}
    },
    getters: {
        getUsuarios(state) {
          return state.usuarios;
        },
        getUsuarioLogueado(state){
            return state.usuarioLogueado;
        }
      },
    mutations: {
        setUsuarios(state, data){
            state.usuarios = data;
          },
        agregarUsuario(state, data) {
          state.usuarios.push(data);
        },
        setUsuarioLogueado(state,data){
            state.usuarioLogueado = data;
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
        setUsuarioLogueado({commit},usuario){
            commit('setUsuarioLogueado',usuario)
        }
      },
}

