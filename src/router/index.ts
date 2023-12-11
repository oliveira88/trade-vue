// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'comprar-acoes',
        name: 'comprar-acoes',
        component: () => import('@/views/ComprarAcoes.vue'),
      },
      {
        path: 'minhas-acoes',
        name: 'minhas-acoes',
        component: () => import('@/views/MinhasAcoes.vue'),
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'cadastrar-empresa',
        name: 'cadastrar-empresa',
        component: () => import('@/views/CadastrarEmpresa.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
