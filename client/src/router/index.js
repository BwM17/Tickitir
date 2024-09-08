import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('../views/TicketView.vue')
    }
  ]
})

export default router
