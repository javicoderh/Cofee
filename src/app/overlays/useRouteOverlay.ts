import { useRoute, useRouter } from 'vue-router'
const openings = new Set<string>()
export function useRouteOverlay() {
  const route = useRoute()
  const router = useRouter()
  function open(panel: 'receta' | 'tema' | 'pregunta' | 'filtros', id?: string) {
    const query = { ...route.query, panel, ...(id ? { id } : {}) }
    if (!id) delete query.id
    if (route.query.panel) return router.replace({ path: route.path, query, state: { almaOverlayKey: window.history.state.almaOverlayKey ?? null } })
    const key = `${Date.now()}-${Math.random()}`
    openings.add(key)
    return router.push({ path: route.path, query, state: { almaOverlayKey: key } })
  }
  function close() {
    const key = window.history.state.almaOverlayKey
    if (key && openings.has(key)) router.back()
    else { const query = { ...route.query }; delete query.panel; delete query.id; void router.replace({ path: route.path, query }) }
  }
  return { open, close }
}
