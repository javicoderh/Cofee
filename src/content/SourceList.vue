<script setup lang="ts">
import { computed } from 'vue'
import { sources } from './sources'
const props = defineProps<{ ids?: readonly string[] }>()
const selected = computed(() => props.ids ? sources.filter(s => props.ids!.includes(s.id)) : sources)
</script>
<template><ul class="source-list"><li v-for="source in selected" :key="source.id"><span class="source-code">{{ source.id }}</span><div><strong>{{ source.title }}</strong><p>{{ source.scope }}</p><a v-for="link in source.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a><small v-if="source.localFile">Documento: {{ source.localFile }}</small><small>Consulta editorial: {{ source.consultedAt }}</small></div></li></ul></template>
<style scoped>.source-list{list-style:none;padding:0;margin:0}.source-list li{display:flex;gap:12px;padding:18px 0;border-bottom:1px solid var(--color-line)}.source-code{color:var(--color-caramel);font-size:12px;padding-top:3px;flex:none}strong{font-size:15px}p{font-size:14px;color:var(--color-muted);margin:6px 0}a,small{display:block;font-size:14px;margin:8px 0;overflow-wrap:anywhere}a{text-decoration:underline;color:var(--color-forest)}small{color:var(--color-muted)}</style>
