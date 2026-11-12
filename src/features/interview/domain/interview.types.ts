export interface InterviewQuestion { readonly id: string; readonly category: 'tecnica' | 'producto' | 'servicio' | 'operacion'; readonly question: string; readonly answer: string; readonly showInPractice: readonly string[]; readonly relatedGuideId: string }
export interface Scenario { readonly id: string; readonly title: string; readonly situation: string; readonly actions: readonly string[]; readonly suggestedPhrase: string }
export interface PreparationItem { readonly id: string; readonly label: string }
export interface ServicePhrase { readonly id: string; readonly spanish: string; readonly english: string }
