import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonthlyView from '../views/MonthlyView.vue'
import YearlyView from '../views/YearlyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/monthly',
      name: 'monthly',
      component: MonthlyView,
    },
    {
      path: '/yearly',
      name: 'yearly',
      component: YearlyView,
    },
  ],
})

export default router
