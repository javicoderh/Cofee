<script setup lang="ts">import BaseIcon from '../ui/BaseIcon.vue'; import { destinations } from './navigation'</script>
<template><nav class="desktop-nav" aria-label="Navegación principal"><RouterLink v-for="item in destinations" :key="item.to" :to="item.to"><BaseIcon :name="item.icon" :size="18" />{{ item.label }}</RouterLink></nav></template>
