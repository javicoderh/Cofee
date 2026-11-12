<script setup lang="ts">
import type { InterviewQuestion } from '../domain/interview.types'
import Accordion from '../../../shared/ui/Accordion.vue'
defineProps<{ question: InterviewQuestion }>()
defineEmits<{ 'open-guide': [id: string] }>()
</script>
<template><article class="prose detail-reading"><p class="lead">Piensa cómo lo explicarías desde tu propia experiencia.</p><Accordion title="Ver una respuesta orientativa"><p>{{ question.answer }}</p><h3 class="section-title">Qué conviene demostrar</h3><ul><li v-for="point in question.showInPractice" :key="point">{{ point }}</li></ul></Accordion><div class="study-note"><span class="eyebrow">PARA SEGUIR APRENDIENDO</span><p>Conecta la respuesta con la práctica y repasa sus fundamentos.</p><button class="button primary" type="button" @click="$emit('open-guide',question.relatedGuideId)">Consultar la guía ↗</button></div><p class="muted">Preparación orientativa. El equipo del hotel define su proceso de selección.</p></article></template>
