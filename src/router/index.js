import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

const routes = [
  {
    path: '/empleados/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/empleados/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/empleados/editar/',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/empleados/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/empleados/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
