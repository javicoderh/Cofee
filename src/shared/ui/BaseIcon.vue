<script setup lang="ts">
defineProps<{ name: string; size?: number }>()
const paths: Record<string,string> = {
  cup:'M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h2a3 3 0 0 1 0 6h-2M3 23h16M7 2v2m5-2v2',
  book:'M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1m0-16c4-3 8-2 10-1v16c-4-2-7-1-10 1V5Z',
  chat:'M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9l-6 4V5a2 2 0 0 1 1-2ZM7 8h10M7 13h7',
  heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  search:'m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
  filter:'M4 7h16M4 17h16M8 4v6m8 4v6',
  close:'m6 6 12 12M6 18 18 6', arrow:'M4 12h16m-6-6 6 6-6 6',
  leaf:'M20 3C8 1 1 8 5 16c8 5 16-2 15-13ZM5 20 17 6', check:'m5 12 4 4L20 5', chevron:'m7 10 5 5 5-5', sun:'M12 3V1m0 22v-2M3 12H1m22 0h-2M5 5 3 3m16 16-2-2M5 19l-2 2M19 5l2-2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
}
</script>
<template><svg :width="size ?? 22" :height="size ?? 22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name] ?? paths.cup" /></svg></template>
