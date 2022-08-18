import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
// import usuarios from './modules/usuarios'
// import productos from './modules/productos'
// import carrito from './modules/carrito'


Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        products:[],
        carrito:[],
        currentUser: null,
        user:'',
        users:[],
        password:'',
        isAdmin:false
        },
    getters: {
        carrito(state){
            return state.carrito.filter(o => o.userId === state.currentUser.id);
          },
        auth(state){
            return state.currentUser;
        },
        getProducts(state){
            return state.products;
        },
        getUsers(state){
            return state.users;
        }

    },
    mutations: {
        SET_PRODUCTS(state, products){
            state.products = products;
          },
        SET_CURRENT_USER(state,payload){
            state.currentUser = payload;
        },
        SET_CART(state,carrito){
            state.carrito = carrito;
        },
        ADD_ONE_CART(state,carrito){
            state.carrito.unshift(carrito);
        },
        SET_USERS(state,users){
            state.users = users;
        }
    },
    actions: {
        async setProducts(context){
            try{
                let resp = await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos')
                context.commit('SET_PRODUCTS',resp.data)
                console.log(resp.data)
            }catch(error){
                console.log(error)
            }
        },
        async getAllCart(context){
            try{
              let resp = await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/carrito')
              let data = resp.data
              context.commit('SET_CART',data)
            }catch(error){
                console.log(error)
            }
        },
        async addCart(context,carrito){
            try{
             let resp = await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/carrito',carrito)
             context.commit('ADD_ONE_CART',resp.data)
            }catch(error){
            console.log(error)
            }
        },
        async deleteCart(context,payload){
        },

        async login(context){
            try{
                let resp = await axios.get('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/users')
                context.commit('SET_USERS',resp.data)
              }catch(error){
                  console.log(error)
              }
          },

          async register(context,newUser) {
            try{
                await axios.post('https://62e6d7cd69bd03090f764b0b.mockapi.io/api/users', newUser)
            } catch(err){
                console.log(err)
            }
        },
    }
})
    