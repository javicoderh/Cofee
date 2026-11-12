<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import BaseIcon from './BaseIcon.vue'
const props = defineProps<{ modelValue: string; label: string; resultCount: number }>()
const emit = defineEmits<{ 'update:modelValue': [value: string]; submit: [] }>()
const input = ref<HTMLInputElement>()
const announced = ref(props.resultCount)
let timer: ReturnType<typeof setTimeout>
watch(() => props.resultCount, count => { clearTimeout(timer); timer = setTimeout(() => announced.value = count, 200) })
onUnmounted(() => clearTimeout(timer))
function clear() { emit('update:modelValue',''); input.value?.focus() }
function submit() { input.value?.blur(); emit('submit') }
</script>
<template><form class="search" role="search" @submit.prevent="submit"><BaseIcon name="search" /><label class="sr-only" for="recipe-search">{{ label }}</label><input id="recipe-search" ref="input" type="search" inputmode="search" enterkeyhint="search" :value="modelValue" placeholder="¿Qué café vas a preparar?" autocomplete="off" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"><button v-if="modelValue" type="button" aria-label="Limpiar búsqueda" @click="clear"><BaseIcon name="close" /></button><span class="sr-only" role="status" aria-live="polite">{{ announced }} recetas encontradas</span></form></template>
<style scoped>.search{display:flex;align-items:center;gap:12px;background:var(--color-surface);border:1px solid var(--color-muted);border-radius:8px;padding:0 16px;min-height:52px;flex:1}.search>svg{color:var(--color-caramel);flex:none}input{border:0;background:none;min-width:0;flex:1;width:100%;height:50px;outline-offset:-4px}button{width:48px;min-height:48px;display:grid;place-items:center}input::-webkit-search-cancel-button{display:none}</style>
