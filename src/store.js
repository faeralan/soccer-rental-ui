import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            isLoggedOwner: sessionStorage.getItem('owner') ? true : false,
            isLoggedCustomer: sessionStorage.getItem('customer') ? true : false
        }
    },
    actions: {
        getStatusOwner({commit}, status){
           
            commit('setLoggedOwner', status);
                
        },
        getStatusCustomer({commit}, status){
           
            commit('setLoggedCustomer', status);
                
        }
    },
    mutations: {
        setLoggedOwner(state, status){
            state.isLoggedOwner = status;
        },
        setLoggedCustomer(state,status){
            state.isLoggedCustomer = status;
        }
    }
})