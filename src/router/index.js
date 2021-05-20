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
    path: '/kategorije',
    name: 'Kategorije',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Kategorije.vue')
  },
  {
    path: '/rejting',
    name: 'Rejting',
    component: () => import('../views/Rejting.vue')
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: () => import('../views/Prijava.vue')
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import('../views/Registracija.vue')
  },
  {
    path: '/pitanja',
    name: 'Pitanja',
    component: () => import('../views/Pitanja.vue')
  },
  {
    path: '/novalozinka',
    name: 'NovaLozinka',
    component: () => import('../views/NovaLozinka.vue')
  },
  {
    path: '/radovi',
    name: 'Radovi',
    component: () => import('../views/Radovi.vue')
  },
  {
    path: '/izvodaci',
    name: 'Izvodaci',
    component: () => import('../views/Izvodaci.vue')
  },
  {
    path: '/noviizvodac',
    name: 'NoviIzvodac',
    component: () => import('../views/NoviIzvodac.vue')
  },
  {
    path: '/profil/:id',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  },
  {
    path: '/podKategorije/:id',
    name: 'podKategorije',
    component: () => import('../views/podKategorije.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
