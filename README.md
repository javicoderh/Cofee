# Alma de Barista

Guía de barismo para Almasur Providencia y Surista. Aplicación estática en Vue 3, TypeScript estricto y Vue Router, creada a partir de `docs/PLAN_IMPLEMENTACION.md`.

## Ejecutar

Usar Node.js 22.12 o superior. El entorno de implementación dispone de Node.js 24.18.0.

```sh
npm install
npm run dev
```

Vite muestra la dirección local. Los cuatro destinos son `/#/recetas`, `/#/guia`, `/#/entrevista` y `/#/favoritos`.

```sh
npm test
npm run typecheck
npm run build
npm run preview
```

`test` ejecuta pruebas de inventario, relaciones editoriales, búsqueda, filtros y lectura defensiva de selecciones. `typecheck` ejecuta `vue-tsc --noEmit`. `build` verifica tipos y genera `dist/`. La publicación consiste en servir el contenido de `dist/` desde un alojamiento estático. La navegación hash permite abrir fichas sin reglas especiales en el servidor; `base: './'` permite publicar en un subdirectorio.

## Estado de la entrega

Consulta [docs/VALIDACION.md](docs/VALIDACION.md) para distinguir las verificaciones realizadas de las pendientes. La instalación en este entorno encontró restricciones de red; no se incluye un build de producción ni un archivo de bloqueo inventado. Cuando la instalación pueda completarse, conservar el lockfile generado y ejecutar los comandos de verificación anteriores.

## Contenido

- 20 recetas y cinco perfiles de extracción.
- 10 módulos, 12 términos de glosario y nueve campos de configuración de la barra.
- 18 preguntas, cinco situaciones, 12 marcadores de preparación y ocho frases en inglés.
- Registro de fuentes y alcances, con los enlaces y textos del plan.
- Ocho SVG de bebidas y utensilios, un fondo botánico y tipografía Fraunces servida localmente mediante `@fontsource/fraunces` al compilar.

Las recetas iniciales son referencias editoriales, pendientes de ajuste al café y al equipamiento reales. Los datos pendientes del establecimiento permanecen identificados.

## Organización

`src/app` compone el enrutamiento, la inyección de preferencias y los diálogos. `src/pages` coordina las cuatro secciones. `src/features` separa recetas, guía, entrevista y preferencias en datos, dominio y componentes. `src/shared` contiene controles, navegación y utilidades. Los estilos globales definen tokens, composición y movimiento; cada componente conserva sus estilos particulares.

El contenido se representa con datos TypeScript y se renderiza por interpolación de Vue, sin HTML editorial inyectado. La aplicación no necesita cuentas ni servicios externos para consultar sus datos.

## Editar o incorporar una receta

1. Editar `src/features/recipes/data/recipes.ts`, usando el contrato `Recipe` en `domain/recipe.types.ts`.
2. Usar un ID estable en kebab-case, una categoría existente y un `sortOrder` adecuado.
3. Incorporar ingredientes con cantidades y unidades, pasos, señales de calidad, ajuste, notas técnicas e ingredientes y fuentes. Las medidas de leche corresponden a la porción fría.
4. Referenciar un perfil en `data/brews.ts` si corresponde; mantener la dosis seca en el perfil y la bebida preparada en ingredientes.
5. Seleccionar un `artKey` existente o incorporar un SVG local de la misma familia en `src/assets/art/` y ampliar el tipo.
6. Añadir alias útiles y comprobar búsqueda, ingredientes y detalle.

Los perfiles de extracción definen la dosis por peso, el rendimiento, el tiempo, la temperatura del agua y la presión de referencia. La capacidad de la taza es independiente: no se obtiene sumando gramos y mililitros.

Para validar una receta de la casa, el equipo debe probar el café, la canasta, el rendimiento, la leche, la vajilla y el resultado sensorial. Después, cambiar `status` a `house-validated` y completar juntos `validatedBy` y `validatedAt`. Esa revisión se realiza en el repositorio.

Los módulos, preguntas, situaciones y fuentes se editan en los archivos `data` de cada área y en `src/content/sources.ts`. Los enlaces entre fichas utilizan los IDs locales. Las fuentes registradas distinguen contexto técnico de cantidades editoriales.

## Persistencia y accesibilidad

Favoritos: `alma-barista:favorites:v1`. Preparación: `alma-barista:interview-progress:v1`. Ambos usan `{ version: 1, ids: [...] }`. La lectura rechaza formatos incompatibles, elimina duplicados y descarta IDs desconocidos. Si el navegador restringe el almacenamiento, las selecciones continúan en memoria y se anuncia el alcance de sesión. Los datos pertenecen al dispositivo y navegador.

Los detalles usan un diálogo nativo, bloqueo del scroll, foco inicial, cierre con Escape y devolución del foco. Las fichas se enlazan mediante `panel` e `id`; un enlace directo se cierra con reemplazo de URL y las aperturas de esta sesión vuelven a la entrada previa del historial. Los enlaces relacionados sustituyen el contenido sin acumular diálogos. La hoja móvil aplica un borrador de filtros solo al confirmar.

En celular hay filas compactas, controles táctiles y navegación inferior; en escritorio, objetos ilustrados y panel de lectura lateral. El movimiento se desactiva según la preferencia del sistema. Los pasos, cantidades y nombres son texto seleccionable, independiente de las ilustraciones.

## Documentos y herramientas editoriales

`docs/PLAN_IMPLEMENTACION.md` y `docs/REFERENCIA_DISENO_HONEY.md` conservan los documentos de entrada. `scripts/import-plan.py` realiza la importación inicial desde el plan ubicado en la carpeta superior. No debe ejecutarse después de editar manualmente el contenido sin revisar los cambios: vuelve a escribir los datos. `scripts/create-art.py` genera los SVG originales locales y también sobrescribe sus archivos si se repite.
