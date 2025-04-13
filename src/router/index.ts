import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/mapView/index.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
})

export default router
