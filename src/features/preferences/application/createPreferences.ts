import { readonly, ref } from 'vue'
import type { SelectionStorage } from '../domain/storage.port'
export const FAVORITES_KEY = 'alma-barista:favorites:v1'
export const PROGRESS_KEY = 'alma-barista:interview-progress:v1'
export function createPreferences(storage: SelectionStorage) {
  const favoriteIds = ref([...storage.read(FAVORITES_KEY)])
  const preparedItemIds = ref([...storage.read(PROGRESS_KEY)])
  const storageMode = ref<'persistent' | 'session'>(storage.restricted ? 'session' : 'persistent')
  function toggle(key: string, current: typeof favoriteIds, id: string) {
    current.value = current.value.includes(id) ? current.value.filter(x => x !== id) : [...current.value, id]
    if (!storage.write(key, current.value).persisted) storageMode.value = 'session'
  }
  return { favoriteIds: readonly(favoriteIds), preparedItemIds: readonly(preparedItemIds), storageMode: readonly(storageMode), isFavorite: (id: string) => favoriteIds.value.includes(id), toggleFavorite: (id: string) => toggle(FAVORITES_KEY, favoriteIds, id), togglePreparedItem: (id: string) => toggle(PROGRESS_KEY, preparedItemIds, id) }
}
export type Preferences = ReturnType<typeof createPreferences>
