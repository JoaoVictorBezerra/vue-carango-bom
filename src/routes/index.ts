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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/cadastro-veiculos',
    name: 'Cadastrar Veículo',
    component: CadastroVeiculo,
  },
  {
    path: '/cadastro-marca',
    name: 'Cadastrar Marca',
    component: CadastroMarca,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotas,
});

export default router;
