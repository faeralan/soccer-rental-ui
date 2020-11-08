import { createWebHistory, createRouter } from 'vue-router';
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import LoginCustomer from '../components/LoginCustomer.vue'
import LoginOwner from '../components/LoginOwner.vue'
import Register from '../components/Register.vue'
import RegisterSuccess from '../components/RegisterSuccess.vue'

const routes = [
    { path: '/', name: 'Index', component: Index },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login-customer', name: 'LoginCustomer', component: LoginCustomer },
    { path: '/login-owner', name: 'LoginOwner', component: LoginOwner },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-success', name: 'RegisterSuccess', component: RegisterSuccess }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router