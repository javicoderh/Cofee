export interface ContentBlock { readonly title: string; readonly paragraphs: readonly string[]; readonly bullets?: readonly string[] }
export interface GuideModule { readonly id: string; readonly title: string; readonly summary: string; readonly blocks: readonly ContentBlock[]; readonly relatedRecipeIds: readonly string[]; readonly sourceRefs: readonly string[] }
export interface GlossaryEntry { readonly id: string; readonly term: string; readonly definition: string }
export interface StationField { readonly id: string; readonly label: string; readonly value: string; readonly status: 'pending' | 'confirmed' }
