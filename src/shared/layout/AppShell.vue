<script setup lang="ts">
import MobileNavigation from './MobileNavigation.vue'
import DesktopNavigation from './DesktopNavigation.vue'
import BrandLogo from '../ui/BrandLogo.vue'
import { useViewportMode } from '../composables/useViewportMode'
const compact = useViewportMode()
</script>
<template>
  <a class="skip-link" href="#main-content" @click.prevent="($refs.main as HTMLElement).focus()">Ir al contenido</a>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/recetas" class="brand" aria-label="Alma de Barista, ir a Recetas"><BrandLogo /></RouterLink>
      <DesktopNavigation v-if="!compact" />
    </div>
  </header>
  <main id="main-content" ref="main" tabindex="-1"><slot /></main>
  <MobileNavigation v-if="compact" />
  <footer class="site-footer"><span>Hecho para el oficio, pensado para las personas.</span><span>ALMASUR PROVIDENCIA · SURISTA</span></footer>
</template>
