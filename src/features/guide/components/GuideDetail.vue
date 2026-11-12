<script setup lang="ts">
import type { GuideModule } from '../domain/guide.types'
import Accordion from '../../../shared/ui/Accordion.vue'
import SourceList from '../../../content/SourceList.vue'
import { recipes } from '../../recipes'
defineProps<{ module: GuideModule }>()
defineEmits<{ 'open-recipe': [id: string] }>()
</script>
<template>
  <article class="prose detail-reading guide-detail">
    <p class="lead">{{ module.summary }}</p>
    <div class="guide-content-grid">
      <section v-for="(block,index) in module.blocks" :key="index" :class="['guide-block', { 'practice-block': index > 0 }]" :data-reading-anchor="`guide-${index}`">
        <h3 v-if="block.title" class="section-title">{{ block.title }}</h3>
        <p v-for="p in block.paragraphs" :key="p">{{ p }}</p>
        <ul v-if="block.bullets"><li v-for="bullet in block.bullets" :key="bullet">{{ bullet }}</li></ul>
      </section>
    </div>
    <div class="guide-resources">
      <section>
        <h3 class="section-title">Llévalo a la taza</h3>
        <div class="related-links"><button v-for="id in module.relatedRecipeIds" :key="id" type="button" @click="$emit('open-recipe',id)">{{ recipes.find(r => r.id === id)?.name }} ↗</button></div>
      </section>
      <Accordion title="Las fuentes"><SourceList :ids="module.sourceRefs" /></Accordion>
    </div>
  </article>
</template>
