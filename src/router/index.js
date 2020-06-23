import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo1 from '../views/demo1_Intro.vue'
import demo2 from '../views/demo2_EventMethod.vue'
import demo3 from '../views/demo3_Data.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/demo1',
    name:'demo1',
    component: demo1
  },
  {
    path:'/demo2',
    name:'demo2',
    component:demo2
  },
  {
    path:'/demo3',
    name:'demo3',
    component:demo3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
