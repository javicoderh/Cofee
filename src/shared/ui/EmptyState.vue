<script setup lang="ts">import BaseIcon from './BaseIcon.vue'; defineProps<{ title: string; description: string }>()</script>
<template><div class="empty"><BaseIcon name="cup" :size="42" /><h2>{{ title }}</h2><p>{{ description }}</p><slot /></div></template>
<style scoped>.empty{text-align:center;padding:64px 20px;color:var(--color-muted)}.empty svg{color:var(--color-caramel)}h2{color:var(--color-ink);font-size:28px;margin:20px 0 12px}</style>
