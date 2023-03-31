/*================================= Imports do VueRouter =================================*/
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

/*================================= Imports do Componente Principal =================================*/
import HomeView from '@/views/Home.vue';

const rotasVeiculos: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: () => import('@/components/CadastroVeiculo/_Form.vue'),
  },
  {
    path: 'listar',
    component: () => import('@/components/CadastroVeiculo/_Table.vue'),
  },
  {
    path: 'editar/:id',
    component: () => import('@/components/CadastroVeiculo/_EditForm.vue'),
    props: true,
  },
];

const rotasMarcas: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: () => import('@/components/CadastroMarca/_Form.vue'),
  },
  {
    path: 'listar',
    component: () => import('@/components/CadastroMarca/_Table.vue'),
  },
];

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      public: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      public: false,
    },
  },
  {
    path: '/veiculos',
    name: 'Veículos',
    component: () => import('@/views/CadastroVeiculo.vue'),
    children: rotasVeiculos,
    meta: {
      public: false,
    },
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: () => import('@/views/CadastroMarca.vue'),
    children: rotasMarcas,
    meta: {
      public: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotas,
});

export default router;
