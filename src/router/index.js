import { createRouter, createWebHistory } from 'vue-router'

const Layout = ()=> import('../views/layout.vue')
const Home = ()=> import('../views/home/index.vue')
const Topic = ()=> import('../views/topic/index.vue')
const Login = ()=> import('../views/login/index.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {path: 'home',component: Home},
        {path: 'topic',component: Topic},
      ]
    },
  ]
})

export default router
