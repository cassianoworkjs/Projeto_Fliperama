// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Equipe from './views/Equipe.vue'
import Campeonatos from './views/Campeonatos.vue'
import Rankings from './views/Rankings.vue'
import Podcast from './views/Podcast.vue'
import Galeria from './views/Galeria.vue'
import Novidades from './views/Novidades.vue'
import RankingStreet from './views/rankings/RankingStreet.vue'
import RankingTekken from './views/rankings/RankingTekken.vue'
import RankingMK from './views/rankings/RankingMk.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/equipe', name: 'Equipe', component: Equipe },
  { path: '/campeonatos', name: 'Campeonatos', component: Campeonatos },
  { path: '/rankings', name: 'Rankings', component: Rankings },
  { path: '/podcast', name: 'Podcast', component: Podcast },
  { path: '/galeria', name: 'Galeria', component: Galeria },
  { path: '/novidades', name: 'Novidades', component: Novidades },
  { path: '/ranking/street-fighter', component: RankingStreet },
  { path: '/ranking/tekken', component: RankingTekken },
  { path: '/ranking/mortal-kombat', component: RankingMK }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
