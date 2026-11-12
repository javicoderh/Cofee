<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '../features/recipes/data/recipes'
import { categories } from '../features/recipes/data/categories'
import { defaultFilters, selectRecipes } from '../features/recipes/domain/recipe.selectors'
import RecipeCard from '../features/recipes/components/RecipeCard.vue'
import RecipeRow from '../features/recipes/components/RecipeRow.vue'
import RecipeFilters from '../features/recipes/components/RecipeFilters.vue'
import SearchField from '../shared/ui/SearchField.vue'
import EmptyState from '../shared/ui/EmptyState.vue'
import BaseIcon from '../shared/ui/BaseIcon.vue'
import ResponsiveDialog from '../shared/ui/ResponsiveDialog.vue'
import { useViewportMode } from '../shared/composables/useViewportMode'
import { usePreferences } from '../features/preferences/application/usePreferences'
import { useRouteOverlay } from '../app/overlays/useRouteOverlay'
const query = ref(''), filters = ref(defaultFilters()), draft = ref(defaultFilters())
const compact = useViewportMode(), prefs = usePreferences(), overlay = useRouteOverlay(), route = useRoute()
const filtered = computed(() => selectRecipes(recipes, query.value, filters.value))
const draftCount = computed(() => selectRecipes(recipes, query.value, draft.value).length)
const filterOpen = computed(() => route.name === 'recipes' && route.query.panel === 'filtros')
const activeFilters = computed(() => Number(filters.value.temperature !== 'all') + Number(filters.value.dairy !== 'all'))
watch(filterOpen, value => { if (value) draft.value = { ...filters.value } })
function reset() { query.value = ''; filters.value = defaultFilters() }
function apply() { filters.value = { ...draft.value }; overlay.close() }
async function toResults() { await nextTick(); document.getElementById('recipe-results')?.scrollIntoView({ block:'start' }) }
</script>
<template><div class="page recipes-page"><header class="page-intro"><div><p class="eyebrow">EL OFICIO EN CADA TAZA</p><h1 tabindex="-1" data-page-title>Un buen café empieza<br class="desktop-only"> por saber <em>prepararlo.</em></h1><p class="intro-description">Tu recetario de cabecera. Las medidas claras,<br class="desktop-only"> la técnica a mano y el alma en cada servicio.</p></div><div class="intro-seal" aria-hidden="true"><BaseIcon name="leaf" :size="33" /><span>ORIGEN · TÉCNICA<br>HOSPITALIDAD</span><small>ALMASUR / PROVIDENCIA</small></div></header><section class="recipe-tools" aria-label="Buscar y filtrar recetas"><div class="search-line"><SearchField v-model="query" label="Buscar recetas por nombre o ingrediente" :result-count="filtered.length" @submit="toResults" /><button v-if="compact" type="button" class="filter-toggle" :aria-label="`Filtros${activeFilters ? `, ${activeFilters} activos` : ''}`" aria-haspopup="dialog" @click="overlay.open('filtros')"><BaseIcon name="filter" /><span v-if="activeFilters" class="filter-count">{{ activeFilters }}</span></button><span v-else class="search-hint">Encuentra tu próxima preparación <span>↵</span></span></div><div class="category-tabs" role="group" aria-label="Categoría"><button v-for="category in categories" :key="category.id" type="button" :aria-pressed="filters.category === category.id" @click="filters = { ...filters, category:category.id }"><span class="category-symbol" aria-hidden="true">{{ category.symbol }}</span>{{ category.label }}</button></div><div v-if="!compact" class="desktop-filters"><RecipeFilters v-model="filters" /><button class="text-button" type="button" @click="filters = defaultFilters()">Limpiar filtros</button></div></section><div id="recipe-results" class="results-heading"><span><strong>{{ String(filtered.length).padStart(2,'0') }}</strong> preparaciones <span class="result-rule" /></span><small>Recetas de referencia · ajustar en barra</small></div><EmptyState v-if="!filtered.length" title="No encontramos esa preparación" description="Prueba otro nombre o ajusta los filtros."><button type="button" class="button primary" @click="reset">Restablecer todo</button></EmptyState><div v-else :class="compact ? 'recipe-list' : 'recipe-grid'"><component :is="compact ? RecipeRow : RecipeCard" v-for="recipe in filtered" :key="recipe.id" :recipe="recipe" :favorite="prefs.isFavorite(recipe.id)" @open="overlay.open('receta',$event)" @toggle-favorite="prefs.toggleFavorite" /></div><div class="page-footnote"><BaseIcon name="leaf" :size="18" /><p>La precisión se aprende. La hospitalidad se comparte.</p><span>ALMA DE BARISTA · VOL. 01</span></div><ResponsiveDialog :open="filterOpen" presentation="sheet" title-id="filter-title" close-label="Cerrar filtros" @request-close="overlay.close"><template #header><div><p class="eyebrow">ENCUENTRA TU PREPARACIÓN</p><h2 id="filter-title" tabindex="-1">Filtrar recetas</h2></div></template><div class="filter-sheet-content"><RecipeFilters v-model="draft" /><p class="muted">La composición describe los ingredientes de la receta base.</p><button type="button" class="text-button" @click="draft = { ...defaultFilters(), category:filters.category }">Limpiar filtros</button></div><template #footer><button type="button" class="button primary" @click="apply">Ver {{ draftCount }} recetas</button></template></ResponsiveDialog></div></template>
