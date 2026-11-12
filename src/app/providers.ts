import type { App } from 'vue'
import { recipes } from '../features/recipes/data/recipes'
import { preparation } from '../features/interview/data/preparation'
import { createBrowserStorage } from '../features/preferences/infrastructure/browserStorage'
import { createPreferences, FAVORITES_KEY, PROGRESS_KEY } from '../features/preferences/application/createPreferences'
import { preferencesKey } from '../features/preferences/application/usePreferences'
export function installProviders(app: App) {
  app.provide(preferencesKey, createPreferences(createBrowserStorage({ [FAVORITES_KEY]: new Set(recipes.map(r => r.id)), [PROGRESS_KEY]: new Set(preparation.map(i => i.id)) })))
}
