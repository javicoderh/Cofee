import { onMounted, onUnmounted, ref } from 'vue'
export function useReducedMotion() {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const reduced = ref(media.matches)
  const update = () => reduced.value = media.matches
  onMounted(() => media.addEventListener('change',update))
  onUnmounted(() => media.removeEventListener('change',update))
  return reduced
}
