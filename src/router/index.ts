// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        children: [
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
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('@/views/Cadastro.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
