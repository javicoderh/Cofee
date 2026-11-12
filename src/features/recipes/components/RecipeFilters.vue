<script setup lang="ts">
import type { RecipeFilter } from '../domain/recipe.selectors'
const props = defineProps<{ modelValue: RecipeFilter }>()
const emit = defineEmits<{ 'update:modelValue': [value: RecipeFilter] }>()
function set(key: 'temperature' | 'dairy', value: string) { emit('update:modelValue', { ...props.modelValue, [key]: value } as RecipeFilter) }
const temperatures = [{ id:'all', label:'Todas' }, { id:'hot', label:'Calientes' }, { id:'cold', label:'Frías' }]
const dairy = [{ id:'all', label:'Todas' }, { id:'with', label:'Con leche o derivados' }, { id:'without', label:'Sin leche en la receta base' }]
</script>
<template><div class="filter-groups"><fieldset><legend>Temperatura</legend><div class="options"><button v-for="t in temperatures" :key="t.id" type="button" :aria-pressed="modelValue.temperature === t.id" @click="set('temperature',t.id)">{{ t.label }}</button></div></fieldset><fieldset><legend>Composición</legend><div class="options"><button v-for="d in dairy" :key="d.id" type="button" :aria-pressed="modelValue.dairy === d.id" @click="set('dairy',d.id)">{{ d.label }}</button></div></fieldset></div></template>
<style scoped>.filter-groups{display:flex;flex-wrap:wrap;gap:16px 32px}fieldset{border:0;padding:0;margin:0;min-width:0}legend{font-size:14px;margin-bottom:8px;color:var(--color-muted)}.options{display:flex;gap:8px;flex-wrap:wrap}button{padding:8px 12px;min-height:48px;border:1px solid var(--color-muted);border-radius:8px;font-size:14px}button[aria-pressed=true]{background:var(--color-forest);border-color:var(--color-forest);color:var(--color-surface)}</style>
