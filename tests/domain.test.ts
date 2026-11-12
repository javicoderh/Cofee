import test from 'node:test'
import assert from 'node:assert/strict'
import { recipes } from '../src/features/recipes/data/recipes.ts'
import { brews } from '../src/features/recipes/data/brews.ts'
import { modules } from '../src/features/guide/data/modules.ts'
import { glossary } from '../src/features/guide/data/glossary.ts'
import { station } from '../src/features/guide/data/station.ts'
import { questions } from '../src/features/interview/data/questions.ts'
import { scenarios } from '../src/features/interview/data/scenarios.ts'
import { preparation } from '../src/features/interview/data/preparation.ts'
import { phrases } from '../src/features/interview/data/phrases.ts'
import { sources } from '../src/content/sources.ts'
import { defaultFilters, selectRecipes } from '../src/features/recipes/domain/recipe.selectors.ts'
import { parseSelection, createBrowserStorage } from '../src/features/preferences/infrastructure/browserStorage.ts'

test('el inventario editorial está completo y las relaciones se resuelven', () => {
  assert.deepEqual([recipes.length,brews.length,modules.length,glossary.length,questions.length,scenarios.length,preparation.length,phrases.length,station.length], [20,5,10,12,18,5,12,8,9])
  for (const group of [recipes,brews,modules,glossary,questions,scenarios,preparation,phrases,station,sources]) assert.equal(new Set(group.map(x => x.id)).size,group.length)
  const sourceIds = new Set(sources.map(s => s.id))
  const brewIds = new Set(brews.map(b => b.id))
  for (const recipe of recipes) {
    assert.equal(recipe.status,'reference')
    assert.ok(recipe.steps.length >= 4)
    assert.equal(recipe.qualityCues.length,2)
    assert.ok(recipe.ingredients.length && recipe.technicalNote && recipe.adjustmentTip)
    assert.ok(!recipe.brewProfileId || brewIds.has(recipe.brewProfileId))
    assert.ok(recipe.sourceRefs.every(id => sourceIds.has(id)))
    const profile = brews.find(b => b.id === recipe.brewProfileId)
    if (profile) assert.equal(recipe.ingredients.find(i => i.id === 'espresso')?.quantity.value,profile.yieldG)
  }
  for (const module of modules) {
    assert.ok(module.relatedRecipeIds.every(id => recipes.some(r => r.id === id)))
    assert.ok(module.sourceRefs.every(id => sourceIds.has(id)))
  }
  assert.ok(questions.every(q => modules.some(m => m.id === q.relatedGuideId)))
})

test('la búsqueda reconoce alias, tildes, mayúsculas y varias palabras', () => {
  for (const query of ['capuccino','capuchino','cappuccino']) assert.equal(selectRecipes(recipes,query,defaultFilters())[0]?.id,'cappuccino')
  for (const query of ['mocaccino','moka','mocha']) assert.equal(selectRecipes(recipes,query,defaultFilters())[0]?.id,'mocha')
  assert.equal(selectRecipes(recipes,'  CAFÉ   FRÍO ',defaultFilters())[0]?.id,'iced-latte')
  assert.equal(selectRecipes(recipes,'doble',defaultFilters())[0]?.id,'doppio')
  assert.equal(selectRecipes(recipes,'macchiatto',defaultFilters())[0]?.id,'macchiato')
  assert.equal(selectRecipes(recipes,'leche chocolate',defaultFilters())[0]?.id,'mocha')
  assert.deepEqual(selectRecipes(recipes,'no-existe',defaultFilters()),[])
})

test('los filtros se intersectan y distinguen lácteos de temperatura', () => {
  assert.deepEqual(selectRecipes(recipes,'',{category:'all',temperature:'cold',dairy:'without'}).map(r => r.id),['shakerato'])
  assert.deepEqual(selectRecipes(recipes,'',{category:'dulces',temperature:'cold',dairy:'with'}).map(r => r.id),['affogato'])
  assert.equal(selectRecipes(recipes,'leche',{category:'espresso',temperature:'all',dairy:'all'}).length,0)
  assert.equal(selectRecipes(recipes,'',defaultFilters()).length,20)
})

test('la persistencia descarta versiones y formatos inválidos y limpia los IDs', () => {
  const valid = new Set(['cortado','latte'])
  for (const value of [null,'{','null','[]','{"version":2,"ids":["latte"]}','{"version":1,"ids":[1]}']) assert.deepEqual(parseSelection(value,valid),[])
  assert.deepEqual(parseSelection('{"version":1,"ids":["latte","latte","no-existe","cortado"]}',valid),['latte','cortado'])
})

test('las selecciones continúan en memoria si el navegador bloquea el almacenamiento', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis,'localStorage')
  Object.defineProperty(globalThis,'localStorage',{configurable:true,get(){throw new Error('Restringido')}})
  try {
    const storage = createBrowserStorage({ test:new Set(['cortado']) })
    assert.deepEqual(storage.read('test'),[])
    assert.equal(storage.restricted,true)
    assert.equal(storage.write('test',['cortado']).persisted,false)
    assert.deepEqual(storage.read('test'),['cortado'])
  } finally { if (original) Object.defineProperty(globalThis,'localStorage',original); else Reflect.deleteProperty(globalThis,'localStorage') }
})
