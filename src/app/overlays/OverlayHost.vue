<script setup lang="ts">
import { computed, nextTick, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '../../features/recipes/data/recipes'
import { brews } from '../../features/recipes/data/brews'
import { modules } from '../../features/guide/data/modules'
import { questions } from '../../features/interview/data/questions'
import type { Recipe } from '../../features/recipes/domain/recipe.types'
import type { GuideModule } from '../../features/guide/domain/guide.types'
import type { InterviewQuestion } from '../../features/interview/domain/interview.types'
import RecipeDetail from '../../features/recipes/components/RecipeDetail.vue'
import RecipeArt from '../../features/recipes/components/RecipeArt.vue'
import GuideDetail from '../../features/guide/components/GuideDetail.vue'
import QuestionDetail from '../../features/interview/components/QuestionDetail.vue'
import ResponsiveDialog from '../../shared/ui/ResponsiveDialog.vue'
import BaseIcon from '../../shared/ui/BaseIcon.vue'
import { usePreferences } from '../../features/preferences/application/usePreferences'
import { useViewportMode } from '../../shared/composables/useViewportMode'
import { useRouteOverlay } from './useRouteOverlay'
type Selection = { kind:'receta'; value:Recipe } | { kind:'tema'; value:GuideModule } | { kind:'pregunta'; value:InterviewQuestion } | { kind:'invalid' }
const route = useRoute(), overlay = useRouteOverlay(), prefs = usePreferences(), compact = useViewportMode()
const selected = shallowRef<Selection>()
const currentBrew = computed(() => {
  const selection = selected.value
  return selection?.kind === 'receta' ? brews.find(b => b.id === selection.value.brewProfileId) : undefined
})
const dialog = ref<InstanceType<typeof ResponsiveDialog>>()
const isOpen = computed(() => !!route.query.panel && route.query.panel !== 'filtros')
function afterClose() { if (!isOpen.value) selected.value = undefined }
const title = computed(() => selected.value?.kind === 'receta' ? selected.value.value.name : selected.value?.kind === 'tema' ? selected.value.value.title : selected.value?.kind === 'pregunta' ? selected.value.value.question : 'Esta ficha está pendiente de incorporación')
watch(compact, async () => {
  const scroll = document.querySelector<HTMLElement>('.responsive-dialog.detail[open] .dialog-scroll')
  if (!scroll || !isOpen.value) return
  const boundary = scroll.getBoundingClientRect().top + 100
  const anchors = [...scroll.querySelectorAll<HTMLElement>('[data-reading-anchor], .detail-reading section, .recipe-intro')]
  const anchor = anchors.find(el => el.getBoundingClientRect().bottom > boundary)
  if (!anchor) return
  const before = anchor.getBoundingClientRect().top
  await nextTick()
  scroll.scrollTop += anchor.getBoundingClientRect().top - before
}, { flush:'pre' })
watch(() => [route.query.panel,route.query.id], async () => {
  if (!isOpen.value) return
  const id = route.query.id
  const recipe = recipes.find(r => r.id === id), module = modules.find(m => m.id === id), question = questions.find(q => q.id === id)
  selected.value = route.query.panel === 'receta' && recipe ? {kind:'receta',value:recipe} : route.query.panel === 'tema' && module ? {kind:'tema',value:module} : route.query.panel === 'pregunta' && question ? {kind:'pregunta',value:question} : {kind:'invalid'}
  await nextTick(); dialog.value?.scrollToTop(); document.getElementById('detail-title')?.focus({ preventScroll:true })
}, { immediate:true })
</script>
<template><ResponsiveDialog ref="dialog" :open="isOpen" presentation="detail" title-id="detail-title" @request-close="overlay.close" @after-close="afterClose"><template #header><div class="detail-heading"><RecipeArt v-if="selected?.kind === 'receta'" :art-key="selected.value.artKey" /><div><span class="eyebrow">{{ selected?.kind === 'receta' ? (selected.value.status === 'reference' ? 'Receta de referencia' : 'Receta de la casa') : selected?.kind === 'tema' ? 'Los fundamentos del oficio' : 'Preparación para la entrevista' }}</span><h2 id="detail-title" tabindex="-1">{{ title }}</h2></div></div></template><RecipeDetail v-if="selected?.kind === 'receta'" :recipe="selected.value" :brew-profile="currentBrew" :key="selected.value.id" /><GuideDetail v-else-if="selected?.kind === 'tema'" :module="selected.value" @open-recipe="overlay.open('receta',$event)" /><QuestionDetail v-else-if="selected?.kind === 'pregunta'" :key="selected.value.id" :question="selected.value" @open-guide="overlay.open('tema',$event)" /><div v-else class="detail-reading"><button class="button primary" type="button" @click="overlay.close">Volver al listado</button></div><template v-if="selected?.kind === 'receta'" #footer><button class="button primary save-recipe" type="button" :aria-pressed="prefs.isFavorite(selected.value.id)" @click="prefs.toggleFavorite(selected.value.id)"><BaseIcon name="heart" :class="{ filled:prefs.isFavorite(selected.value.id) }" />{{ prefs.isFavorite(selected.value.id) ? 'Receta guardada' : 'Guardar receta' }}</button></template></ResponsiveDialog></template>
