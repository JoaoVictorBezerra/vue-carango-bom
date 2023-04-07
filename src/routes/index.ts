/*================================= Imports do VueRouter =================================*/
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

/*================================= Imports do Componente Principal =================================*/
import HomeView from '@/views/Home.vue';
/*================================= Rotas Veículos =================================*/
const rotasVeiculos: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: () => import('@/components/Veiculos/_Form.vue'),
  },
  {
    path: 'listar',
    component: () => import('@/components/Veiculos/_Table.vue'),
  },
  {
    path: 'editar/:id',
    component: () => import('@/components/Veiculos/_EditForm.vue'),
    props: true,
  },
];

/*================================= Rotas Marcas =================================*/
const rotasMarcas: RouteRecordRaw[] = [
  {
    path: 'cadastrar',
    component: () => import('@/components/Marcas/_Form.vue'),
  },
  {
    path: 'listar',
    component: () => import('@/components/Marcas/_Table.vue'),
  },
];

/*================================= Rotas =================================*/
const titulo = 'Carango Bom'
const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      public: true,
      title: `${titulo} | Home`
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      public: true,
      title: `${titulo} | Login`
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      public: false,
      title: `${titulo} | Dashboard`
    },
  },
  {
    path: '/veiculos',
    name: 'Veículos',
    component: () => import('@/views/Veiculos.vue'),
    children: rotasVeiculos,
    meta: {
      public: false,
      title: `${titulo} | Veículos`
    },
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: () => import('@/views/Marcas.vue'),
    children: rotasMarcas,
    meta: {
      public: false,
      title: `${titulo} | Marcas`
    },
  },
  {
    path: '/sair',
    name: 'Logout',
    component: () => import('@/views/Logout.vue'),
    meta: {
      public: false,
      title: `${titulo} | Logout`
    }
  }
];

/*================================= Criação da rota =================================*/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotas,
});

export default router;
