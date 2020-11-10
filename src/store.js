import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            isLoggedOwner: false,
            isLoggedCustomer: false
        }
    },
    actions: {
        getStatusOwner({commit}){
            let status = false;
            if(sessionStorage.getItem('owner')){
                status = true;
            }
            commit('setLoggedOwner', status);
                
        },
        getStatusCustomer({commit}){
            let status = false;
            if(sessionStorage.getItem('customer')){
                status = true;
            }
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