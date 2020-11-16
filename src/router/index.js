import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Shop from '../views/Shop.vue'
import UnPaid from '@/components/UnPaid.vue'
import UnShipped from '@/components/UnShipped.vue'
import UnDispatched from '@/components/UnDispatched.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    children: [
      {
        path: '/shop',
        redirect: '/UnPaid'
      },
      {
        path: '/UnPaid',
        name: 'UnPaid',
        component: UnPaid
      },
      {
        path: '/UnShipped',
        name: 'UnShipped',
        component: UnShipped
      },
      {
        path: '/UnDispatched',
        name: 'UnDispatched',
        component: UnDispatched
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
