export type RecipeCategory = 'espresso' | 'con-agua' | 'con-leche' | 'dulces' | 'frios'
export type ArtKey = 'espresso-cup' | 'short-glass' | 'cappuccino-cup' | 'latte-glass' | 'iced-glass' | 'affogato-cup' | 'filter-method' | 'milk-pitcher'
export interface Quantity { readonly value: number; readonly unit: 'g' | 'ml' | 'unidad' }
export interface Ingredient { readonly id: string; readonly name: string; readonly quantity: Quantity; readonly note?: string }
export interface BrewProfile { readonly id: string; readonly name: string; readonly doseG: number; readonly yieldG: number; readonly timeS: { readonly min: number; readonly max: number } | null; readonly waterTempC: number; readonly pressureBar: number; readonly note: string }
export interface Recipe {
  readonly id: string; readonly name: string; readonly aliases: readonly string[]; readonly category: RecipeCategory; readonly sortOrder: number
  readonly temperature: 'hot' | 'cold'; readonly containsDairy: boolean; readonly summary: string; readonly artKey: ArtKey
  readonly status: 'reference' | 'house-validated'; readonly validatedBy?: string; readonly validatedAt?: string
  readonly brewProfileId: string | null; readonly vessel: { readonly name: string; readonly capacityMl: number }
  readonly ingredients: readonly Ingredient[]; readonly steps: readonly string[]; readonly qualityCues: readonly string[]
  readonly adjustmentTip: string; readonly milkTargetInCupC?: { readonly min: number; readonly max: number }
  readonly ingredientNotes: readonly string[]; readonly technicalNote: string; readonly sourceRefs: readonly string[]
}
