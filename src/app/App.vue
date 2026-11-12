<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppShell from '../shared/layout/AppShell.vue'
import OverlayHost from './overlays/OverlayHost.vue'
import { usePreferences } from '../features/preferences/application/usePreferences'
const route = useRoute(), prefs = usePreferences()
const showNotice = ref(false)
let noticed = false
const positions = new Map<string,number>()
watch(prefs.storageMode, mode => { if (mode === 'session' && !noticed) { noticed = true; showNotice.value = true } }, { immediate:true })
watch(() => route.path, async (path,previous) => {
  positions.set(previous,window.scrollY)
  await nextTick()
  if (!route.query.panel) { window.scrollTo(0,positions.get(path) ?? 0); document.querySelector<HTMLElement>('[data-page-title]')?.focus({preventScroll:true}) }
})
</script>
<template><AppShell><RouterView v-slot="{ Component, route: viewRoute }"><KeepAlive><component :is="Component" :key="String(viewRoute.name)" /></KeepAlive></RouterView><div v-if="showNotice" class="storage-notice" role="status"><span>Tus selecciones se conservarán durante esta sesión.</span><button type="button" aria-label="Cerrar aviso" @click="showNotice = false">✕</button></div></AppShell><OverlayHost /></template>
