<script setup lang="ts">
import { computed } from 'vue'
import type { Recipe, BrewProfile } from '../domain/recipe.types'
import RecipeArt from './RecipeArt.vue'
import RecipeMetrics from './RecipeMetrics.vue'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeSteps from './RecipeSteps.vue'
import Accordion from '../../../shared/ui/Accordion.vue'
import SourceList from '../../../content/SourceList.vue'
const props = defineProps<{ recipe: Recipe; brewProfile?: BrewProfile; favorite: boolean; compact: boolean }>()
defineEmits<{ 'toggle-favorite': [id: string] }>()
const metrics = computed(() => {
  const items: { label: string; value: string; unit: string }[] = []
  if (props.brewProfile) { items.push({ label: 'Café seco', value: String(props.brewProfile.doseG), unit:'g' }); items.push({ label:'Espresso', value:String(props.brewProfile.yieldG), unit:'g' }) }
  else { const prepared = props.recipe.ingredients.find(i => i.id === 'filter-coffee'); if (prepared) items.push({ label: 'Café filtrado', value:String(prepared.quantity.value), unit:prepared.quantity.unit }) }
  const liquid = props.recipe.ingredients.find(i => ['milk','water','condensed-milk'].includes(i.id))
  if (liquid) items.push({ label:liquid.name, value:String(liquid.quantity.value),unit:liquid.quantity.unit })
  return items
})
</script>
<template><div class="recipe-detail-layout"><aside class="detail-art" aria-hidden="true"><span class="art-edition">ALMA DE BARISTA / EL RECETARIO</span><div class="art-composition"><span class="vertical-type">CAFÉ</span><span class="organic-arc" /><RecipeArt :art-key="recipe.artKey" /><span class="art-name">{{ recipe.name }}</span></div><span class="art-caption">Un origen. Mil maneras de compartirlo.</span><span class="art-number">Nº {{ String(recipe.sortOrder).padStart(2,'0') }}</span></aside><div class="detail-reading"><p class="recipe-intro">{{ recipe.summary }}</p><RecipeMetrics :items="metrics" /><RecipeIngredients :ingredients="recipe.ingredients" :vessel="recipe.vessel" /><RecipeSteps :steps="recipe.steps" /><section class="quality-block"><h3 class="section-title">El resultado esperado</h3><ul><li v-for="cue in recipe.qualityCues" :key="cue">{{ cue }}</li></ul><p><strong>Si necesitas ajustar</strong><br>{{ recipe.adjustmentTip }}</p></section><Accordion title="La técnica"><p>{{ recipe.technicalNote }}</p><template v-if="brewProfile"><p><strong>{{ brewProfile.name }}</strong> · proporción 1:{{ new Intl.NumberFormat('es-CL',{maximumFractionDigits:2}).format(brewProfile.yieldG / brewProfile.doseG) }}</p><p>{{ brewProfile.timeS ? `${brewProfile.timeS.min}–${brewProfile.timeS.max} s desde la activación` : 'Tiempo: calibrar por sabor' }} · {{ brewProfile.waterTempC }} °C en el agua de extracción · {{ brewProfile.pressureBar }} bar de referencia.</p><p>{{ brewProfile.note }}</p></template><p v-if="recipe.milkTargetInCupC">Leche: objetivo orientativo de {{ recipe.milkTargetInCupC.min }}–{{ recipe.milkTargetInCupC.max }} °C en taza.</p></Accordion><Accordion title="Los ingredientes y las alternativas"><p v-for="note in recipe.ingredientNotes" :key="note">{{ note }}</p><p>Confirma las etiquetas, las alternativas disponibles y el procedimiento de utensilios con el equipo. La leche sin lactosa conserva las proteínas de la leche.</p><p v-if="recipe.containsDairy">La leche se mide fría antes de texturizar. Usa una jarra adecuada y registra la carga y el remanente según el procedimiento de la barra.</p></Accordion><Accordion title="Las fuentes"><p class="muted">Las cantidades son propuestas editoriales; las fuentes técnicas respaldan el contexto indicado.</p><SourceList :ids="recipe.sourceRefs" /></Accordion><p class="reference-note">{{ recipe.status === 'reference' ? 'Ajustar al café y al equipamiento del establecimiento.' : `Validada por ${recipe.validatedBy} · ${recipe.validatedAt}` }}</p></div></div></template>
