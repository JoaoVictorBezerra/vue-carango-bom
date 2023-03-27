/*================================= Imports do VueRouter =================================*/
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/*================================= Imports do Componente Principal =================================*/
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'

const rotas: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: HomeView
	}, {
    path: '/login',
    name: 'Login',
    component: LoginView
  }

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotas
})

export default router