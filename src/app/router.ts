import { createRouter, createWebHashHistory } from 'vue-router'
import RecipesPage from '../pages/RecipesPage.vue'
import GuidePage from '../pages/GuidePage.vue'
import InterviewPage from '../pages/InterviewPage.vue'
import FavoritesPage from '../pages/FavoritesPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path:'/', redirect:'/recetas' }, { path:'/recetas', name:'recipes', component:RecipesPage, meta:{ title:'Recetas' } },
    { path:'/guia', name:'guide', component:GuidePage, meta:{ title:'Guía' } },
    { path:'/entrevista', name:'interview', component:InterviewPage, meta:{ title:'Entrevista' } },
    { path:'/favoritos', name:'favorites', component:FavoritesPage, meta:{ title:'Favoritos' } },
    { path:'/:pathMatch(.*)*', name:'not-found', component:NotFoundPage, meta:{ title:'Página no disponible' } }
  ],
  scrollBehavior(to,from,saved) {
    if (to.path === from.path) return false
    return saved ?? { top:0 }
  }
})
router.afterEach(to => { document.title = `Alma de Barista · ${String(to.meta.title)}` })
