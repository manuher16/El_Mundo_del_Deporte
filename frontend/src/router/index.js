import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/entrenador-personal',
    name: 'EntrenadorPersonal',
    component: () => import('../views/PersonalTrainer.vue')
  },
  {
    path: '/idiomas',
    name: 'Language',
    component: () => import('../views/Languages.vue')
  },
  {
    path: '/artes-marciales',
    name: 'MartialArt',
    component: () => import('../views/MartialArts.vue')
  },
  {
    path: '/baile',
    name: 'Dance',
    component: () => import('../views/Dance.vue')
  },
  {
    path: '/salud',
    name: 'Health',
    component: () => import('../views/Health.vue')
  },
  {
    path: '/musica',
    name: 'Music',
    component: () => import('../views/Music.vue')
  },
  {
    path: '/asesoramiento-legal',
    name: 'Legal',
    component: () => import('../views/LegalAdvice.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:service',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
