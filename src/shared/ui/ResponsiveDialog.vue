<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'
import { useReducedMotion } from '../composables/useReducedMotion'
import { useBodyScrollLock } from '../composables/useBodyScrollLock'
const props = withDefaults(defineProps<{ open: boolean; presentation: 'detail' | 'sheet'; titleId: string; closeLabel?: string; initialFocusId?: string }>(), { closeLabel: 'Cerrar detalle' })
const emit = defineEmits<{ 'request-close': []; 'after-close': [] }>()
const dialog = ref<HTMLDialogElement>()
const closing = ref(false)
let trigger: HTMLElement | null = null
let timer: ReturnType<typeof setTimeout> | undefined
const reducedMotion = useReducedMotion()
const bodyScroll = useBodyScrollLock()
let outsideStart = false
function restore() {
  if (!bodyScroll.isLocked()) return
  bodyScroll.unlock()
  const target = trigger?.isConnected ? trigger : document.querySelector<HTMLElement>('[data-page-title]')
  target?.focus({ preventScroll: true })
}
function finish() { clearTimeout(timer); dialog.value?.close(); closing.value = false; restore(); emit('after-close') }
watch(() => props.open, async open => {
  clearTimeout(timer)
  if (open) {
    closing.value = false
    if (!bodyScroll.isLocked()) { trigger = document.activeElement as HTMLElement; bodyScroll.lock() }
    await nextTick()
    if (!props.open) return
    if (!dialog.value?.open) dialog.value?.showModal()
    document.getElementById(props.initialFocusId ?? props.titleId)?.focus({ preventScroll: true })
  } else if (dialog.value?.open) {
    if (reducedMotion.value) finish()
    else { closing.value = true; timer = setTimeout(finish, 240) }
  }
}, { immediate: true, flush: 'post' })
function outside(event: PointerEvent) {
  const rect = dialog.value?.getBoundingClientRect()
  return !!rect && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
}
function scrollToTop() { const el = dialog.value?.querySelector('.dialog-scroll'); if (el) el.scrollTop = 0 }
function onPointerUp(event: PointerEvent) { if (outsideStart && outside(event)) emit('request-close'); outsideStart = false }
function onTransitionEnd(event: TransitionEvent) { if (closing.value && event.target === dialog.value && event.propertyName === 'transform') finish() }
defineExpose({ scrollToTop })
onBeforeUnmount(() => { clearTimeout(timer); dialog.value?.close(); restore() })
</script>
<template><dialog ref="dialog" :class="['responsive-dialog', presentation, { 'is-closing': closing }]" :aria-labelledby="titleId" @cancel.prevent="emit('request-close')" @pointerdown="outsideStart = outside($event)" @pointerup="onPointerUp" @transitionend="onTransitionEnd"><div class="dialog-scroll"><header class="dialog-header"><slot name="header" /><button type="button" class="close-button" :aria-label="closeLabel" @click="emit('request-close')"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg></button></header><slot /></div><footer v-if="$slots.footer" class="dialog-footer"><slot name="footer" /></footer></dialog></template>
