// Optional offline QA using already cached npm archives; never downloads packages.
const fs = require('node:fs')
const path = require('node:path')
const { createRequire } = require('node:module')
const npmRequire = createRequire('C:/Program Files/nodejs/node_modules/npm/package.json')
const cacache = npmRequire('cacache')
const semver = npmRequire('semver')
const tar = npmRequire('tar')
const root = path.resolve(__dirname,'..')
const modules = path.join(root,'.qa-tools','node_modules')
const cache = 'C:/Users/admin/AppData/Local/npm-cache/_cacache'
async function main() {
  const entries = await cacache.ls(cache)
  const archives = []
  for (const key of Object.keys(entries)) {
    const match = key.match(/^make-fetch-happen:request-cache:https:\/\/registry\.npmjs\.org\/(.+)\/-\/[^/]+?-(\d+\.\d+\.\d+(?:-[\w.-]+)?)\.tgz$/)
    if (match) archives.push({ name:decodeURIComponent(match[1]), version:match[2], key })
  }
  const pending = new Set()
  async function restore(name,range) {
    const destination = path.join(modules,name)
    if (fs.existsSync(path.join(destination,'package.json'))) return
    if (pending.has(name)) return
    pending.add(name)
    const found = archives.filter(a => a.name === name && semver.satisfies(a.version,range)).sort((a,b)=>semver.rcompare(a.version,b.version))[0]
    if (!found) throw Error(`No cached archive: ${name}@${range}`)
    const archive = (await cacache.get(cache,found.key)).data
    fs.mkdirSync(destination,{recursive:true})
    await new Promise((resolve,reject) => { const extraction=tar.x({cwd:destination,strip:1}); extraction.on('error',reject);extraction.on('finish',resolve);extraction.end(archive) })
    const metadata=JSON.parse(fs.readFileSync(path.join(destination,'package.json'),'utf8'))
    for (const [dependency,version] of Object.entries(metadata.dependencies ?? {})) await restore(dependency,version)
  }
  await restore('@vue/compiler-sfc','3.5.31')
  await restore('typescript','5.9.3')
  const { parse, compileScript, compileTemplate, compileStyle }=require(path.join(modules,'@vue/compiler-sfc'))
  const ts=require(path.join(modules,'typescript'))
  let count=0, failures=0
  function walk(directory) {
    for (const entry of fs.readdirSync(directory,{withFileTypes:true})) {
      const filename=path.join(directory,entry.name)
      if(entry.isDirectory()){walk(filename);continue}
      if (!filename.endsWith('.vue')) continue
      count++
      try {
        const { descriptor,errors }=parse(fs.readFileSync(filename,'utf8'),{filename})
        if(errors.length) throw Error(errors.join('\n'))
        const script=compileScript(descriptor,{id:`qa-${count}`,fs:{fileExists:fs.existsSync,readFile:file=>fs.readFileSync(file,'utf8')}})
        const transpiled=ts.transpileModule(script.content,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext},reportDiagnostics:true})
        if(transpiled.diagnostics.length) throw Error(ts.formatDiagnosticsWithColorAndContext(transpiled.diagnostics,{getCanonicalFileName:f=>f,getCurrentDirectory:()=>root,getNewLine:()=> '\n'}))
        if(descriptor.template) {
          const template=compileTemplate({filename,id:`qa-${count}`,source:descriptor.template.content,compilerOptions:{bindingMetadata:script.bindings,isTS:true}})
          if(template.errors.length)throw Error(template.errors.map(e=>e.message??String(e)).join('\n'))
        }
        for(const style of descriptor.styles) {
          const compiled=compileStyle({source:style.content,filename,id:`qa-${count}`,scoped:style.scoped})
          if(compiled.errors.length)throw Error(compiled.errors.join('\n'))
        }
      }catch(error){failures++;console.error(path.relative(root,filename),error.message)}
    }
  }
  walk(path.join(root,'src'))
  console.log(`${count} Vue SFC checked, ${failures} compilation errors`)
  if(failures)process.exitCode=1
}
main().catch(error=>{console.error(error.message);process.exitCode=1})
