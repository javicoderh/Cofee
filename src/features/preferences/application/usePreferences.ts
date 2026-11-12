import { inject, type InjectionKey } from 'vue'
import type { Preferences } from './createPreferences'
export const preferencesKey: InjectionKey<Preferences> = Symbol('preferences')
export function usePreferences() { const value = inject(preferencesKey); if (!value) throw new Error('Falta el proveedor de preferencias'); return value }
