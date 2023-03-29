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

// Veiculos
import Veiculos from '@/views/CadastroVeiculo.vue';
import TabelaVeiculos from '@/components/CadastroVeiculo/_Table.vue'
import FormularioVeiculos from '@/components/CadastroVeiculo/_Form.vue'
const rotasVeiculos: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: FormularioVeiculos
  }, 
  {
    path: 'listar',
    component: TabelaVeiculos
  }
]


// Marcas
import Marcas from '@/views/CadastroMarca.vue';
import TabelaMarcas from '@/components/CadastroMarca/_Table.vue'
import FormularioMarcas from '@/components/CadastroMarca/_Form.vue'
const rotasMarcas: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: FormularioMarcas
  }, {
    path: 'listar',
    component: TabelaMarcas
  }
]

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
    path: '/veiculos',
    name: 'Veículos',
    component: Veiculos,
    children: rotasVeiculos,
    meta: {
      public: false,
    },
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: Marcas,
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
