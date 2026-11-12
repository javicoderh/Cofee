import type { SelectionStorage } from '../domain/storage.port'
export function parseSelection(raw: string | null, validIds: ReadonlySet<string>): string[] {
  try {
    const data: unknown = JSON.parse(raw ?? 'null')
    if (!data || typeof data !== 'object' || !('version' in data) || data.version !== 1 || !('ids' in data) || !Array.isArray(data.ids) || !data.ids.every(id => typeof id === 'string')) return []
    return [...new Set(data.ids.filter((id: string) => validIds.has(id)))]
  } catch { return [] }
}
export function createBrowserStorage(validByKey: Record<string, ReadonlySet<string>>): SelectionStorage {
  const memory = new Map<string, readonly string[]>()
  let restricted = false
  return {
    get restricted() { return restricted },
    read(key) {
      try { const ids = parseSelection(localStorage.getItem(key), validByKey[key] ?? new Set()); memory.set(key, ids); return ids }
      catch { restricted = true; return memory.get(key) ?? [] }
    },
    write(key, ids) {
      memory.set(key, [...ids])
      try { localStorage.setItem(key, JSON.stringify({ version: 1, ids })); return { persisted: true } }
      catch { restricted = true; return { persisted: false } }
    }
  }
}
