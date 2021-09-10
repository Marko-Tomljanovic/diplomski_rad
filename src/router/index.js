import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store";

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
    component: () => import('../views/Kategorije.vue')
  },
  {
    path: '/top5',
    name: 'Top5',
    component: () => import('../views/Top5.vue')
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
    component: () => import('../views/NoviIzvodac.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/profil/:id',
    name: 'Profil',
    component: () => import('../views/Profil.vue'),
  },
  {
    path: '/podKategorije/:id',
    name: 'podKategorije',
    component: () => import('../views/podKategorije.vue'),
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/informacije/Kontakt.vue')
  },
  {
    path: '/profilKorisnika/:id',
    name: 'profilKorisnika',
    component: () => import('../views/profilKorisnika.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/profilKorisnika1/:id',
    name: 'profilKorisnika1',
    component: () => import('../views/profilKorisnika1.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/cestapitanja',
    name: 'cestaPitanja',
    component: () => import('../views/informacije/cestaPitanja.vue')
  },
  {
    path: '/onama',
    name: 'oNama',
    component: () => import('../views/informacije/oNama.vue')
  },
  {
    path: '/kakoseregistrirati',
    name: 'kakoSeRegistrirati',
    component: () => import('../views/informacije/kakoSeRegistrirati.vue')
  },
  {
    path: '/prednostiOcijeniMajstora',
    name: 'prednostiOcijeniMajstora',
    component: () => import('../views/informacije/prednostiOcijeniMajstora.vue')
  },
  {
    path: '/privatnostpodataka',
    name: 'privatnostPodataka',
    component: () => import('../views/informacije/privatnostPodataka.vue')
  },
  {
    path: '/ocjeneKorisnika',
    name: 'ocjenekorisnika',
    component: () => import('../views/informacije/ocjeneKorisnika.vue')
  },
  {
    path: '/ocjenastranice',
    name: 'ocjenaStranice',
    component: () => import('../views/informacije/ocjenaStranice.vue'),
    meta: {
      needsUser: true,
    },
   },
  {
    path: '/:pathMatch(.*)*',
    name: 'stranicaNijePronadena',
    component: () => import('../components/stranicaNijePronadena.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const AuthUser = store.trenutniKorisnik !== null;
// const AdminUser = store.userIsAdmin === true;
if (!AuthUser && to.meta.needsUser)
  next("Prijava");
else {
  next();
}
  let documentTitle = `ocijeniMajstora | ${ to.name }`
  if (to.params.id) {
    documentTitle = `${ to.name } | ${ to.params.id }`
  }
  document.title = documentTitle
next()
})


export default router
