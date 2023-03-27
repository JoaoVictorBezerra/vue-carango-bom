/*================================= Imports do VueRouter =================================*/
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/*================================= Imports do Componente Principal =================================*/
import HomeView from '@/views/Home.vue'

const rotas: RouteRecordRaw[] = [
	{
		path: '',
		name: '',
		component: HomeView
	}
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router