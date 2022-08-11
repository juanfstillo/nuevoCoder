
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        productos:[],
    },
    getters: {
        getProductos(state) {
          return state.productos;
        }
      },
    mutations: {
        setProductos(state, data){
            state.productos = data;
        },
        actualizarProducto(state,data){
        
        },
        borrarProducto(state,data){

        },
        agregarProducto(state,data){
            state.products.push(data);
        }

      },
      actions: {
        async getProductosAPI({ commit }) {
            await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos')
            .then(response => {
              let resp = response.data;
              return resp;
            })
          },
        async agregarProductoAPI({ commit }, data) {
          await axios.post('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos', data)
          .then(response => {
            let resp = response.data;
            return resp;
          })
        },
        async editarProductoAPI({ commit }, data) {
            await axios.post('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/${data.id}', data)
            .then(response => {
              let resp = response.data;
              return resp;
            })
          }
      },
}

