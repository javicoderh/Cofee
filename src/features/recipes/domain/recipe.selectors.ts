import type { Recipe, RecipeCategory } from './recipe.types.ts'
import { normalizeSearch } from '../../../shared/lib/normalizeSearch.ts'
export interface RecipeFilter { category: RecipeCategory | 'all'; temperature: 'all' | 'hot' | 'cold'; dairy: 'all' | 'with' | 'without' }
export const defaultFilters = (): RecipeFilter => ({ category: 'all', temperature: 'all', dairy: 'all' })
export function selectRecipes(recipes: readonly Recipe[], query: string, filters: RecipeFilter) {
  const normalized = normalizeSearch(query)
  const terms = normalized.split(' ').filter(Boolean)
  const score = (r: Recipe) => normalizeSearch(r.name) === normalized ? 0 : normalizeSearch(r.name).startsWith(normalized) ? 1 : 2
  return recipes.filter(r => {
    const index = normalizeSearch([r.name, ...r.aliases, ...r.ingredients.map(i => i.name)].join(' '))
    return terms.every(t => index.includes(t)) && (filters.category === 'all' || r.category === filters.category)
      && (filters.temperature === 'all' || r.temperature === filters.temperature)
      && (filters.dairy === 'all' || r.containsDairy === (filters.dairy === 'with'))
  }).sort((a,b) => score(a)-score(b) || a.sortOrder-b.sortOrder)
}
export function recipeComposition(recipe: Recipe) {
  return recipe.ingredients.map(i => `${i.quantity.value} ${i.quantity.unit} ${i.name.toLowerCase().replace(' preparado','')}`).join(' · ')
}
