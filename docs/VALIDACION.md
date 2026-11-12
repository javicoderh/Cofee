# Verificación de la entrega

## Comprobado

- [x] Inventario: 20 recetas, cinco perfiles, 10 módulos, 12 términos, 18 preguntas, cinco situaciones, 12 temas de preparación, ocho frases y nueve campos de barra.
- [x] Identificadores únicos y relaciones entre recetas, perfiles, módulos y fuentes.
- [x] Ingredientes de espresso coincidentes con el rendimiento de su perfil.
- [x] Búsqueda por alias, tildes, mayúsculas y varias palabras.
- [x] Intersección de categoría, temperatura y presencia de lácteos.
- [x] Rechazo de selecciones incompatibles y eliminación de duplicados e IDs desconocidos.
- [x] Continuidad en memoria cuando el almacenamiento está bloqueado.
- [x] Ocho SVG locales de producto, fondo botánico y favicon.
- [x] Compilación aislada de los 27 componentes Vue: script TypeScript, template y estilos; cero errores.
- [x] Comprobación estricta de tipos de los datos, selectores y adaptador de almacenamiento con TypeScript 5.9.3 disponible localmente.

`npm test`: cinco pruebas aprobadas, cero fallos.

## Pendiente de ejecutar

- [ ] Instalación completa y archivo de bloqueo.
- [ ] `npm run typecheck` con Vue y sus herramientas instaladas.
- [ ] `npm run build` y revisión del contenido de `dist/`.
- [ ] Revisión visual en 360, 390, 768, 1024 y 1440 px.
- [ ] Recorridos de teclado, foco, Atrás, recarga de enlace directo y filtro en hoja móvil en un navegador.
- [ ] Movimiento reducido, texto al 200 %, cambio de orientación y zonas seguras.

La red del entorno rechazó las descargas desde `registry.npmjs.org` con `EACCES`. Se intentaron npm y pnpm. Una segunda caché de npm permitió recuperar `@vue/compiler-sfc` 3.5.31 y sus dependencias para compilar los componentes de forma aislada mediante `scripts/check-cached-sfc.cjs`. Faltan paquetes como Vue Router, vue-tsc y Fraunces para instalar la aplicación completa. Por ello no se afirma haber completado `vue-tsc`, el build de producción ni la presentación en navegador.

El script de comprobación con caché es una herramienta opcional específica de este equipo. No descarga paquetes ni sustituye el build; sus recursos se guardan en `.qa-tools/`, excluido del control de versiones.

## Revisión editorial del equipo

- [ ] Confirmar configuración real de la barra.
- [ ] Calibrar y aprobar las recetas operativas.
- [ ] Registrar responsable y fecha de cada receta de la casa.
