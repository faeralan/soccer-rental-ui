import { createWebHistory, createRouter } from 'vue-router';
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import LoginCustomer from '../components/LoginCustomer.vue'
import LoginOwner from '../components/LoginOwner.vue'
import RegisterCustomer from '../components/RegisterCustomer.vue'
import RegisterOwner from '../components/RegisterOwner.vue'
import RegisterSuccess from '../components/RegisterSuccess.vue'
import Details from '../components/Details.vue'
import Confirmation from '../components/Confirmation.vue'
import PanelOwners from '../components/PanelOwners.vue'

const routes = [
    { path: '/', name: 'Index', component: Index },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login-customer', name: 'LoginCustomer', component: LoginCustomer },
    { path: '/login-owner', name: 'LoginOwner', component: LoginOwner },
    { path: '/register-owner', name: 'RegisterOwner', component: RegisterOwner },
    { path: '/register-customer', name: 'RegisterCustomer', component: RegisterCustomer },
    { path: '/register-success', name: 'RegisterSuccess', component: RegisterSuccess },
    { path: '/details/:id', name: 'Details', component: Details, props: true },
    { path: '/confirmation', name: 'Confirmation', component: Confirmation},
    { path: '/admin/index', name: 'PanelOwners', component: PanelOwners}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router