/*================================= Imports do VueRouter =================================*/
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

/*================================= Imports do Componente Principal =================================*/
import HomeView from '@/views/Home.vue';
import LoginView from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import CadastroVeiculo from '@/views/CadastroVeiculo.vue';
import CadastroMarca from '@/views/CadastroMarca.vue';

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
    component: LoginView,
    meta: {
      public: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      public: false,
    },
  },
  {
    path: '/cadastro-veiculos',
    name: 'Cadastrar Veículo',
    component: CadastroVeiculo,
    meta: {
      public: false,
    },
  },
  {
    path: '/cadastro-marca',
    name: 'Cadastrar Marca',
    component: CadastroMarca,
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
