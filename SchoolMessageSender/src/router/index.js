import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/school',
      name: 'school',
      component: () =>  import('../views/MessageSenderView.vue')
    },
    {
      path:'/class',
      name:'class',
      component: () => import('../views/ClassSenderView.vue')
    },
    {
      path:'/newStudent',
      name:'newStudent',
      component: () => import('../views/NewStudent.vue')
    }
  ]
})

export default router
