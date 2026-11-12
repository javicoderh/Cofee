import type { RecipeCategory } from '../domain/recipe.types'
export const categories: readonly { id: RecipeCategory | 'all'; label: string; symbol: string }[] = [
  { id: 'all', label: 'Todas', symbol: '✦' }, { id: 'espresso', label: 'Espresso', symbol: '01' },
  { id: 'con-agua', label: 'Con agua', symbol: '02' }, { id: 'con-leche', label: 'Con leche', symbol: '03' },
  { id: 'dulces', label: 'Dulces y postres', symbol: '04' }, { id: 'frios', label: 'Fríos', symbol: '05' }
]
