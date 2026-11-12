<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ArtKey } from '../domain/recipe.types'
const props = defineProps<{ artKey: ArtKey }>()
const art = import.meta.glob('../../../assets/art/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string,string>
const failed = ref(false)
watch(() => props.artKey, () => failed.value = false)
</script>
<template><img :src="art[`../../../assets/art/${failed ? 'espresso-cup' : artKey}.svg`]" width="240" height="200" alt="" aria-hidden="true" @error="failed = true"></template>
