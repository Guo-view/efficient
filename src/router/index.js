import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    redirect: '/home',
    component: () => import('../views/welcome.vue'),
    children: [
      {
        path: '/home',
        name: 'homepage',
        component: () => import('../components/HomePage.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../components/Users.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
