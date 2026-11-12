<script setup lang="ts">
import { computed } from 'vue'
import { recipes } from '../features/recipes/data/recipes'
import { usePreferences } from '../features/preferences/application/usePreferences'
import { useViewportMode } from '../shared/composables/useViewportMode'
import { useRouteOverlay } from '../app/overlays/useRouteOverlay'
import RecipeCard from '../features/recipes/components/RecipeCard.vue'
import RecipeRow from '../features/recipes/components/RecipeRow.vue'
import EmptyState from '../shared/ui/EmptyState.vue'
const prefs = usePreferences(), compact = useViewportMode(), overlay = useRouteOverlay()
const favorites = computed(() => recipes.filter(r => prefs.isFavorite(r.id)))
</script>
<template><div class="page"><header class="page-intro"><div><p class="eyebrow">SIEMPRE A MANO</p><h1 data-page-title tabindex="-1">Tus recetas <em>favoritas.</em></h1><p class="intro-description">Las preparaciones que acompañan tus turnos.</p></div></header><p class="editorial-note">Tus favoritos se guardan en este dispositivo y navegador.</p><EmptyState v-if="!favorites.length" title="Tu selección empieza aquí" description="Guarda las recetas que consultas durante el turno."><RouterLink class="button primary" to="/recetas">Explorar recetas</RouterLink></EmptyState><template v-else><div class="results-heading"><span>{{ favorites.length }} recetas guardadas</span></div><div :class="compact ? 'recipe-list' : 'recipe-grid'"><component :is="compact ? RecipeRow : RecipeCard" v-for="recipe in favorites" :key="recipe.id" :recipe="recipe" :favorite="true" @open="overlay.open('receta',$event)" @toggle-favorite="prefs.toggleFavorite" /></div></template></div></template>
