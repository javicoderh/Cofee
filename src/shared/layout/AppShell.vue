<script setup lang="ts">
import MobileNavigation from './MobileNavigation.vue'
import DesktopNavigation from './DesktopNavigation.vue'
import BaseIcon from '../ui/BaseIcon.vue'
import { useViewportMode } from '../composables/useViewportMode'
const compact = useViewportMode()
</script>
<template><a class="skip-link" href="#main-content" @click.prevent="($refs.main as HTMLElement).focus()">Ir al contenido</a><header class="site-header"><div class="header-inner"><RouterLink to="/recetas" class="brand" aria-label="Alma de Barista, ir a Recetas"><span class="brand-symbol"><BaseIcon name="cup" :size="25" /></span><span><strong>Alma de Barista<span class="brand-dot">.</span></strong><small>Guía de barismo · Almasur Providencia</small></span></RouterLink><DesktopNavigation v-if="!compact" /><span v-else class="mobile-brand-mark" aria-hidden="true">✦</span></div></header><main id="main-content" ref="main" tabindex="-1"><slot /></main><MobileNavigation v-if="compact" /><footer class="site-footer"><span>Hecho para el oficio, pensado para las personas.</span><span>ALMASUR PROVIDENCIA · SURISTA</span></footer></template>
