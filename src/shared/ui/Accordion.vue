<script setup lang="ts">
import { ref, useId } from 'vue'
import BaseIcon from './BaseIcon.vue'
defineProps<{ title: string }>()
const expanded = ref(false)
const id = useId()
</script>
<template><section class="accordion"><h3><button type="button" :aria-expanded="expanded" :aria-controls="id" @click="expanded = !expanded">{{ title }}<BaseIcon name="chevron" :class="{ rotated: expanded }" /></button></h3><div v-show="expanded" :id="id" class="accordion-content"><slot /></div></section></template>
<style scoped>
.accordion{border-bottom:1px solid var(--color-line)}h3{margin:0;font:inherit}button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;text-align:left;padding:20px 0;font-weight:600}svg{flex:none;transition:transform 160ms}.rotated{transform:rotate(180deg)}.accordion-content{padding:0 0 24px;animation:appear 160ms ease}
</style>
