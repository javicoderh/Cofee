import { onMounted, onUnmounted, ref } from 'vue'
export function useViewportMode() {
  const query = window.matchMedia('(max-width: 767px), (pointer: coarse) and (max-width: 1023px)')
  const compact = ref(query.matches)
  const update = () => { compact.value = query.matches }
  onMounted(() => query.addEventListener('change', update))
  onUnmounted(() => query.removeEventListener('change', update))
  return compact
}
