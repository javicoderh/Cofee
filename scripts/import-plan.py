"""Import the user-provided editorial content without rewriting its meaning."""
from pathlib import Path
import re, json, shutil

root = Path(__file__).resolve().parents[1]
plan_path = root.parent / 'PLAN_ALMA_DE_BARISTA.md'
text = plan_path.read_text(encoding='utf-8')

def write(path, content):
    target = root / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding='utf-8')

def module(path, symbol, data, typename, typepath):
    write(path, f"import type {{ {typename} }} from '{typepath}'\nexport const {symbol} = " + json.dumps(data, ensure_ascii=False, indent=2) + f' satisfies readonly {typename}[]\n')

def field(block, label, last=False):
    found = re.findall(r'\*\*'+re.escape(label)+r':\*\*\s*(.*?)(?=\n|$)', block)
    if not found: raise ValueError(label)
    return found[-1 if last else 0].strip().rstrip(' .')

profiles=[]
for row in re.findall(r'^\| `(?:espresso-simple|espresso-doble|ristretto-doble|lungo-doble|ristretto-simple)`.*$', text, re.M):
    cols=[c.strip().strip('`') for c in row.split('|')[1:-1]]
    profiles.append(dict(id=cols[0], name=cols[1], doseG=int(re.search(r'\d+',cols[2])[0]), yieldG=int(re.search(r'\d+',cols[3])[0]), timeS={'min':25,'max':30} if '25' in cols[4] else None, waterTempC=93,pressureBar=9,note='Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión.'))
module('src/features/recipes/data/brews.ts','brews',profiles,'BrewProfile','../domain/recipe.types')

ingredient_specs=[
 [('espresso',18,'g')], [('espresso',36,'g')], [('espresso',24,'g')], [('espresso',54,'g')],
 [('espresso',36,'g'),('water',150,'ml')], [('water',100,'ml'),('espresso',36,'g')],
 [('espresso',18,'g'),('milk',10,'ml')], [('espresso',36,'g'),('milk',40,'ml')],
 [('espresso',14,'g'),('milk',60,'ml')], [('espresso',36,'g'),('milk',110,'ml')],
 [('espresso',18,'g'),('milk',100,'ml')], [('espresso',36,'g'),('milk',190,'ml')],
 [('milk',180,'ml'),('espresso',18,'g')], [('filter-coffee',100,'ml'),('milk',100,'ml')],
 [('espresso',36,'g'),('chocolate',20,'g'),('milk',150,'ml')],
 [('condensed-milk',25,'ml'),('espresso',18,'g')], [('espresso',36,'g'),('water',40,'ml'),('cream',25,'g')],
 [('ice-cream',60,'g'),('espresso',18,'g')], [('ice',120,'g'),('milk',150,'ml'),('espresso',36,'g')],
 [('espresso',36,'g'),('ice',120,'g'),('sugar',8,'g')]]
names={'espresso':'Espresso preparado','water':'Agua caliente','milk':'Leche','filter-coffee':'Café filtrado recién preparado','chocolate':'Salsa de chocolate','condensed-milk':'Leche condensada','cream':'Crema batida','ice-cream':'Helado de vainilla','ice':'Hielo','sugar':'Azúcar'}
aliases={'espresso-simple':['expreso','espresso'],'doppio':['doble','espresso doble'],'cappuccino':['capuccino','capuchino','cappuccino'],'mocha':['mocaccino','moka','mocha'],'iced-latte':['cafe frio','iced latte'],'macchiato':['macchiatto','macchiato'],'cortado':['cafe cortado','cortado doble']}
cats={'Espresso':'espresso','Con agua':'con-agua','Con leche':'con-leche','Dulces y postres':'dulces','Fríos':'frios'}
recipes=[]
for match in re.finditer(r'^### (\d{2})\. ([^\n]+)\n(.*?)(?=\n### |\n---|\Z)',text.split('## Anexo A.')[1].split('## Anexo B.')[0],re.M|re.S):
    n=int(match[1]); b=match[3]; rid=re.search(r'\*\*ID:\*\* `([^`]+)`',b)[1]
    cat=re.search(r'\*\*Categoría:\*\* (.*?) ·',b)[1]
    art=re.search(r'\*\*Arte:\*\* ([\w-]+)',b)[1]
    profile=re.search(r'\*\*Perfil:\*\* ([\w-]+)',b)[1]
    vessel=field(b,'Recipiente'); cap=int(re.search(r'(\d+) ml',vessel)[1])
    steps=re.split(r'\d\)\s*',field(b,'Pasos'))[1:]
    ingredients=[]
    for iid,val,unit in ingredient_specs[n-1]:
        item={'id':iid,'name':names[iid],'quantity':{'value':val,'unit':unit}}
        if iid=='milk': item['note']='Medida fría antes de texturizar' if n<=15 else 'Medida fría'
        ingredients.append(item)
    r=dict(id=rid,name=match[2].strip(),aliases=aliases.get(rid,[]),category=cats[cat],sortOrder=n,temperature='cold' if n in [18,19,20] else 'hot',containsDairy=7<=n<=19,summary=field(b,'Descripción')+'.',artKey=art,status='reference',brewProfileId=None if profile=='null' else profile,vessel={'name':re.sub(r' de \d+ ml.*','',vessel).capitalize(),'capacityMl':cap},ingredients=ingredients,steps=[s.strip().rstrip('.')+'.' for s in steps],qualityCues=[s.strip().capitalize()+'.' for s in field(b,'Calidad').split(';')],adjustmentTip=field(b,'Ajuste')+'.',ingredientNotes=[field(b,'Ingredientes',True)+'.'],technicalNote=field(b,'Nota técnica')+'.',sourceRefs=re.findall(r'[EF]\d{2}',field(b,'Fuentes')))
    if 7<=n<=15:r['milkTargetInCupC']={'min':55,'max':65}
    recipes.append(r)
assert len(recipes)==20
module('src/features/recipes/data/recipes.ts','recipes',recipes,'Recipe','../domain/recipe.types')

guides=[]
for m in re.finditer(r'^### G\d{2} · `([^`]+)` · ([^\n]+)\n(.*?)(?=\n### |\Z)',text,re.M|re.S):
    b=m[3]; content=re.search(r'\*\*Contenido:\*\* (.*?)(?=\*\*Acciones:)',b,re.S)[1].strip()
    actions=field(b,'Acciones').split(';')
    guides.append(dict(id=m[1],title=m[2],summary=field(b,'Resumen')+'.',blocks=[{'title':'','paragraphs':[p.strip() for p in content.split('\n\n') if p.strip()]},{'title':'En la práctica','paragraphs':[],'bullets':[a.strip().capitalize() for a in actions]}],relatedRecipeIds=[s.strip() for s in field(b,'Relacionadas').split(',')],sourceRefs=list(dict.fromkeys(re.findall(r'\b[EF]\d{2}\b',b)))))
assert len(guides)==10
module('src/features/guide/data/modules.ts','modules',guides,'GuideModule','../domain/guide.types')
gloss=[]
section=text.split('### B.1. Glosario')[1].split('## Anexo C')[0]
for row in re.findall(r'^\| `.*$',section,re.M):
    c=[x.strip().strip('`') for x in row.split('|')[1:-1]]
    gloss.append(dict(id=c[0],term=c[1],definition=c[2]+'.'))
module('src/features/guide/data/glossary.ts','glossary',gloss,'GlossaryEntry','../domain/guide.types')
station=[]
for row in re.findall(r'^\| .*$',text.split('### 3.2.')[1].split('### 3.3.')[0],re.M)[1:]:
    c=[x.strip() for x in row.split('|')[1:-1]]
    station.append(dict(id=f'station-{len(station)+1}',label=c[0],value=c[1],status='pending'))
module('src/features/guide/data/station.ts','station',station,'StationField','../domain/guide.types')

questions=[]
for m in re.finditer(r'^#### P\d{2} · `([^`]+)` · ([^\n]+)\n(.*?)(?=\n#### |\n### |\Z)',text,re.M|re.S):
    b=m[3];questions.append(dict(id=m[1],question=m[2],category=re.search(r'\*\*Categoría:\*\* (\w+)',b)[1],relatedGuideId=re.search(r'\*\*Guía relacionada:\*\* ([\w-]+)',b)[1],answer=field(b,'Respuesta')+'.',showInPractice=[s.strip().capitalize() for s in field(b,'Demostrar').split(';')]))
assert len(questions)==18
module('src/features/interview/data/questions.ts','questions',questions,'InterviewQuestion','../domain/interview.types')
scenarios=[]
for m in re.finditer(r'\*\*(S\d{2}) · (.*?)\*\*\s*\nSituación: (.*?)\s*\nAcciones: (.*?)\s*\nFrase(?: de coordinación)?: «(.*?)»',text,re.S):
    scenarios.append(dict(id=m[1].lower(),title=m[2],situation=m[3],actions=[s.strip().capitalize() for s in m[4].rstrip('. ').split(';')],suggestedPhrase=m[5]))
module('src/features/interview/data/scenarios.ts','scenarios',scenarios,'Scenario','../domain/interview.types')
prep=text.split('### C.4.')[1].split('### C.5.')[0]
items=[dict(id=f'prep-{int(m[1]):02}',label=m[2]) for m in re.finditer(r'^(\d+)\. (.+)$',prep,re.M)]
module('src/features/interview/data/preparation.ts','preparation',items,'PreparationItem','../domain/interview.types')
phrases=[]
for row in re.findall(r'^\| .*$',text.split('### C.5.')[1].split('\n## 14.')[0],re.M)[1:]:
    c=[x.strip() for x in row.split('|')[1:-1]];phrases.append(dict(id=f'phrase-{len(phrases)+1}',spanish=c[0],english=c[1]))
module('src/features/interview/data/phrases.ts','phrases',phrases,'ServicePhrase','../domain/interview.types')
sources=[]
for row in re.findall(r'^\| [EF]\d{2} .*$',text.split('\n## 14.')[1],re.M):
    c=[x.strip() for x in row.split('|')[1:-1]]
    links=[{'label':m[1],'url':m[2]} for m in re.finditer(r'\[(.*?)\]\((.*?)\)',c[1])]
    s=dict(id=c[0],title=re.sub(r'\[(.*?)\]\(.*?\)',r'\1',c[1]).replace('`',''),consultedAt='2026-11-11',scope=c[2])
    if links:s['links']=links
    else:s['localFile']='PLAN_ALMA_DE_BARISTA.md' if c[0]=='E01' else 'REFERENCIA_DISENO_HONEY.md'
    sources.append(s)
module('src/content/sources.ts','sources',sources,'SourceReference','./source.types')
for filename,source in [('PLAN_IMPLEMENTACION.md',plan_path),('REFERENCIA_DISENO_HONEY.md',root.parent/'REFERENCIA_DISENO_HONEY.md')]:
    (root/'docs').mkdir(exist_ok=True);shutil.copyfile(source,root/'docs'/filename)
print({ 'recipes':len(recipes),'profiles':len(profiles),'modules':len(guides),'glossary':len(gloss),'questions':len(questions),'scenarios':len(scenarios),'preparation':len(items),'phrases':len(phrases),'station':len(station),'sources':len(sources) })
