<script setup lang="ts">
import type { Recipe } from '../domain/recipe.types'
import RecipeArt from './RecipeArt.vue'
import BaseIcon from '../../../shared/ui/BaseIcon.vue'
import { recipeComposition } from '../domain/recipe.selectors'
defineProps<{ recipe: Recipe; favorite: boolean }>()
defineEmits<{ open: [id: string]; 'toggle-favorite': [id: string] }>()
</script>
<template><article class="recipe-row"><button class="row-open" type="button" aria-haspopup="dialog" :aria-label="`Cómo preparar ${recipe.name}`" @click="$emit('open',recipe.id)"><span class="row-art"><RecipeArt :art-key="recipe.artKey" /></span><span><strong>{{ recipe.name }}</strong><span class="row-summary">{{ recipeComposition(recipe) }}</span></span></button><button type="button" class="favorite-button" :aria-label="`${favorite ? 'Quitar' : 'Guardar'} ${recipe.name}${favorite ? ' de favoritos' : ''}`" :aria-pressed="favorite" @click="$emit('toggle-favorite',recipe.id)"><BaseIcon name="heart" :class="{ filled: favorite }" /></button></article></template>
<style scoped>.recipe-row{display:flex;align-items:center;gap:4px;border-bottom:1px solid var(--color-line);padding:8px 0;min-height:91px}.row-open{display:flex;align-items:center;text-align:left;gap:12px;flex:1;min-width:0;padding:4px 0}.row-art{width:56px;height:64px;flex:none;display:grid;place-items:center;background:#ebe5d861;border-radius:16px}.row-art img{width:64px;height:64px}.row-open strong{display:block;font:600 20px var(--font-editorial);line-height:1.3}.row-summary{display:block;font-size:14px;color:var(--color-muted);margin-top:5px;line-height:1.5}.filled{fill:var(--color-forest);color:var(--color-forest)}</style>
