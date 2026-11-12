# Plan de implementación — Alma de Barista
## Guía de barismo para Almasur Providencia y Surista

**Versión:** 1.0 · **Fecha:** 11 de noviembre de 2026  
**Entrega definida:** una aplicación web expositiva en Vue, con contenido local y una experiencia de consulta durante el turno.  
**Documento dirigido a:** un agente de implementación como Codex Sol Low. Las decisiones de producto, estructura, contenido e interacción están resueltas en este plan.

---

## 1. Objetivo, alcance y decisiones cerradas

Construir **Alma de Barista**, una guía para consultar preparaciones, estudiar los fundamentos del oficio y preparar una entrevista de barismo en el contexto de Almasur Providencia y Surista.

La aplicación debe permitir que un barista encuentre una bebida, vea sus cantidades y lea sus pasos con rapidez desde el celular. También debe ofrecer explicaciones suficientes para que un postulante comprenda la calidad del producto y el tono de atención esperado.

| Decisión | Implementación |
|---|---|
| Nombre de trabajo | Alma de Barista |
| Subtítulo | Guía de barismo · Almasur Providencia |
| Idioma | Español de Chile; nombres internacionales y vocabulario de atención en inglés dentro del contenido |
| Plataforma | Vue 3, TypeScript estricto, Vite y Vue Router |
| Estilo de componentes | SFC con `<script setup lang="ts">` y Composition API |
| Presentación | CSS propio con variables de diseño, componentes pequeños e ilustraciones SVG locales |
| Contenido | Módulos TypeScript locales, importados durante la compilación |
| Persistencia | Favoritos y avance de preparación personal en el navegador |
| Navegación | Cuatro destinos: Recetas, Guía, Entrevista y Favoritos |
| Detalles | Un diálogo accesible que cambia su presentación según el contexto de uso |
| Infraestructura | Un sitio estático; el alcance se concentra en lectura, búsqueda, filtros, favoritos y despliegue de detalles |
| Entrega | Código fuente, contenido completo, recursos locales, README y build de producción |
| Dependencias funcionales | Vue y Vue Router; TypeScript, Vite y vue-tsc para el desarrollo |
| Tipografía expresiva | Fraunces local, mediante archivos WOFF2 o el paquete @fontsource/fraunces |
| Iconos | Un conjunto local de SVG coherentes; cinco o seis iconos reutilizables bastan |
| Calidad de entrega | Compilación, comprobación de tipos y revisión manual de los recorridos y del contenido |

El alcance corresponde a un producto ligero. Las cuentas de usuario, los formularios de postulación, los envíos de datos, el panel de administración, la sincronización entre dispositivos, las conexiones con sistemas del hotel y los servicios externos quedan fuera de esta versión.

La app se entrega como guía funcional para revisión. La aprobación de las recetas operativas del hotel es un hito editorial independiente.

---

## 2. Identidad y contexto del establecimiento

### 2.1. Base documentada

El hotel presenta una propuesta urbana para viajeros de negocios y de ocio, con atención cercana y espacios para reuniones. Surista comunica una identidad vinculada al sur de Chile y anuncia café de especialidad. Estos antecedentes justifican una guía orientada al producto, la consistencia y la hospitalidad. Véanse F01–F03.

La interfaz debe transmitir:

- **La calidez:** fondos crema, materiales visuales asociados a la madera y el café.
- **El alma del sur:** verde bosque, niebla suave, curvas orgánicas y una presencia botánica discreta.
- **La precisión:** cantidades claras, unidades consistentes y pasos cortos.
- **La hospitalidad:** un lenguaje amable y explicaciones que ayudan a atender mejor.
- **La sobriedad:** una jerarquía limpia y una ornamentación concentrada en accesos y cabeceras.

Los motivos del cafeto representan el origen y la producción del café. Los motivos de bosque y niebla representan la identidad visual del sur. La composición debe conservar esta distinción de procedencia.

### 2.2. Tono editorial

Usar frases completas, artículos y verbos de acción. Explicar cada término técnico al introducirlo.

Ejemplos de títulos:
- «Cómo preparar un cortado».
- «La textura de la leche».
- «Antes de tu entrevista».
- «Los productos y sus ingredientes».
- «Tus recetas favoritas».

Ejemplos de lenguaje operativo:
- «Pesa 18 g de café».
- «Detén la extracción al alcanzar 36 g».
- «Integra la leche con un vertido continuo».
- «Confirma los ingredientes con el equipo».

La marca inicial será tipográfica. Los logotipos oficiales se incorporarán únicamente cuando el equipo entregue los archivos correspondientes.

---

## 3. Política editorial y origen de los datos

### 3.1. Tres clases de contenido

1. **Información del establecimiento:** hechos públicos con fuente y fecha de consulta.
2. **Referencias técnicas:** explicaciones apoyadas en fuentes identificadas, como la SCA y el IEI.
3. **Propuestas operativas:** las recetas y los procedimientos iniciales de esta guía, pendientes de adaptación al café, al equipo y a la vajilla reales.

Cada receta inicial lleva el estado **«Receta de referencia»**. En su detalle debe aparecer una nota breve: «Ajustar al café y al equipamiento del establecimiento».

Después de una revisión real, un editor podrá cambiar su estado a **«Receta de la casa»**, agregando la fecha y el responsable de validación en los datos locales. La edición se realiza en el repositorio.

La SCA aporta un marco de formación y de calidad. Las cantidades de este recetario constituyen propuestas editoriales reproducibles. La app debe atribuir a cada fuente solamente el contenido que esa fuente respalda.

### 3.2. Datos del hotel por confirmar

Crear un bloque compacto «La configuración de la barra» en la Guía, con estos campos iniciales:

| Campo | Valor inicial visible |
|---|---|
| El tostador | Por confirmar con el equipo |
| El café y su origen | Por confirmar con el equipo |
| La fecha de tueste | Según el lote en uso |
| La máquina | Por confirmar con el equipo |
| Los molinos | Por confirmar con el equipo |
| La leche y las alternativas | Según la oferta confirmada |
| La vajilla y las capacidades | Por confirmar con el equipo |
| La receta de espresso vigente | Receta de referencia disponible |
| La disponibilidad de descafeinado | Por confirmar con el equipo |

Estos valores pendientes permiten implementar todo el producto. Evitar deducir marcas, productos, certificaciones o criterios de selección del personal.

### 3.3. Regla de unidades

- **g:** café seco, espresso obtenido, hielo, chocolate y helado.
- **ml:** agua añadida, leche y otros líquidos medidos por volumen.
- **s:** duración de una extracción o de una acción.
- **°C:** temperatura, indicando siempre el punto de medición.
- **Capacidad de taza:** el tamaño del recipiente, expresado en ml.
- **Ratio del espresso:** gramos de café seco frente a gramos de bebida obtenida.

La capacidad de la taza y el rendimiento por peso son campos independientes. El volumen de la crema y la expansión de la leche impiden obtener el volumen final sumando indiscriminadamente gramos y mililitros.

En estas recetas, la leche se mide fría antes de texturizar. Se vierte la cantidad que permita la capacidad de servicio. Para cantidades pequeñas se usa una jarra adecuada; si el equipo exige una carga mayor, esa carga y el remanente se registran en el procedimiento de la barra.

---

## 4. Inventario de contenido de la primera versión

La entrega debe incluir:

| Bloque | Cantidad | Ubicación |
|---|---:|---|
| Recetas completas | 20 | Recetas |
| Módulos de conocimiento | 10 | Guía |
| Entradas de glosario | 12 | Guía |
| Preguntas de preparación con respuesta orientativa | 18 | Entrevista |
| Situaciones de atención | 5 | Entrevista |
| Lista de preparación personal | 12 ítems | Entrevista |
| Frases de atención en inglés | 8 | Entrevista |
| Registro de fuentes | Según las referencias de este documento | Dentro de Guía y de los detalles pertinentes |
| Configuración de la barra | 9 campos | Guía |

Los anexos A, B y C contienen el material inicial. Reemplazan el pendiente del plan original «recibir el contenido del recetario».

---

## 5. Navegación, búsqueda y estados

### 5.1. Rutas

Usar `createWebHashHistory(import.meta.env.BASE_URL)` para que los enlaces internos funcionen en un alojamiento estático con configuración sencilla. Referencia técnica: F08.

| URL | Contenido |
|---|---|
| `/#/recetas` | Catálogo inicial de 20 recetas |
| `/#/guia` | Módulos, glosario, configuración y fuentes |
| `/#/entrevista` | Preparación para postulantes |
| `/#/favoritos` | Recetas guardadas en este dispositivo |
| `/#/recetas?panel=receta&id=cortado` | Catálogo con el detalle del cortado abierto |
| `/#/guia?panel=tema&id=leche` | Guía con el módulo de leche abierto |
| `/#/entrevista?panel=pregunta&id=p01` | Preparación con una pregunta abierta |

La raíz redirige a `/recetas`. Una ruta desconocida muestra una página breve con acceso a Recetas. Un identificador desconocido mantiene la página de origen y ofrece «Volver al listado».

Las vistas de página permanecen montadas mientras cambia el diálogo. Usar `KeepAlive` para las cuatro vistas y una clave basada en `route.name`; así la búsqueda y la posición del catálogo se conservan. La gestión del diálogo vive fuera de `RouterView`.

### 5.2. Categorías exactas

| Identificador | Nombre visible | Recetas |
|---|---|---|
| `espresso` | Espresso | Espresso simple, doppio, ristretto, lungo |
| `con-agua` | Con agua | Americano, long black |
| `con-leche` | Con leche | Macchiato, cortado, piccolo, flat white, cappuccino, latte, latte macchiato, café con leche |
| `dulces` | Dulces y postres | Mocha, bombón, vienés, affogato |
| `frios` | Fríos | Iced latte, shakerato |

Cada receta pertenece a una categoría principal. Los atributos caliente/frío y los ingredientes son filtros adicionales.

### 5.3. Búsqueda instantánea

- Buscar por nombre, alias y términos de ingredientes.
- Normalizar las tildes, las mayúsculas, los espacios duplicados y los extremos de la cadena.
- Resolver la búsqueda localmente con `computed` sobre un índice normalizado.
- Separar la consulta en palabras y exigir que cada palabra esté presente en el texto indexado.
- Ordenar primero las coincidencias exactas del nombre, luego las del inicio del nombre y finalmente las restantes por `sortOrder`.
- Actualizar visualmente los resultados en el mismo ciclo de interacción.
- Anunciar la cantidad de resultados con un estado `aria-live="polite"`, agrupando los avisos aproximadamente cada 200 ms.
- Mostrar un botón «Limpiar búsqueda» y conservar el foco al utilizarlo.

Alias mínimos: `capuccino`, `capuchino`, `cappuccino`; `expreso`, `espresso`; `doble`, `doppio`; `mocaccino`, `moka`, `mocha`; `cafe frio`, `iced latte`; `macchiatto`, `macchiato`.

### 5.4. Filtros

- Una categoría a la vez, con «Todas» como valor inicial.
- Temperatura: Todas / Calientes / Frías.
- Composición: Todas / Con leche o derivados / Sin leche en la receta base.
- La búsqueda se combina con los filtros mediante intersección.
- El filtro de composición describe la fórmula base; las alergias se gestionan mediante ingredientes y protocolo.
- El texto «Limpiar filtros» restablece los filtros y mantiene la consulta.
- La acción «Restablecer todo» limpia consulta y filtros.

### 5.5. Favoritos y preparación personal

Guardar los identificadores de recetas en `alma-barista:favorites:v1` y los ítems estudiados en `alma-barista:interview-progress:v1`.

Formato:
```json
{
  "version": 1,
  "ids": ["cortado", "cappuccino"]
}
```

Aplicar lectura defensiva: JSON válido, versión reconocida, array de cadenas, identificadores existentes y eliminación de duplicados. Un dato incompatible produce una colección inicial vacía.

Si el almacenamiento del navegador está restringido, mantener el comportamiento en memoria y mostrar una sola vez: «Tus selecciones se conservarán durante esta sesión».

Los favoritos y el avance pertenecen al dispositivo y navegador utilizados. Mostrar esta precisión en la página de Favoritos y al pie de la lista de preparación. El avance personal sirve para organizar el estudio.

### 5.6. Estados vacíos

- Catálogo filtrado vacío: «Prueba otro nombre o ajusta los filtros». Acción: Restablecer todo.
- Favoritos vacíos: «Guarda las recetas que consultas durante el turno». Acción: Explorar recetas.
- Identificador inválido: «Esta ficha está pendiente de incorporación». Acción: Volver al listado.
- Imagen ausente: sustituir por la silueta de la familia y mantener el nombre visible.
- Almacenamiento restringido: continuidad en memoria.

---

## 6. Experiencia móvil diseñada para el turno

### 6.1. Composición compacta

La composición compacta se activa con `(max-width: 767px)` o `(pointer: coarse) and (max-width: 1023px)`.

Este criterio decide entre dos disposiciones de navegación y de consulta. Los datos y los componentes de contenido son compartidos. Las media queries complementan el ajuste visual; el diseño móvil incorpora decisiones propias de jerarquía, interacción y lectura.

**Pantalla inicial, en este orden:**

1. Cabecera compacta de 56–64 px con nombre y subtítulo.
2. Buscador de 48 px de alto y botón Filtros de 48 × 48 px.
3. Selección de categorías en dos filas de botones visibles.
4. Número de resultados y aviso compacto de recetas de referencia.
5. Catálogo en filas de lectura rápida.
6. Navegación inferior de cuatro destinos, con icono y texto.

Cada fila de receta incluye una ilustración de 48–56 px, el nombre, una línea de composición y el botón de favorito. La zona que abre la receta es un botón propio; el botón de favorito es un hermano separado. Ambas zonas tienen nombres accesibles.

Ejemplo de fila:
- Cortado.
- Espresso doble · 40 ml de leche.
- Acción independiente: Guardar cortado.

La parte ilustrada de portada se limita a una franja discreta. En el celular, el catálogo es visible desde la primera pantalla.

### 6.2. Detalle móvil

El detalle de receta ocupa todo el ancho y `100dvh`. Entra desde abajo con un desplazamiento breve de 24 px y una transición de opacidad.

Orden fijo de contenido:

1. Cabecera adherida con el nombre, el estado editorial y el botón Cerrar.
2. Resumen de dosis, rendimiento y leche/agua, según corresponda.
3. Ingredientes y cantidades.
4. Pasos numerados, visibles desde la apertura.
5. Resultado esperado y corrección de una desviación frecuente.
6. Acordeones: «La técnica», «Los ingredientes y las alternativas», «Las fuentes».
7. Acción inferior «Guardar receta» con texto, integrada dentro del diálogo.

La ilustración queda reducida a una viñeta en la cabecera. Las cifras y el primer paso deben ser accesibles con un desplazamiento corto. Las secciones esenciales permanecen expandidas.

Para bebidas sin extracción propia, sustituir la métrica de dosis por el componente preparado; por ejemplo, «100 ml de café filtrado».

La barra inferior global queda fuera del recorrido de foco mientras el diálogo está abierto. La acción inferior del diálogo respeta `env(safe-area-inset-bottom)`. Reservar espacio equivalente en el contenido para evitar superposiciones.

### 6.3. Filtros móviles

Abrir una hoja inferior con altura máxima `min(72dvh, 560px)`. Presentar botones de selección amplios, separados por grupo.

Mientras se modifica el borrador de filtros, mostrar «Ver X recetas». Aplicar al pulsar este botón. Cerrar por el fondo o por Cerrar conserva los filtros anteriores. El foco regresa al botón Filtros.

El diálogo de filtros y el de receta son estados excluyentes.

### 6.4. Comportamientos móviles concretos

- Navegación inferior dentro del alcance del pulgar.
- Áreas táctiles mínimas de 48 × 48 px para acciones principales.
- Texto de cuerpo de 16 px como mínimo.
- Campos de entrada de 16 px para una interacción cómoda en iOS.
- Búsqueda con `type="search"`, `inputmode="search"` y `enterkeyhint="search"`.
- Al enviar la búsqueda, cerrar el teclado y llevar la vista al comienzo de los resultados.
- Conservar filtros y posición al cerrar una receta.
- Conservar la lectura al rotar el dispositivo o cambiar el tamaño de la ventana.
- Utilizar `100dvh` y áreas seguras; evitar alturas rígidas basadas únicamente en `100vh`.
- Mantener el cierre accesible y el contenido desplazable cuando aparece el teclado.
- Durante el cambio de composición, conservar el mismo contenedor de lectura; registrar el encabezado o paso visible y restaurarlo después del reajuste.
- La orientación horizontal compacta conserva la cabecera y reduce las áreas decorativas.
- Cada interacción esencial funciona por toque y por teclado.
- El gesto de arrastrar queda fuera del alcance de esta versión; las acciones visibles y el botón Atrás cubren el cierre.

---

## 7. Experiencia de escritorio y tablet amplia

A partir del modo amplio:

- Cabecera de 72 px con la marca a la izquierda y los cuatro destinos a la derecha.
- Contenedor central de hasta 1240 px.
- Introducción editorial breve de dos líneas.
- Barra de búsqueda y filtros visibles sobre el catálogo.
- Catálogo en tres o cuatro columnas según el espacio real disponible.
- Accesos ilustrados sobre fondo transparente, con etiquetas crema.
- Cada acceso muestra nombre y composición antes de abrir el detalle.

El detalle usa un panel lateral derecho de `min(960px, 90vw)` y altura completa. Distribución interior: columna artística de 280–320 px y columna de lectura flexible. Cuando el panel resulte estrecho, la composición artística pasa a una cabecera compacta.

El contenido de la columna de lectura conserva el mismo orden móvil: métricas, ingredientes, pasos, calidad y ampliaciones. La composición artística permanece a un lado del contenido operativo.

---

## 8. Sistema visual inspirado en Honey

### 8.1. Qué se traslada de la referencia

La referencia adjunta describe objetos recortados, rótulos crema, contornos oscuros, sombras desplazadas y un detalle teatral con arco incompleto y tipografía serif. En Alma de Barista:

- Los objetos se convierten en ilustraciones SVG de tazas, vasos y métodos.
- Los rótulos conservan una ligera asimetría y dos niveles tipográficos.
- Los contornos y las sombras se afinan para mantener la interfaz minimalista.
- La cabecera artística usa bosque o espresso como fondo.
- El arco abierto y la palabra vertical «CAFÉ» aparecen en el detalle amplio.
- Las cantidades se mantienen horizontales y sobre superficies de lectura despejadas.
- La interacción utiliza verde bosque y caramelo.
- Las animaciones se acortan para acompañar consultas repetidas durante el turno.

### 8.2. Paleta y roles

| Token | Color | Uso |
|---|---|---|
| `--color-paper` | `#F6F0E6` | Fondo general crema |
| `--color-surface` | `#FFFBF5` | Superficie de lectura |
| `--color-ink` | `#2C211D` | Texto espresso |
| `--color-muted` | `#6B5A50` | Texto secundario |
| `--color-forest` | `#24483D` | Acciones principales y fondos profundos |
| `--color-caramel` | `#9A582F` | Acentos textuales y categorías |
| `--color-mist` | `#DCE5DD` | Selecciones y fondos suaves |
| `--color-gold` | `#D1A06A` | Ornamentación sobre fondos profundos |
| `--color-line` | `#D7C9B9` | Separadores decorativos |

Contrastes calculados para colores opacos:
- Espresso sobre crema: **13,80:1**.
- Texto secundario sobre crema: **5,78:1**.
- Verde sobre crema: **8,95:1**.
- Caramelo sobre crema: **4,86:1**.
- Crema sobre verde: **8,95:1**.
- Espresso sobre niebla: **12,14:1**.

Mantener estos pares en los textos funcionales. Los bordes que identifiquen controles usan verde, caramelo o espresso; el separador tenue se reserva para estructura decorativa.

### 8.3. Tipografía

- **Títulos editoriales:** Fraunces, peso 600.
- **Nombres artísticos:** Fraunces cursiva, peso 500.
- **Interfaz, cantidades y pasos:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Números operativos:** `font-variant-numeric: tabular-nums`.
- **Alternativa serif:** Georgia.

| Elemento | Móvil | Amplio |
|---|---:|---:|
| Título de página | 28–32 px | 40–48 px |
| Título del detalle | 24–28 px | 32–38 px |
| Cantidad principal | 26–30 px | 30–34 px |
| Cuerpo y pasos | 16 px, interlineado 1,5–1,6 | 16–18 px |
| Etiqueta secundaria | 14 px | 14 px |
| Microtexto decorativo | 11–12 px | 11–12 px |

Las fuentes se sirven desde los recursos de la aplicación. La lectura funcional usa la pila del sistema desde el primer render.

### 8.4. Espaciado y forma

Escala: 4, 8, 12, 16, 24, 32, 48 y 64 px.

- Márgenes móviles: 16 px.
- Márgenes de detalle móvil: 20 px.
- Separación entre pasos: 16 px.
- Controles: radio de 8 px.
- Etiquetas ilustradas: `6px 16px 6px 14px`.
- Panel lateral amplio: bordes rectos.
- Hoja de filtros: radio superior de 20 px.
- Sombra del panel: `-20px 0 70px #2C211D2E`.
- Fondo modal: espresso al 45 %; desenfoque de 4 px solamente en modo amplio.
- Foco visible: anillo de 3 px y desplazamiento de 3 px; caramelo sobre crema y crema sobre fondos profundos.

### 8.5. Recursos ilustrados

Crear ocho SVG originales locales:
1. Taza de espresso.
2. Vaso corto.
3. Taza de cappuccino.
4. Vaso de latte.
5. Vaso frío con hielo.
6. Copa de affogato.
7. Método filtrado.
8. Jarra de leche.

Se reutilizan entre las 20 recetas mediante un mapa de `artKey`. Todos comparten `viewBox="0 0 240 200"`, rellenos cálidos, contorno espresso, curvas suaves y espacio exterior transparente. La taza, el líquido y la espuma usan capas de color limitadas.

Crear además un SVG de fondo con semilla, flor, cereza y hojas de cafeto; acompañarlo con una línea de paisaje de bosque. Aplicar opacidad entre 0,035 y 0,06 y `pointer-events: none`. Mantener despejada la zona de cantidades.

Las imágenes decorativas llevan `alt=""` o `aria-hidden="true"`. El nombre textual visible identifica la bebida. Usar SVG locales mediante `img` o componentes de plantilla conocidos.

### 8.6. Movimiento

Curva principal: `cubic-bezier(.2,.75,.2,1)`.

| Elemento | Movimiento | Duración |
|---|---|---:|
| Panel amplio | Desplazamiento lateral de 48 px y aparición | 260 ms |
| Detalle móvil | Desplazamiento vertical de 24 px y aparición | 220 ms |
| Fondo modal | Aparición por opacidad | 180 ms |
| Cierre | Movimiento inverso abreviado | 180 ms |
| Título artístico | 8 px y opacidad, demora de 60 ms | 180 ms |
| Objeto con puntero fino | Elevación de 4 px y giro máximo de 1,5° | 160 ms |
| Botón táctil | Escala a 0,98 mientras se pulsa | 90 ms |
| Acordeón | Despliegue de filas y opacidad | 160 ms |

El contenido operativo aparece inmediatamente con el panel. La secuencia artística acompaña la entrada en el área decorativa.

Con `prefers-reduced-motion: reduce`, aplicar cambios instantáneos y mantener todas las acciones disponibles. Animar transformaciones y opacidad; los cambios de altura se limitan al acordeón.

---

## 9. Diálogo, accesibilidad e historial

Implementar un único componente reutilizable `ResponsiveDialog.vue` basado en `<dialog>` y `showModal()`. Referencia: F09. Cada presentación utiliza este componente y el controlador asegura que exista un solo diálogo abierto.

### 9.1. Contrato del componente

Props:
- `open: boolean`.
- `presentation: 'detail' | 'sheet'`.
- `titleId: string`.
- `closeLabel: string`, con valor «Cerrar detalle».
- `initialFocusId?: string`.

Slots:
- `header`.
- `default`.
- `footer` opcional.

Eventos:
- `request-close`: el usuario solicita cerrar.
- `after-close`: el diálogo terminó su salida.

El componente gestiona el foco, el bloqueo de scroll y la animación. El contenedor de aplicación gestiona la ruta y el contenido seleccionado.

### 9.2. Secuencia de apertura y cierre

1. Al abrir, registrar el control disparador y la posición de scroll.
2. Esperar `nextTick` y ejecutar `showModal()` solamente si el elemento está cerrado.
3. Bloquear el desplazamiento del documento conservando sus estilos previos.
4. Llevar el foco al título de la ficha con `tabindex="-1"`; Cerrar queda como primera acción.
5. Interceptar `cancel` de Escape con `preventDefault()` y emitir `request-close`.
6. El clic fuera del panel emite la misma solicitud. Comprobar que el gesto comenzó y terminó fuera de su rectángulo.
7. Al recibir `open=false`, ejecutar la salida conservando el contenido actual.
8. Al finalizar la transición, llamar a `dialog.close()`, restaurar estilos y devolver el foco.
9. Si el disparador desapareció, enfocar el título de la página de origen.
10. Con movimiento reducido, completar el cierre en el mismo ciclo.
11. Ante una apertura rápida durante el cierre, cancelar la salida pendiente y conservar un único diálogo.

Filtrar `transitionend` por el panel y la propiedad `transform`. Añadir un respaldo breve de 240 ms para completar la salida si el evento se pierde; limpiarlo al desmontar.

### 9.3. Integración con la URL

La selección del detalle vive en `panel` e `id`. Mantener un solo panel abierto.

- Abrir desde un listado: `router.push` de la misma ruta con los parámetros del detalle.
- Antes del push, crear un identificador de apertura y guardarlo en memoria junto a la URL base y el control disparador. Pasar ese identificador en `state: { almaOverlayKey: identificador }` de Vue Router.
- Cerrar: usar `router.back()` cuando `window.history.state.almaOverlayKey` identifica una apertura registrada en esta sesión. La apertura propia se crea siempre desde una ruta base.
- Un enlace directo o una recarga del detalle se cierra con `router.replace`, quitando `panel` e `id`.
- El botón Atrás del navegador vuelve al listado mediante la navegación normal.
- Un cambio de pestaña navega a la ruta base del destino, con el diálogo cerrado.
- Las fichas relacionadas sustituyen `panel` e `id` con `router.replace`, conservando la ruta base y `almaOverlayKey`; la entrada anterior al diálogo se conserva. Esto permite abrir una receta desde una pregunta y regresar al listado de entrevistas.
- Un cambio de `id` dentro del mismo diálogo lleva su scroll interno al inicio y enfoca el nuevo título.
- El cierre por navegación conserva una instantánea del contenido hasta terminar la salida.

La hoja de filtros pertenece a RecipesPage y utiliza una instancia del mismo componente de diálogo. Su apertura requiere el detalle cerrado. Al abrir, RecipesPage agrega una entrada de historial con `panel=filtros`, sin `id`, y conserva el borrador local. OverlayHost reconoce ese valor como reservado y deja su propio diálogo cerrado. RecipesPage observa ese parámetro para abrir o cerrar la hoja. El botón Atrás cancela el borrador y vuelve al catálogo. Aplicar confirma el borrador antes de retirar el parámetro. Un enlace directo a `panel=filtros` carga los filtros iniciales y se cierra con `replace`. Si cambia la ruta, la hoja se cierra.

### 9.4. Semántica

- `lang="es-CL"` en el documento.
- Un título de página coherente por destino.
- Regiones `header`, `nav` y `main`.
- Enlace «Ir al contenido».
- Ingredientes en lista y cantidades en texto seleccionable.
- Pasos en `ol`.
- Botones de favorito con `aria-pressed` y nombre específico.
- Acordeones con `button`, `aria-expanded` y `aria-controls`.
- En un acordeón cerrado, el contenido deja el orden de foco.
- Nombres accesibles de los controles independientes de sus iconos.
- Contraste funcional conservado en estados activo, foco y seleccionado.
- Contenido esencial legible al ampliar el texto al 200 %.

---

## 10. Arquitectura modular y aplicación práctica de SOLID

### 10.1. Capas y dependencias

`app` compone las páginas, el enrutamiento, los proveedores y el anfitrión de diálogos.

`pages` coordina los módulos para cada destino.

`features` agrupa el contenido, los tipos, las funciones y los componentes de cada área.

`shared` contiene componentes y utilidades que sirven a varias áreas.

Dirección de dependencias:
- App y páginas pueden importar las interfaces públicas de los módulos.
- Los módulos pueden importar Shared.
- Shared mantiene independencia de App, Pages y Features.
- Los componentes de receta reciben el estado de favoritos mediante props y emiten acciones.
- Las páginas conectan recetas con favoritos, evitando dependencias recíprocas.
- El dominio usa TypeScript y datos puros.
- La reactividad vive en composables y controladores.
- El acceso al navegador se concentra en adaptadores y composables de plataforma.

### 10.2. SOLID aplicado

| Principio | Decisión concreta |
|---|---|
| Responsabilidad única | RecipeCard presenta; RecipeDetail ordena la ficha; los selectores filtran; el adaptador persiste |
| Abierto a extensión | Una receta nueva se agrega al catálogo; una ilustración nueva se agrega al mapa; el render usa los mismos componentes |
| Sustitución | El almacenamiento local y el almacenamiento en memoria cumplen el mismo contrato de lectura y escritura |
| Segregación de interfaces | Las props contienen lo que usa cada componente; los eventos expresan acciones concretas |
| Inversión de dependencias | El estado de favoritos recibe un puerto de almacenamiento; las vistas consumen el estado público y las acciones |

Aplicar estos principios mediante composición y funciones pequeñas. El alcance permite una arquitectura funcional, sin jerarquías de clases.

### 10.3. Organización de archivos

| Ruta | Responsabilidad |
|---|---|
| `package.json` | Dependencias y comandos |
| `vite.config.ts` | Plugin de Vue y alias `@` |
| `tsconfig*.json` | TypeScript estricto |
| `index.html` | Documento y metadatos básicos |
| `README.md` | Ejecución, edición del contenido y publicación estática |
| `docs/PLAN_IMPLEMENTACION.md` | Copia de este plan |
| `docs/REFERENCIA_DISENO_HONEY.md` | Referencia adjunta |
| `src/main.ts` | Crea la app, instala el router y monta los proveedores |
| `src/app/App.vue` | Shell, RouterView y OverlayHost |
| `src/app/router.ts` | Rutas y restauración de scroll |
| `src/app/providers.ts` | Crea los estados compartidos y los inyecta |
| `src/app/overlays/OverlayHost.vue` | Selecciona RecipeDetail, GuideDetail o QuestionDetail |
| `src/app/overlays/useRouteOverlay.ts` | Apertura, cierre e historial de los detalles |
| `src/pages/RecipesPage.vue` | Búsqueda, filtros y catálogo |
| `src/pages/GuidePage.vue` | Módulos, glosario, configuración y fuentes |
| `src/pages/InterviewPage.vue` | Preguntas, situaciones, frases y preparación personal |
| `src/pages/FavoritesPage.vue` | Catálogo filtrado por favoritos |
| `src/pages/NotFoundPage.vue` | Recuperación de rutas desconocidas |
| `src/features/recipes/domain/recipe.types.ts` | Tipos de recetas, ingredientes y perfiles de extracción |
| `src/features/recipes/domain/recipe.selectors.ts` | Búsqueda, filtros y orden |
| `src/features/recipes/data/recipes.ts` | Las 20 recetas |
| `src/features/recipes/data/brews.ts` | Perfiles de extracción compartidos |
| `src/features/recipes/data/categories.ts` | Categorías y orden |
| `src/features/recipes/components/RecipeCard.vue` | Acceso amplio ilustrado |
| `src/features/recipes/components/RecipeRow.vue` | Acceso compacto para celular |
| `src/features/recipes/components/RecipeDetail.vue` | Composición del detalle |
| `src/features/recipes/components/RecipeMetrics.vue` | Cantidades principales |
| `src/features/recipes/components/RecipeIngredients.vue` | Ingredientes, cantidades y notas |
| `src/features/recipes/components/RecipeSteps.vue` | Pasos numerados |
| `src/features/recipes/components/RecipeArt.vue` | SVG seleccionado por artKey |
| `src/features/recipes/components/RecipeFilters.vue` | Controles de filtros compartidos |
| `src/features/recipes/index.ts` | Exportaciones públicas del módulo |
| `src/features/guide/domain/guide.types.ts` | Tipos de módulos y glosario |
| `src/features/guide/data/modules.ts` | Diez módulos |
| `src/features/guide/data/glossary.ts` | Doce términos |
| `src/features/guide/data/station.ts` | Configuración de la barra |
| `src/features/guide/components/GuideDetail.vue` | Lectura del módulo |
| `src/features/guide/index.ts` | Exportaciones públicas |
| `src/features/interview/domain/interview.types.ts` | Preguntas, escenarios y lista personal |
| `src/features/interview/data/questions.ts` | Dieciocho preguntas |
| `src/features/interview/data/scenarios.ts` | Cinco situaciones |
| `src/features/interview/data/preparation.ts` | Doce ítems y ocho frases |
| `src/features/interview/components/QuestionDetail.vue` | Pregunta y respuesta desplegable |
| `src/features/interview/components/PreparationChecklist.vue` | Avance personal |
| `src/features/interview/index.ts` | Exportaciones públicas |
| `src/features/preferences/domain/storage.port.ts` | Contrato de persistencia |
| `src/features/preferences/infrastructure/browserStorage.ts` | Lectura y escritura local con degradación a memoria |
| `src/features/preferences/application/createPreferences.ts` | Estado reactivo y acciones de favoritos y preparación |
| `src/features/preferences/application/usePreferences.ts` | InjectionKey y acceso al estado |
| `src/features/preferences/index.ts` | API pública |
| `src/shared/layout/AppShell.vue` | Estructura estable de página |
| `src/shared/layout/MobileNavigation.vue` | Navegación inferior |
| `src/shared/layout/DesktopNavigation.vue` | Navegación superior |
| `src/shared/ui/ResponsiveDialog.vue` | Diálogo nativo y ciclo de foco |
| `src/shared/ui/Accordion.vue` | Desplegable accesible |
| `src/shared/ui/SearchField.vue` | Campo de búsqueda y limpieza |
| `src/shared/ui/EmptyState.vue` | Estados vacíos |
| `src/shared/ui/BaseIcon.vue` | Iconos de interfaz |
| `src/shared/composables/useViewportMode.ts` | Modo compacto y amplio |
| `src/shared/composables/useReducedMotion.ts` | Preferencia de movimiento |
| `src/shared/composables/useBodyScrollLock.ts` | Bloqueo y restauración del scroll |
| `src/shared/lib/normalizeSearch.ts` | Normalización del texto |
| `src/shared/lib/formatQuantity.ts` | Formato español de cantidades |
| `src/content/sources.ts` | Fuentes y sus alcances |
| `src/assets/art/` | Las ocho ilustraciones y el fondo |
| `src/styles/tokens.css` | Colores, espacio, tipografía y movimiento |
| `src/styles/base.css` | Reset, accesibilidad y estilos semánticos |
| `src/styles/layout.css` | Estructura general y navegación |
| `src/styles/motion.css` | Transiciones y movimiento reducido |

Los estilos particulares de un componente se mantienen en su SFC con `scoped`. Los tokens y estilos globales se importan una vez desde `main.ts`.

---

## 11. Contratos de datos y de componentes

### 11.1. Datos de receta

```ts
export type RecipeCategory =
  | 'espresso'
  | 'con-agua'
  | 'con-leche'
  | 'dulces'
  | 'frios'

export type ArtKey =
  | 'espresso-cup'
  | 'short-glass'
  | 'cappuccino-cup'
  | 'latte-glass'
  | 'iced-glass'
  | 'affogato-cup'
  | 'filter-method'
  | 'milk-pitcher'

export interface Quantity {
  readonly value: number
  readonly unit: 'g' | 'ml' | 'unidad'
}

export interface Ingredient {
  readonly id: string
  readonly name: string
  readonly quantity: Quantity
  readonly note?: string
}

export interface BrewProfile {
  readonly id: string
  readonly name: string
  readonly doseG: number
  readonly yieldG: number
  readonly timeS: { readonly min: number; readonly max: number } | null
  readonly waterTempC: number
  readonly pressureBar: number
  readonly note: string
}

export interface Recipe {
  readonly id: string
  readonly name: string
  readonly aliases: readonly string[]
  readonly category: RecipeCategory
  readonly sortOrder: number
  readonly temperature: 'hot' | 'cold'
  readonly containsDairy: boolean
  readonly summary: string
  readonly artKey: ArtKey
  readonly status: 'reference' | 'house-validated'
  readonly validatedBy?: string
  readonly validatedAt?: string
  readonly brewProfileId: string | null
  readonly vessel: {
    readonly name: string
    readonly capacityMl: number
  }
  readonly ingredients: readonly Ingredient[]
  readonly steps: readonly string[]
  readonly qualityCues: readonly string[]
  readonly adjustmentTip: string
  readonly milkTargetInCupC?: {
    readonly min: number
    readonly max: number
  }
  readonly ingredientNotes: readonly string[]
  readonly technicalNote: string
  readonly sourceRefs: readonly string[]
}
```

Reglas:
- Declarar el catálogo como `readonly Recipe[]` mediante `satisfies`.
- Usar identificadores en kebab-case estables.
- La leche o el agua adicional se obtienen de `ingredients` para construir las métricas.
- El espresso preparado aparece como ingrediente; su dosis seca se obtiene de `brewProfileId`.
- La información del perfil se incorpora a las recetas al leer; mantener una sola definición por perfil.
- `sourceRefs` apunta al registro de fuentes; sus notas distinguen referencia técnica y cantidad propuesta.
- `validatedBy` y `validatedAt` se completan juntos para `house-validated`.
- Las notas de ingredientes orientan la consulta del producto real; la app muestra los ingredientes base de forma explícita.

Ejemplo completo para trasladar al catálogo:

```ts
export const cortado = {
  id: 'cortado',
  name: 'Cortado',
  aliases: ['cafe cortado', 'cortado doble'],
  category: 'con-leche',
  sortOrder: 8,
  temperature: 'hot',
  containsDairy: true,
  summary: 'Un espresso doble equilibrado con una porción similar de leche.',
  artKey: 'short-glass',
  status: 'reference',
  brewProfileId: 'espresso-doble',
  vessel: { name: 'Vaso corto', capacityMl: 100 },
  ingredients: [
    {
      id: 'espresso',
      name: 'Espresso preparado',
      quantity: { value: 36, unit: 'g' }
    },
    {
      id: 'milk',
      name: 'Leche',
      quantity: { value: 40, unit: 'ml' },
      note: 'Cantidad medida antes de texturizar'
    }
  ],
  steps: [
    'Extrae el espresso en el vaso adecuado.',
    'Texturiza la leche con poca incorporación de aire.',
    'Integra con un vertido continuo.',
    'Sirve de inmediato.'
  ],
  qualityCues: [
    'El café se reconoce con claridad.',
    'La textura resulta sedosa.'
  ],
  adjustmentTip: 'Reduce el aire inicial si aparece una espuma demasiado gruesa.',
  milkTargetInCupC: { min: 55, max: 65 },
  ingredientNotes: ['Contiene leche. Confirma los ingredientes de cada alternativa.'],
  technicalNote: 'La proporción del cortado varía por región. Esta es una receta de referencia.',
  sourceRefs: ['E01', 'F10']
} satisfies Recipe
```

Usar identificadores de ingrediente consistentes: `espresso`, `milk`, `water`, `ice`, `chocolate`, `condensed-milk`, `cream`, `ice-cream`, `sugar` y `filter-coffee`. Esto permite construir métricas mediante campos, en lugar de interpretar frases.

### 11.2. Datos de aprendizaje

```ts
export interface ContentBlock {
  readonly title: string
  readonly paragraphs: readonly string[]
  readonly bullets?: readonly string[]
}

export interface GuideModule {
  readonly id: string
  readonly title: string
  readonly summary: string
  readonly blocks: readonly ContentBlock[]
  readonly relatedRecipeIds: readonly string[]
  readonly sourceRefs: readonly string[]
}

export interface InterviewQuestion {
  readonly id: string
  readonly category: 'tecnica' | 'producto' | 'servicio' | 'operacion'
  readonly question: string
  readonly answer: string
  readonly showInPractice: readonly string[]
  readonly relatedGuideId: string
}

export interface Scenario {
  readonly id: string
  readonly title: string
  readonly situation: string
  readonly actions: readonly string[]
  readonly suggestedPhrase: string
}

export interface SourceReference {
  readonly id: string
  readonly title: string
  readonly links?: readonly {
    readonly label: string
    readonly url: string
  }[]
  readonly localFile?: string
  readonly consultedAt: string
  readonly scope: string
}
```

El contenido se representa con párrafos, listas y bloques tipados. Vue lo renderiza mediante interpolación de texto y componentes semánticos.

Contratos auxiliares:
- `GlossaryEntry`: `id`, `term` y `definition`, todos de tipo string.
- `PreparationItem`: `id` y `label`, ambos string.
- `ServicePhrase`: `id`, `spanish` y `english`, todos string.
- `StationField`: `id`, `label`, `value` y `status: 'pending' | 'confirmed'`.

Cada módulo G01–G10 se guarda con el ID legible indicado junto a su código; por ejemplo G05 tiene `id: 'leche'`. Los códigos G y P sirven para mantener el orden editorial; los enlaces utilizan los IDs de los datos.

### 11.3. Puerto de almacenamiento

```ts
export interface SelectionStorage {
  read(key: string): readonly string[]
  write(key: string, ids: readonly string[]): {
    persisted: boolean
  }
}
```

`createPreferences(storage)` recibe este contrato y expone:
- `favoriteIds` de solo lectura.
- `preparedItemIds` de solo lectura.
- `isFavorite(id)`.
- `toggleFavorite(id)`.
- `togglePreparedItem(id)`.
- `storageMode`: `'persistent' | 'session'`.

El adaptador mantiene una copia en memoria desde el inicio. Captura los fallos de lectura y escritura y permite continuar usando las selecciones.

### 11.4. Contratos visuales principales

| Componente | Entradas | Eventos |
|---|---|---|
| RecipeCard / RecipeRow | recipe, favorite | open(id), toggle-favorite(id) |
| RecipeDetail | recipe, brewProfile, favorite, compact | toggle-favorite(id) |
| RecipeMetrics | items con etiqueta, valor y unidad | Ninguno |
| RecipeSteps | steps | Ninguno |
| RecipeFilters | valor actual y opciones | update:modelValue |
| SearchField | modelValue, label, resultCount | update:modelValue, submit |
| QuestionDetail | question | Ninguno |
| PreparationChecklist | items, selectedIds | toggle(id) |
| ResponsiveDialog | open, presentation, titleId | request-close, after-close |

---

## 12. Ejecución por etapas para Codex

Trabajar en orden. Cada etapa entrega una parte concreta y visible del producto.

### Etapa 1 — Base del proyecto

- Crear el proyecto con la plantilla Vue + TypeScript de Vite.
- Incorporar Vue Router y configurar el alias `@`.
- Usar versiones estables compatibles y conservar el archivo de bloqueo.
- Configurar los comandos `dev`, `build`, `preview` y `typecheck`.
- Crear la estructura modular y las cuatro rutas.
- Configurar `lang="es-CL"` y el título inicial.

**Resultado:** los cuatro destinos cargan con la estructura base.

### Etapa 2 — Contenido y contratos

- Incorporar los tipos de la sección 11.
- Cargar los cinco perfiles de extracción y las 20 recetas del anexo A.
- Cargar los diez módulos y el glosario del anexo B.
- Cargar las preguntas, escenarios, frases y lista del anexo C.
- Cargar el registro de fuentes.
- Incorporar los campos pendientes de la barra.
- Resolver los alias y las categorías.

**Resultado:** el contenido está completo y el agente puede renderizar todas las fichas.

### Etapa 3 — Identidad visual

- Definir los tokens de la sección 8.
- Integrar las fuentes locales.
- Crear los ocho SVG y el fondo discreto.
- Implementar las etiquetas, los estados de foco y los botones.
- Construir MobileNavigation y DesktopNavigation.

**Resultado:** la navegación y los accesos muestran la identidad final.

### Etapa 4 — Recetario de consulta

- Crear RecipeRow, RecipeCard, RecipeMetrics y RecipeSteps.
- Implementar búsqueda, filtros y estados vacíos.
- Mantener las posiciones y consultas de cada página.
- Implementar la persistencia de favoritos y conectarla desde las páginas.

**Resultado:** se puede localizar y guardar cualquiera de las 20 recetas.

### Etapa 5 — Detalles y movimiento

- Implementar ResponsiveDialog y el control de foco.
- Implementar OverlayHost y useRouteOverlay.
- Construir las composiciones compacta y amplia del detalle.
- Implementar los estados de apertura, cierre y sustitución de contenido.
- Integrar las duraciones y el movimiento reducido.
- Incorporar la hoja móvil de filtros.

**Resultado:** las fichas abren, cierran y restauran la consulta correctamente.

### Etapa 6 — Guía e entrevista

- Construir los accesos a los módulos.
- Implementar los detalles de módulos y preguntas.
- Presentar las situaciones como bloques desplegables dentro de Entrevista.
- Añadir las frases y la lista de preparación con avance local.
- Añadir los enlaces entre preguntas, módulos y recetas mediante rutas.

**Resultado:** el producto sirve para el turno y para estudiar antes de la entrevista.

### Etapa 7 — Ajuste y entrega

- Comprobar los tipos y generar el build.
- Revisar visualmente los tamaños de 360, 390, 768, 1024 y 1440 px.
- Revisar el teclado, el foco, el botón Atrás, la recarga de un enlace de ficha y el movimiento reducido.
- Revisar el texto ampliado, las áreas seguras y la orientación horizontal.
- Corregir desbordamientos y superposiciones.
- Confirmar las unidades, los ingredientes, los estados editoriales y las fuentes.
- Redactar el README con los comandos y la edición de recetas.

**Resultado:** una app terminada y lista para revisión del equipo.

### Comandos de entrega

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

`typecheck` debe ejecutar `vue-tsc --noEmit`. `build` debe producir `dist/` con Vite. El README indicará la versión de Node compatible que se haya utilizado.

---

## 13. Criterios observables de finalización

- Las 20 recetas tienen ingredientes, cantidades, pasos y señales de calidad.
- La primera pantalla móvil muestra el buscador y entradas de receta.
- Abrir una receta requiere una sola activación desde el listado.
- Las cantidades principales aparecen antes de cualquier explicación extensa.
- La navegación móvil usa una barra inferior; la amplia usa navegación superior.
- La presentación compacta cambia la jerarquía del detalle y reduce el arte.
- Los filtros móviles tienen una acción de aplicación explícita.
- La búsqueda reconoce los alias y las tildes.
- Los favoritos sobreviven a una recarga cuando el navegador permite persistencia.
- El detalle admite enlace directo y cierre seguro.
- Escape, Cerrar y Atrás producen un resultado coherente.
- El foco vuelve a un punto útil y el scroll de origen se conserva.
- Las animaciones respetan la preferencia de movimiento.
- Las fuentes y los SVG están disponibles como recursos locales.
- Las imágenes mantienen proporciones y dejan el contenido legible.
- Cada dato pendiente del hotel está identificado.
- Las preguntas de entrevista están presentadas como preparación orientativa.
- La comprobación de tipos y la compilación terminan correctamente.
- El README explica cómo incorporar una receta y cómo validar una receta de la casa.

---

## Anexo A. Contenido inicial de las 20 recetas

### A.1. Perfiles compartidos

Estos perfiles son puntos de partida editoriales. El café y el equipamiento reales determinan su calibración.

| ID | Nombre | Dosis seca | Bebida obtenida | Tiempo orientativo | Agua de extracción | Presión de referencia |
|---|---|---:|---:|---|---:|---:|
| `espresso-simple` | Espresso simple | 9 g | 18 g | 25–30 s | 93 °C | 9 bar |
| `espresso-doble` | Espresso doble | 18 g | 36 g | 25–30 s | 93 °C | 9 bar |
| `ristretto-doble` | Ristretto doble | 18 g | 24 g | Calibrar por sabor | 93 °C | 9 bar |
| `lungo-doble` | Lungo doble | 18 g | 54 g | Calibrar por sabor | 93 °C | 9 bar |
| `ristretto-simple` | Ristretto simple | 9 g | 14 g | Calibrar por sabor | 93 °C | 9 bar |

La medición del tiempo comienza al activar la extracción. El procedimiento de la barra debe registrar cómo trata la preinfusión para que las comparaciones sean consistentes.

La dosis debe corresponder a la capacidad de la canasta. Los perfiles individuales requieren una canasta individual apropiada o un procedimiento de reparto validado. Las recetas de referencia documentan la bebida servida.

### A.2. Reglas comunes del catálogo

- `sortOrder` sigue la numeración 1–20.
- `status` inicial: `reference`.
- `summary`: usar la primera frase descriptiva de cada ficha.
- `steps`: trasladar los pasos indicados como array.
- `qualityCues`: separar las dos señales indicadas.
- `technicalNote`: trasladar la nota técnica.
- `ingredientNotes`: incorporar la nota de ingredientes.
- `sourceRefs`: E01 para las cantidades propuestas y las fuentes técnicas mencionadas en cada caso.
- `temperature` es `cold` para affogato, iced latte y shakerato; `hot` para las demás.
- `containsDairy` es `true` en las recetas 7–19 y `false` en las 1–6 y 20.
- Para las bebidas con leche texturizada, usar un objetivo orientativo de **55–65 °C en taza**. Este campo se aplica a las recetas 7–15. La tolerancia y el resultado final se adaptan al servicio.
- La base láctea inicial es leche de vaca. Las alternativas se seleccionan según la oferta real y requieren un ajuste documentado.

### 01. Espresso simple
**ID:** `espresso-simple` · **Categoría:** Espresso · **Arte:** espresso-cup  
**Descripción:** Un café corto, concentrado y aromático.  
**Perfil:** espresso-simple · **Recipiente:** taza de 80 ml.  
**Ingredientes:** 18 g de espresso preparado a partir de 9 g de café.

**Pasos:** 1) Precalienta la taza y seca la canasta. 2) Pesa, distribuye y compacta la dosis. 3) Extrae hasta obtener 18 g y registra el tiempo. 4) Sirve inmediatamente.

**Calidad:** el dulzor es reconocible; el final resulta agradable.  
**Ajuste:** ante un sabor agresivo, revisa distribución, rendimiento y molienda mediante una nueva extracción.  
**Nota técnica:** la receta expresa el rendimiento por peso. La referencia italiana por volumen se explica aparte en la Guía.  
**Ingredientes:** café y agua; consulta las condiciones reales de preparación cuando exista una restricción alimentaria.  
**Fuentes:** E01, F05.

### 02. Doppio
**ID:** `doppio` · **Categoría:** Espresso · **Arte:** espresso-cup  
**Descripción:** Un espresso doble con una mayor dosis de café.  
**Perfil:** espresso-doble · **Recipiente:** taza de 100 ml.  
**Ingredientes:** 36 g de espresso preparado a partir de 18 g de café.

**Pasos:** 1) Prepara la canasta doble con 18 g. 2) Distribuye y compacta nivelado. 3) Extrae 36 g y registra el tiempo. 4) Sirve en la taza precalentada.

**Calidad:** el aroma es limpio; la textura y el sabor mantienen equilibrio.  
**Ajuste:** conserva la dosis y ajusta la molienda para recuperar la receta cuando cambie el flujo.  
**Nota técnica:** la proporción de referencia es 1:2.  
**Ingredientes:** café y agua.  
**Fuentes:** E01, F05.

### 03. Ristretto
**ID:** `ristretto` · **Categoría:** Espresso · **Arte:** espresso-cup  
**Descripción:** Un espresso de rendimiento corto y textura concentrada.  
**Perfil:** ristretto-doble · **Recipiente:** taza de 80 ml.  
**Ingredientes:** 24 g de ristretto preparado a partir de 18 g de café.

**Pasos:** 1) Prepara una dosis uniforme de 18 g. 2) Extrae hasta alcanzar 24 g. 3) Evalúa la concentración y el equilibrio. 4) Sirve al momento.

**Calidad:** el cuerpo es denso; el sabor conserva dulzor.  
**Ajuste:** una acidez agresiva requiere revisar la extracción y calibrar de nuevo.  
**Nota técnica:** la relación aproximada es 1:1,33; su tiempo se define durante la calibración.  
**Ingredientes:** café y agua.  
**Fuentes:** E01, F12.

### 04. Lungo
**ID:** `lungo` · **Categoría:** Espresso · **Arte:** espresso-cup  
**Descripción:** Una extracción larga que produce una bebida de mayor rendimiento.  
**Perfil:** lungo-doble · **Recipiente:** taza de 120 ml.  
**Ingredientes:** 54 g de lungo preparado a partir de 18 g de café.

**Pasos:** 1) Prepara 18 g y distribuye uniformemente. 2) Extrae hasta obtener 54 g. 3) Registra el tiempo y evalúa el final. 4) Sirve en una taza precalentada.

**Calidad:** la bebida conserva claridad de sabor; el amargor resulta agradable.  
**Ajuste:** ante un final áspero, revisa molienda y rendimiento.  
**Nota técnica:** todo el agua de extracción atraviesa el café; la relación propuesta es 1:3.  
**Ingredientes:** café y agua.  
**Fuentes:** E01, F12.

### 05. Americano
**ID:** `americano` · **Categoría:** Con agua · **Arte:** cappuccino-cup  
**Descripción:** Un espresso doble diluido con agua caliente.  
**Perfil:** espresso-doble · **Recipiente:** taza de 250 ml.  
**Ingredientes:** 36 g de espresso y 150 ml de agua caliente.

**Pasos:** 1) Extrae el espresso en la taza. 2) Mide 150 ml de agua caliente apta para el servicio. 3) Añade el agua con cuidado. 4) Sirve enseguida.

**Calidad:** la intensidad resulta uniforme; el aroma se mantiene limpio.  
**Ajuste:** modifica la dilución según la preferencia del huésped y registra las variantes de la carta.  
**Nota técnica:** el espresso se extrae con su receta y luego se diluye.  
**Ingredientes:** café y agua.  
**Fuentes:** E01, F11.

### 06. Long black
**ID:** `long-black` · **Categoría:** Con agua · **Arte:** cappuccino-cup  
**Descripción:** Un espresso doble servido sobre agua caliente.  
**Perfil:** espresso-doble · **Recipiente:** taza de 180 ml.  
**Ingredientes:** 100 ml de agua caliente y 36 g de espresso.

**Pasos:** 1) Mide el agua en la taza. 2) Extrae el espresso sobre el agua. 3) Comprueba la presentación. 4) Sirve inmediatamente.

**Calidad:** el café mantiene una presencia marcada; parte de la crema puede conservarse en la superficie.  
**Ajuste:** utiliza un vertido suave y una altura de taza adecuada.  
**Nota técnica:** el orden de construcción caracteriza esta propuesta.  
**Ingredientes:** café y agua.  
**Fuentes:** E01.

### 07. Espresso macchiato
**ID:** `macchiato` · **Categoría:** Con leche · **Arte:** espresso-cup  
**Descripción:** Un espresso marcado con una pequeña porción de leche texturizada.  
**Perfil:** espresso-simple · **Recipiente:** taza de 80 ml.  
**Ingredientes:** 18 g de espresso y una porción equivalente a 10 ml de leche antes de texturizar.

**Pasos:** 1) Extrae el espresso. 2) Texturiza la leche con el procedimiento de porciones pequeñas de la barra. 3) Incorpora la pequeña porción de leche y microespuma. 4) Sirve.

**Calidad:** el café conserva protagonismo; la superficie es fina y cremosa.  
**Ajuste:** controla la cantidad de leche para mantener la identidad de la bebida.  
**Nota técnica:** la carga de la jarra puede ser mayor que la porción servida.  
**Ingredientes:** contiene leche; verificar la alternativa solicitada y sus ingredientes.  
**Fuentes:** E01, F10.

### 08. Cortado
**ID:** `cortado` · **Categoría:** Con leche · **Arte:** short-glass  
**Descripción:** Un espresso doble equilibrado con una porción similar de leche.  
**Perfil:** espresso-doble · **Recipiente:** vaso de 100 ml.  
**Ingredientes:** 36 g de espresso y 40 ml de leche.

**Pasos:** 1) Extrae el espresso en el vaso adecuado. 2) Texturiza la leche con poca incorporación de aire. 3) Integra con un vertido continuo. 4) Sirve de inmediato.

**Calidad:** el café se reconoce con claridad; la textura resulta sedosa.  
**Ajuste:** reduce la incorporación de aire si aparece una capa de espuma demasiado gruesa.  
**Nota técnica:** las proporciones del cortado varían por región; esta es la referencia inicial de la guía.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01, F10.

### 09. Piccolo latte
**ID:** `piccolo` · **Categoría:** Con leche · **Arte:** short-glass  
**Descripción:** Un ristretto individual acompañado por leche texturizada.  
**Perfil:** ristretto-simple · **Recipiente:** vaso de 100 ml.  
**Ingredientes:** 14 g de ristretto y 60 ml de leche.

**Pasos:** 1) Extrae el ristretto individual. 2) Texturiza la leche hasta integrar una microespuma fina. 3) Vierte sobre el café. 4) Respeta el nivel de servicio del vaso.

**Calidad:** la bebida es cremosa; la presencia del café sigue siendo clara.  
**Ajuste:** verifica la cantidad servida cuando cambie el vaso.  
**Nota técnica:** el volumen final depende de la expansión de la leche.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01.

### 10. Flat white
**ID:** `flat-white` · **Categoría:** Con leche · **Arte:** cappuccino-cup  
**Descripción:** Un espresso doble con leche de textura fina y uniforme.  
**Perfil:** espresso-doble · **Recipiente:** taza de 180 ml.  
**Ingredientes:** 36 g de espresso y 110 ml de leche.

**Pasos:** 1) Extrae el espresso. 2) Incorpora una cantidad breve de aire a la leche. 3) Integra mediante el remolino. 4) Vierte de forma continua y termina con una superficie fina.

**Calidad:** la textura es sedosa; el café mantiene presencia.  
**Ajuste:** controla el aire inicial para obtener una superficie fina.  
**Nota técnica:** el tamaño y la textura diferencian esta receta de otras bebidas con leche.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01, F10.

### 11. Cappuccino
**ID:** `cappuccino` · **Categoría:** Con leche · **Arte:** cappuccino-cup  
**Descripción:** Un espresso con leche texturizada y una espuma cremosa.  
**Perfil:** espresso-simple · **Recipiente:** taza de 160 ml.  
**Ingredientes:** 18 g de espresso y 100 ml de leche fría.

**Pasos:** 1) Extrae el espresso. 2) Incorpora aire al inicio para formar una espuma fina y abundante. 3) Integra la leche con el remolino. 4) Vierte hasta el nivel de servicio.

**Calidad:** la espuma es cremosa; el café y la leche ofrecen un conjunto equilibrado.  
**Ajuste:** revisa la aireación si aparecen burbujas grandes o una separación rápida.  
**Nota técnica:** esta receta usa espresso medido por peso. La referencia del IEI describe 25 ml de espresso y 100 ml de leche; se presenta como referencia independiente en la Guía.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01, F06.

### 12. Caffè latte
**ID:** `latte` · **Categoría:** Con leche · **Arte:** latte-glass  
**Descripción:** Un espresso doble con una porción generosa de leche sedosa.  
**Perfil:** espresso-doble · **Recipiente:** taza de 280 ml.  
**Ingredientes:** 36 g de espresso y 190 ml de leche.

**Pasos:** 1) Extrae el espresso. 2) Texturiza la leche con una capa fina de microespuma. 3) Integra con un vertido uniforme. 4) Sirve con el borde limpio.

**Calidad:** el conjunto es suave y cremoso; el café permanece perceptible.  
**Ajuste:** respeta la cantidad de leche para conservar la intensidad definida.  
**Nota técnica:** la capacidad del recipiente contempla la expansión de la leche.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01, F10.

### 13. Latte macchiato
**ID:** `latte-macchiato` · **Categoría:** Con leche · **Arte:** latte-glass  
**Descripción:** Leche texturizada marcada con un espresso individual.  
**Perfil:** espresso-simple · **Recipiente:** vaso alto de 280 ml.  
**Ingredientes:** 180 ml de leche y 18 g de espresso.

**Pasos:** 1) Texturiza y vierte la leche en el vaso. 2) Prepara el espresso. 3) Añádelo lentamente sobre la leche. 4) Sirve con una cucharita.

**Calidad:** la superficie presenta una marca de café; la leche mantiene una textura fina.  
**Ajuste:** suaviza el vertido para preservar la presentación.  
**Nota técnica:** las capas son un efecto de construcción; pueden integrarse antes de beber.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01.

### 14. Café con leche
**ID:** `cafe-con-leche` · **Categoría:** Con leche · **Arte:** cappuccino-cup  
**Descripción:** Una mezcla equilibrada de café filtrado y leche caliente.  
**Perfil:** null · **Recipiente:** taza de 250 ml.  
**Ingredientes:** 100 ml de café filtrado recién preparado y 100 ml de leche.

**Pasos:** 1) Mide el café filtrado. 2) Calienta la leche con una aireación breve. 3) Integra ambos componentes. 4) Sirve enseguida.

**Calidad:** el sabor es uniforme; la leche aporta suavidad.  
**Ajuste:** prepara una nueva porción de filtrado cuando pierda su calidad sensorial.  
**Nota técnica:** esta versión utiliza café filtrado. La barra puede documentar otra variante con espresso.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01.

### 15. Mocha
**ID:** `mocha` · **Categoría:** Dulces y postres · **Arte:** latte-glass  
**Descripción:** Un espresso con chocolate y leche texturizada.  
**Perfil:** espresso-doble · **Recipiente:** taza de 280 ml.  
**Ingredientes:** 36 g de espresso, 20 g de salsa de chocolate y 150 ml de leche.

**Pasos:** 1) Mide la salsa en la taza. 2) Añade el espresso y mezcla hasta homogeneizar. 3) Texturiza la leche. 4) Integra con el vertido.

**Calidad:** el chocolate está bien disuelto; el café se percibe en el conjunto.  
**Ajuste:** calibra la cantidad cuando cambie la concentración de la salsa.  
**Nota técnica:** la ficha del producto determina la dosificación definitiva.  
**Ingredientes:** contiene leche; revisar los ingredientes y alérgenos de la salsa.  
**Fuentes:** E01, F11.

### 16. Café bombón
**ID:** `bombon` · **Categoría:** Dulces y postres · **Arte:** short-glass  
**Descripción:** Un espresso sobre una base dulce de leche condensada.  
**Perfil:** espresso-simple · **Recipiente:** vaso de 100 ml.  
**Ingredientes:** 25 ml de leche condensada y 18 g de espresso.

**Pasos:** 1) Mide la leche condensada en el vaso. 2) Prepara el espresso. 3) Viértelo suavemente sobre la base. 4) Sirve con cucharita para integrar.

**Calidad:** las capas quedan definidas; el vaso presenta el borde limpio.  
**Ajuste:** mantén constante la porción de leche condensada.  
**Nota técnica:** el servicio permite al huésped mezclar los componentes.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01.

### 17. Café vienés
**ID:** `vienes` · **Categoría:** Dulces y postres · **Arte:** short-glass  
**Descripción:** Un café caliente coronado con crema batida.  
**Perfil:** espresso-doble · **Recipiente:** taza de 180 ml.  
**Ingredientes:** 36 g de espresso, 40 ml de agua caliente y 25 g de crema batida.

**Pasos:** 1) Extrae el espresso. 2) Añade el agua medida. 3) Deposita la crema batida con suavidad. 4) Sirve inmediatamente.

**Calidad:** la crema conserva su forma; el café presenta una intensidad definida.  
**Ajuste:** comprueba la textura y la conservación de la crema antes del servicio.  
**Nota técnica:** esta es una variante propuesta; existen preparaciones regionales diferentes.  
**Ingredientes:** contiene leche; verificar la composición de la crema utilizada.  
**Fuentes:** E01.

### 18. Affogato
**ID:** `affogato` · **Categoría:** Dulces y postres · **Arte:** affogato-cup  
**Descripción:** Un helado de vainilla servido con espresso caliente.  
**Perfil:** espresso-simple · **Recipiente:** copa de 180 ml.  
**Ingredientes:** 60 g de helado de vainilla y 18 g de espresso.

**Pasos:** 1) Coloca el helado en una copa fría. 2) Extrae el espresso. 3) Vierte el café sobre el helado justo antes de servir. 4) Acompaña con una cuchara.

**Calidad:** el helado conserva parte de su estructura; el contraste de temperaturas se aprecia al servir.  
**Ajuste:** coordina la extracción y el montaje para reducir la espera.  
**Nota técnica:** el filtro de temperatura lo clasifica como preparación fría con componente caliente.  
**Ingredientes:** contiene leche; revisar la presencia de huevo u otros ingredientes en el helado real.  
**Fuentes:** E01, F10.

### 19. Iced latte
**ID:** `iced-latte` · **Categoría:** Fríos · **Arte:** iced-glass  
**Descripción:** Un espresso doble con leche fría y hielo.  
**Perfil:** espresso-doble · **Recipiente:** vaso de 400 ml.  
**Ingredientes:** 120 g de hielo, 150 ml de leche fría y 36 g de espresso.

**Pasos:** 1) Coloca el hielo en el vaso. 2) Añade la leche medida. 3) Extrae y vierte el espresso. 4) Sirve para integrar antes de beber.

**Calidad:** la bebida conserva intensidad; el vaso tiene espacio suficiente para mezclar.  
**Ajuste:** mantén el peso y el tamaño habitual del hielo para controlar la dilución.  
**Nota técnica:** el hielo ocupa volumen y se derrite durante el consumo.  
**Ingredientes:** contiene leche.  
**Fuentes:** E01, F10.

### 20. Shakerato
**ID:** `shakerato` · **Categoría:** Fríos · **Arte:** affogato-cup  
**Descripción:** Un espresso frío agitado con hielo para formar espuma.  
**Perfil:** espresso-doble · **Recipiente:** copa de 150 ml.  
**Ingredientes:** 36 g de espresso, 120 g de hielo y 8 g de azúcar.

**Pasos:** 1) Disuelve el azúcar en el espresso. 2) Coloca el hielo y el café en una coctelera apta para este servicio. 3) Cierra de forma segura y agita durante 10–15 s. 4) Cuela sobre una copa fría.

**Calidad:** la espuma es fina; la bebida llega bien fría.  
**Ajuste:** controla el tiempo de agitado y el estado del hielo para mantener la dilución.  
**Nota técnica:** la espuma se forma mediante la agitación. El equipo debe seguir el procedimiento seguro de su coctelera.  
**Ingredientes:** café, agua y azúcar.  
**Fuentes:** E01, F13.

---

## Anexo B. Guía de conocimiento

Cada módulo se implementa con los textos siguientes como bloques editables. Los enlaces a recetas se resuelven por sus identificadores.

### G01 · `hospitalidad` · El café y la hospitalidad

**Resumen:** El servicio de café forma parte de la experiencia completa del huésped.

**Contenido:** El barista confirma la bebida, el tamaño y la preferencia de leche con preguntas breves. Ajusta la explicación al interés de la persona y comunica el tiempo estimado cuando existe una espera. El tono es cordial, preciso y tranquilo.

En un desayuno, la coordinación con los alimentos importa tanto como la preparación. En una sobremesa, el café debe acompañar el ritmo de la mesa. En un evento, la calidad depende de la planificación de cantidades y reposiciones.

La identidad de Almasur y Surista aporta un marco de calidez, producto y atención. La guía utiliza ese marco para proponer buenas prácticas de servicio.

**Acciones:** confirmar; preparar; comprobar; servir; atender la respuesta del huésped.  
**Relacionadas:** americano, cortado, latte.  
**Fuentes:** F01, F02, F03; procedimiento propuesto E01.

### G02 · `producto` · Conocer el café

**Resumen:** La calidad empieza por conocer y conservar el producto.

**Contenido:** La ficha del café debe registrar el origen disponible, el productor o la cooperativa, el proceso, el tostador y la fecha de tueste. Las notas sensoriales describen percepciones; los ingredientes añadidos se informan por separado.

La frescura se administra mediante el calendario del tostador y la evaluación en taza. Cada café necesita una ventana de uso adecuada a su tueste y envasado. Registrar la apertura, mantener el envase protegido y cargar el molino según la demanda ayuda a conservarlo.

El barista comunica el perfil con palabras comprensibles: dulzor, acidez, cuerpo y final. Cuando falta un dato de origen, lo confirma con el proveedor.

**Acciones:** identificar el lote; registrar la apertura; evaluar; rotar.  
**Relacionadas:** espresso-simple, doppio.  
**Fuente de alcance formativo:** F04. Desarrollo editorial: E01.

### G03 · `extraccion` · Dosis, rendimiento y extracción

**Resumen:** Una receta escrita permite comparar y corregir las preparaciones.

**Contenido:** La dosis es el peso del café seco. El rendimiento es el peso de la bebida obtenida. Una proporción 1:2 relaciona ambos: 18 g de café para 36 g de espresso.

El tiempo informa cómo transcurrió la extracción. Se interpreta junto con el sabor, la distribución y el rendimiento. La receta inicial propone 25–30 s para los perfiles de espresso; cada café se calibra en la barra.

Una distribución irregular puede producir recorridos preferenciales del agua. La canasta limpia, la distribución uniforme y una compactación nivelada favorecen la repetibilidad.

**Acciones:** pesar; distribuir; extraer; medir; degustar; registrar.  
**Relacionadas:** doppio, ristretto, lungo.  
**Fuente:** F05 para el marco de proporción y práctica documentada; E01 para el procedimiento.

### G04 · `calibracion` · Calibrar durante el turno

**Resumen:** El ajuste se basa en la taza y en mediciones consistentes.

**Contenido:** Al iniciar el turno, confirma el café, la capacidad de la canasta y la receta vigente. Prepara una extracción, pesa la bebida y observa el flujo. Degusta una porción con el procedimiento higiénico de la barra.

Si cambia el resultado, revisa primero la dosis y la preparación de la canasta. Modifica una variable por vez y vuelve a evaluar. Una molienda más fina suele ofrecer mayor resistencia; una más gruesa suele facilitar el flujo. La respuesta real depende del equipo y del café.

Registra la receta resultante y comunícala en el relevo. Repite la revisión cuando cambie el lote o aparezca una desviación sensorial.

**Acciones:** comparar; ajustar; volver a preparar; registrar.  
**Relacionadas:** espresso-simple, doppio.  
**Fuente de alcance formativo:** F04. Desarrollo editorial: E01.

### G05 · `leche` · La leche y la microespuma

**Resumen:** La aireación y la integración determinan la textura de la bebida.

**Contenido:** Empieza con leche fría y una jarra limpia. Incorpora aire al comienzo y ajusta la posición de la lanza para formar un remolino. Integra la microespuma y vierte enseguida.

El objetivo operativo orientativo de la guía es 55–65 °C en taza. El termómetro ayuda a conocer el resultado del proceso. La temperatura de la jarra y la temperatura final de servicio corresponden a momentos diferentes.

El cappuccino admite una aireación mayor; el flat white utiliza una textura fina. Cada bebida requiere una porción definida. La leche restante se maneja conforme al protocolo de la barra; cada preparación comienza con una porción fresca.

**Acciones:** dosificar; airear; integrar; medir; verter; limpiar la lanza.  
**Relacionadas:** cappuccino, flat-white, latte.  
**Fuente de alcance formativo:** F04. Temperaturas propuestas y desarrollo: E01.

### G06 · `ingredientes` · Ingredientes y alternativas

**Resumen:** La información precisa permite responder a las preferencias y restricciones.

**Contenido:** Conocer una bebida implica conocer también sus salsas, helados, cremas y alternativas vegetales. La lista de ingredientes del producto real es la referencia para responder.

La leche sin lactosa conserva las proteínas de la leche. Las bebidas de almendra, soya o avena requieren revisar sus etiquetas y su aptitud para cada solicitud. El equipo determina el procedimiento de utensilios y contacto cruzado.

Ante una consulta por alergias, confirma la solicitud, revisa la ficha y coordina con la persona responsable. La respuesta se basa en lo que la operación puede asegurar.

**Acciones:** escuchar; revisar la etiqueta; confirmar el procedimiento; comunicar con precisión.  
**Relacionadas:** mocha, affogato, iced-latte.  
**Fuente:** E01; las etiquetas y fichas del proveedor completan este módulo.

### G07 · `sensorial` · Evaluar la taza

**Resumen:** El barista compara sensaciones y utiliza descripciones útiles.

**Contenido:** Observa el aroma y evalúa el dulzor, la acidez, el amargor, el cuerpo y el final. Un café puede presentar acidez frutal agradable; la evaluación busca su integración en el conjunto.

La astringencia se percibe como sequedad. Un aroma rancio puede orientar hacia la conservación del café o la limpieza del equipo. Estas señales requieren revisar el producto y el procedimiento antes de concluir la causa.

En bebidas con leche, comprueba además la temperatura, la uniformidad de la textura y la presencia del café. Registra observaciones concretas para que otro barista pueda comparar.

**Acciones:** oler; probar; describir; comparar; ajustar.  
**Relacionadas:** doppio, cortado, cappuccino.  
**Fuente de alcance formativo:** F04. Desarrollo editorial: E01.

### G08 · `higiene` · La estación de trabajo

**Resumen:** Una estación ordenada sostiene la calidad durante todo el servicio.

**Contenido:** Prepara los utensilios, las balanzas, las jarras y los paños de uso diferenciado. Manipula las superficies de contacto con alimentos conforme al protocolo del establecimiento.

Limpia y purga la lanza después de cada uso. Conserva las canastas y los portafiltros limpios. Aplica el procedimiento de limpieza indicado por el fabricante para la máquina y los molinos.

Los alimentos abiertos requieren identificación y conservación según su etiqueta y el protocolo de cocina. El hielo se manipula con un utensilio adecuado. Los tiempos, temperaturas y productos de limpieza concretos se incorporan una vez confirmados por el responsable de la operación.

**Acciones:** preparar; separar utensilios; limpiar; identificar; reponer; registrar incidencias.  
**Relacionadas:** iced-latte, shakerato.  
**Fuente:** E01 y los procedimientos del fabricante y establecimiento que se incorporen.

### G09 · `servicio` · Desayunos, sobremesas y eventos

**Resumen:** La organización del flujo permite servir con consistencia.

**Contenido:** En el desayuno, anticipa la demanda y organiza los pedidos por mesa y secuencia de preparación. Prepara cada extracción próxima a su entrega y coordina las bebidas con cocina.

Para una sobremesa, ofrece una recomendación breve según el postre y la preferencia de intensidad. Como propuesta, un espresso equilibrado puede acompañar el cannoli; un cortado puede acompañar el cheesecake de pistacho. Estas combinaciones se validan degustando los productos reales.

En eventos, calcula las cantidades y define las reposiciones. Si se utiliza café filtrado, documenta la receta, la hora de preparación y la conservación. Como ejercicio de preparación, 15 g de café y 250 g de agua permiten estudiar la proporción; la molienda, el tiempo y el servicio se ajustan al método disponible.

**Acciones:** anticipar; ordenar; coordinar; comprobar; entregar.  
**Relacionadas:** americano, cafe-con-leche, affogato.  
**Fuentes:** F03 y F14 para el contexto; recomendaciones E01.

### G10 · `estandares` · Referencias y receta de la casa

**Resumen:** Una referencia técnica se convierte en receta operativa mediante validación.

**Contenido:** La SCA organiza formación en habilidades de barismo, preparación y evaluación del café. La guía toma esos temas como marco de aprendizaje.

La publicación de la SCA sobre la evolución del espresso describe prácticas observadas, como el uso de balanzas y la proporción 1:2. Su valor aquí es orientar la calibración.

El IEI publica una referencia italiana por volumen: aproximadamente 25 ml de espresso; para el cappuccino, la combinación de espresso y leche se describe en su documentación. La receta por peso de esta app constituye una propuesta propia.

Para convertir una ficha en «Receta de la casa», el equipo debe validar el café, la dosis, el rendimiento, la leche, la vajilla y el resultado sensorial. Registrar responsable y fecha permite mantener una versión vigente.

**Acciones:** consultar la fuente; adaptar; degustar; documentar; aprobar.  
**Relacionadas:** espresso-simple, cappuccino.  
**Fuentes:** F04, F05, F06.

### B.1. Glosario

| ID | Término | Definición inicial |
|---|---|---|
| `dosis` | La dosis | El peso de café seco utilizado en una preparación |
| `rendimiento` | El rendimiento | El peso de la bebida obtenida; en espresso se mide en la taza |
| `ratio` | La proporción | La relación entre las cantidades definidas por la receta |
| `molienda` | La molienda | El tamaño y la distribución de las partículas de café |
| `extraccion` | La extracción | El proceso por el que el agua disuelve y transporta compuestos del café |
| `canalizacion` | La canalización | La formación de recorridos preferenciales del agua a través del café |
| `microespuma` | La microespuma | La espuma de burbujas finas integrada en la leche |
| `cuerpo` | El cuerpo | La sensación de peso y textura de la bebida en la boca |
| `acidez` | La acidez | Una dimensión del sabor que puede recordar frutas y aportar vivacidad |
| `astringencia` | La astringencia | La sensación de sequedad o aspereza en la boca |
| `trazabilidad` | La trazabilidad | La información que permite seguir el origen y el recorrido del producto |
| `calibracion` | La calibración | El ajuste de la preparación mediante medición y evaluación sensorial |

---

## Anexo C. Preparación para postulantes

### C.1. Presentación y comportamiento

Texto de entrada:

**«Prepárate para conversar sobre el café, demostrar tu técnica y atender con criterio de hospitalidad».**

Texto de alcance:

**«Esta sección ofrece una preparación orientativa. Las preguntas y situaciones sirven para estudiar; el equipo del hotel define su proceso de selección».**

La página muestra cuatro grupos de preguntas: La técnica, El producto, El servicio y La operación. Cada pregunta abre un diálogo. Dentro, «Ver una respuesta orientativa» despliega la respuesta y los puntos que conviene demostrar. La persona puede cerrar y regresar al grupo conservando su posición.

Las respuestas sirven como estructura de estudio. Cada postulante debe vincularlas con su experiencia real.

### C.2. Dieciocho preguntas y respuestas

#### P01 · `p01` · ¿Cómo calibrarías el espresso al comenzar el turno?
**Categoría:** tecnica · **Guía relacionada:** calibracion.  
**Respuesta:** Confirmaría el café y la receta vigente, comprobaría la dosis y prepararía una extracción. Mediría el rendimiento y el tiempo, evaluaría el sabor y ajustaría una variable por vez. Dejaría registrada la receta que el equipo utilizará.  
**Demostrar:** la lectura de una balanza; el criterio para ajustar; el registro.

#### P02 · `p02` · ¿Qué significa una proporción 1:2?
**Categoría:** tecnica · **Guía relacionada:** extraccion.  
**Respuesta:** Relaciona el peso del café seco con el peso del espresso obtenido. Por ejemplo, 18 g de café para 36 g de bebida. Es una referencia que se calibra según el café y el sabor buscado.  
**Demostrar:** distinguir dosis, rendimiento y volumen de taza.

#### P03 · `p03` · ¿Cómo diferenciarías un cortado, un cappuccino y un latte?
**Categoría:** tecnica · **Guía relacionada:** leche.  
**Respuesta:** Explicaría la cantidad de leche, el tamaño de servicio y la textura definida para cada bebida. El cortado mantiene una proporción pequeña de leche; el cappuccino ofrece una espuma cremosa; el latte utiliza una porción mayor de leche.  
**Demostrar:** conocer las fichas y la vajilla.

#### P04 · `p04` · ¿Cómo consigues una microespuma sedosa?
**Categoría:** tecnica · **Guía relacionada:** leche.  
**Respuesta:** Empiezo con leche fría, dosifico según la bebida e incorporo aire al comienzo. Luego integro mediante un remolino, controlo la temperatura y vierto de inmediato. Al terminar, limpio y purgo la lanza.  
**Demostrar:** la aireación, la integración y la limpieza.

#### P05 · `p05` · ¿Qué revisarías si el café resulta muy ácido o áspero?
**Categoría:** tecnica · **Guía relacionada:** sensorial.  
**Respuesta:** Compararía la taza con el perfil del café y revisaría la dosis, la distribución, el rendimiento, el tiempo y la molienda. La sensación describe un resultado; para identificar la causa haría un ajuste controlado y volvería a degustar.  
**Demostrar:** observaciones concretas y cambios de una variable.

#### P06 · `p06` · ¿Cómo mantendrías consistente un iced latte?
**Categoría:** tecnica · **Guía relacionada:** extraccion.  
**Respuesta:** Mantendría el rendimiento del espresso, la cantidad de leche y el peso y tamaño habitual del hielo. Utilizaría el vaso definido y serviría al terminar, porque la dilución cambia con el tiempo.  
**Demostrar:** pesar y respetar el orden de preparación.

#### P07 · `p07` · ¿Qué deberías saber del café que estás sirviendo?
**Categoría:** producto · **Guía relacionada:** producto.  
**Respuesta:** El origen disponible, el proceso, el tostador, la fecha de tueste y el perfil sensorial. También la receta vigente y su comportamiento con leche. Los datos pendientes los confirmaría con el proveedor o responsable.  
**Demostrar:** una descripción breve y verificable.

#### P08 · `p08` · ¿Cómo responderías a una consulta por alergia?
**Categoría:** producto · **Guía relacionada:** ingredientes.  
**Respuesta:** Confirmaría la solicitud, revisaría las fichas de ingredientes y consultaría el protocolo de preparación y contacto cruzado. Comunicaría al huésped lo que el equipo puede asegurar antes de preparar la bebida.  
**Demostrar:** consultar etiquetas y coordinar con el responsable.

#### P09 · `p09` · ¿Qué diferencia hay entre leche sin lactosa y una bebida vegetal?
**Categoría:** producto · **Guía relacionada:** ingredientes.  
**Respuesta:** La leche sin lactosa conserva las proteínas de la leche. Una bebida vegetal tiene otra base y una lista de ingredientes propia. Revisaría el producto concreto y la necesidad del huésped para proponer una opción adecuada.  
**Demostrar:** precisión al informar los ingredientes.

#### P10 · `p10` · ¿Cómo conservarías el café abierto?
**Categoría:** producto · **Guía relacionada:** producto.  
**Respuesta:** Identificaría la apertura y el lote, seguiría las indicaciones del tostador y protegería el café del ambiente. Cargaría el molino según el consumo previsto y usaría la evaluación en taza para observar su evolución.  
**Demostrar:** rotación e identificación.

#### P11 · `p11` · ¿Qué entiendes por café de especialidad en el servicio?
**Categoría:** producto · **Guía relacionada:** estandares.  
**Respuesta:** Un compromiso con las características del producto, su información disponible y una preparación que permita apreciarlas. En la barra lo demostraría con trazabilidad, calibración, conservación y consistencia al servir.  
**Demostrar:** conectar el producto con acciones observables.

#### P12 · `p12` · ¿Qué tono de atención propondrías para este hotel?
**Categoría:** servicio · **Guía relacionada:** hospitalidad.  
**Respuesta:** Un trato cálido, tranquilo y preciso. Confirmaría las preferencias con preguntas breves, explicaría cuando el huésped lo necesite y cuidaría el momento de entrega. Relacionaría el café con la propuesta gastronómica del lugar.  
**Demostrar:** una recomendación natural.

#### P13 · `p13` · ¿Cómo recomendarías un café a alguien que busca suavidad?
**Categoría:** servicio · **Guía relacionada:** hospitalidad.  
**Respuesta:** Preguntaría si prefiere suavidad mediante leche o mediante una bebida más larga. A partir de esa preferencia ofrecería un latte o un americano, indicando su tamaño y composición.  
**Demostrar:** aclarar qué significa «suave» para esa persona.

#### P14 · `p14` · ¿Cómo atenderías una bebida que el huésped quiere cambiar?
**Categoría:** servicio · **Guía relacionada:** hospitalidad.  
**Respuesta:** Escucharía qué desea ajustar, confirmaría el resultado esperado y coordinaría una nueva preparación según la política del establecimiento. Al entregar, comprobaría que responde a la preferencia acordada.  
**Demostrar:** escuchar y resolver con calma.

#### P15 · `p15` · ¿Cómo ofrecerías un café en inglés?
**Categoría:** servicio · **Guía relacionada:** hospitalidad.  
**Respuesta:** Empezaría con una pregunta breve, como «Would you like an espresso or a coffee with milk?». Confirmaría la leche, el tamaño y la disponibilidad. Usaría el vocabulario que conozco con claridad y pediría apoyo cuando corresponda.  
**Demostrar:** confirmar un pedido completo.

#### P16 · `p16` · ¿Cómo organizarías varios pedidos a la vez?
**Categoría:** operacion · **Guía relacionada:** servicio.  
**Respuesta:** Identificaría las mesas y la secuencia, prepararía la estación y coordinaría la salida con el equipo. Agruparía tareas compatibles, mantendría las extracciones próximas a su entrega y comunicaría los tiempos.  
**Demostrar:** orden, prioridades y coordinación.

#### P17 · `p17` · ¿Qué dejarías registrado al terminar el turno?
**Categoría:** operacion · **Guía relacionada:** higiene.  
**Respuesta:** La receta vigente, el lote de café, las aperturas relevantes, las incidencias del equipo, las reposiciones y las tareas de limpieza realizadas. El relevo necesita información clara para continuar el servicio.  
**Demostrar:** una entrega de turno concisa.

#### P18 · `p18` · ¿Qué harías con una preparación que todavía estás aprendiendo?
**Categoría:** operacion · **Guía relacionada:** estandares.  
**Respuesta:** Explicaría mi experiencia actual, consultaría la ficha y practicaría con acompañamiento hasta reproducir el resultado esperado. Utilizaría mediciones y observaciones para mostrar el progreso.  
**Demostrar:** honestidad, aprendizaje y seguimiento de procedimientos.

### C.3. Cinco situaciones de atención

**S01 · La hora de desayuno**  
Situación: llegan varios pedidos mientras cocina está terminando las mesas.  
Acciones: identificar los pedidos; confirmar las preferencias; organizar la secuencia; coordinar las entregas; informar la espera.  
Frase: «Estoy preparando sus bebidas y coordinando la salida con su desayuno».

**S02 · Una preferencia de temperatura**  
Situación: el huésped pide su café con leche más caliente.  
Acciones: confirmar la preferencia; aplicar el procedimiento de la barra; controlar la temperatura; entregar con cuidado.  
Frase: «Lo prepararé con la temperatura que acordamos y se lo serviré enseguida».

**S03 · Una consulta por ingredientes**  
Situación: una persona pregunta si puede consumir una bebida con una restricción alimentaria.  
Acciones: escuchar; revisar las etiquetas; consultar el procedimiento de utensilios; confirmar la posibilidad de preparación.  
Frase: «Voy a revisar los ingredientes y el procedimiento con el equipo para darle una respuesta precisa».

**S04 · Una sobremesa con postre**  
Situación: una mesa pide una recomendación para acompañar un postre.  
Acciones: preguntar la intensidad preferida; identificar el postre; sugerir una opción; coordinar el momento de servicio.  
Frase: «Para acompañarlo, le sugiero un espresso equilibrado; también podemos prepararlo con una pequeña porción de leche».

**S05 · Un cambio en la extracción**  
Situación: el espresso comienza a salir con un flujo diferente durante el turno.  
Acciones: revisar la dosis y la canasta; comparar el rendimiento; ajustar la molienda; degustar; registrar y avisar al relevo.  
Frase de coordinación: «Estoy ajustando la receta para mantener el resultado que estamos sirviendo».

### C.4. Lista personal de preparación

Identificadores estables `prep-01` a `prep-12`:

1. Puedo explicar la dosis y el rendimiento.
2. Puedo interpretar una proporción de espresso.
3. Conozco las diferencias entre cortado, cappuccino, flat white y latte.
4. Puedo describir cómo se forma la microespuma.
5. Conozco la información que debe tener una ficha de café.
6. Puedo explicar el criterio para calibrar.
7. Sé dónde confirmar los ingredientes de una bebida.
8. Puedo describir una atención cálida y precisa.
9. Puedo resolver verbalmente una solicitud de cambio.
10. Puedo confirmar un pedido sencillo en inglés.
11. Puedo explicar cómo organizaría varios pedidos.
12. Puedo presentar mi experiencia real y mis objetivos de aprendizaje.

Mostrar «X de 12 temas preparados». La selección es un marcador de estudio personal.

### C.5. Ocho frases de atención en inglés

| Español | Inglés |
|---|---|
| ¿Le gustaría un espresso o un café con leche? | Would you like an espresso or a coffee with milk? |
| ¿Qué tipo de leche prefiere? | What kind of milk would you prefer? |
| ¿Lo prefiere caliente o con hielo? | Would you like it hot or iced? |
| ¿Prefiere un café corto o uno más largo? | Would you prefer a short coffee or a longer one? |
| Voy a confirmar los ingredientes. | I’ll check the ingredients for you. |
| Voy a confirmar si tenemos descafeinado. | I’ll check whether decaf is available. |
| Su bebida estará lista en unos minutos. | Your drink will be ready in a few minutes. |
| ¿Le gustaría el café junto con el postre? | Would you like your coffee with dessert? |

---

## 14. Fuentes y alcances

Fecha de consulta: 11 de noviembre de 2026. Los enlaces constituyen referencias editoriales; la aplicación carga su contenido desde archivos locales.

| ID | Fuente | Alcance dentro de la guía |
|---|---|---|
| E01 | Elaboración editorial de este plan | Cantidades iniciales, procedimientos propuestos, aprendizaje, preguntas, escenarios y criterios de producto |
| F01 | [Almasur Providencia](https://www.almasurhoteles.cl/es/providencia) | Posicionamiento del hotel y público al que se dirige |
| F02 | [Surista](https://surista.cl/) | Identidad del sur y declaración de café de especialidad |
| F03 | [Reuniones y eventos de Almasur](https://www.almasurhoteles.cl/es/providencia/reuniones-y-eventos) | Existencia de espacios para reuniones y eventos |
| F04 | [SCA Coffee Skills Program](https://education.sca.coffee/coffee-skills-program) y [catálogo de cursos](https://education.sca.coffee/s/SCA-CSP-Course-Catalog.pdf) | Áreas de formación del barista; el enlace del programa fue localizado y el catálogo se consultó en la investigación |
| F05 | [SCA: Defining the Ever-Changing Espresso](https://sca.coffee/sca-news/25-magazine/issue-3/defining-ever-changing-espresso-25-magazine-issue-3-zyx36) | Prácticas documentadas de extracción y proporciones, con su contexto histórico |
| F06 | [IEI: Certified Italian Espresso and Cappuccino](https://iei.coffee/en/espresso-italiano-certificato/) | Referencias italianas publicadas de espresso y cappuccino |
| F07 | [Vue: Composables](https://vuejs.org/guide/reusability/composables) | Encapsulación y reutilización de lógica con Composition API |
| F08 | [Vue Router: History modes](https://router.vuejs.org/guide/essentials/history-mode) | Navegación hash en un sitio estático |
| F09 | [MDN: dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) | Diálogo nativo y comportamiento modal |
| F10 | [La Marzocco: Building a house menu](https://www.lamarzocco.com/uk/en/building-a-house-menu-with-the-linea-mini/) y [Nespresso: Coffee recipes](https://www.nespresso.com/us/en/coffee-recipes) | Familias de bebidas y convenciones de preparación; las cantidades del plan son propias |
| F11 | [La Marzocco: Building Espresso Drinks](https://www.lamarzocco.com/ca/en/building-espresso-drinks/) | Construcción del americano y el mocha |
| F12 | [La Marzocco: Tasting Espresso Styles](https://home.lamarzoccousa.com/tasting-espresso-styles/) | Ristretto y lungo como estilos de extracción |
| F13 | [Lavazza: Caffè shakerato](https://www.lavazza.it/it/i-segreti-del-caffe/caffe-shakerato-ricetta) | Construcción de una bebida fría agitada |
| F14 | [Carta de Surista Providencia](https://surista.cl/providencia/carta) | Los postres citados como contexto de recomendaciones |
| F15 | `REFERENCIA_DISENO_HONEY.md`, archivo adjunto del usuario | Lenguaje editorial, objetos recortados, etiquetas, composición artística y animaciones de referencia |

Los registros que agrupan dos enlaces conservan su identificador y almacenan ambos en `links`. Las referencias de las recetas y módulos apuntan a esos identificadores exactos. E01 lleva como `localFile` este plan; F15 lleva la referencia Honey.

En la aplicación, los campos `links` producen enlaces externos con nombre de fuente. El campo `localFile` se muestra como referencia textual al documento de elaboración. Mostrar el alcance de cada fuente junto a su título permite entender qué parte del contenido respalda.

---

## 15. Encargo listo para el agente implementador

> Implementa Alma de Barista siguiendo este documento y la referencia Honey adjunta. Entrega una app estática en Vue 3 y TypeScript, con cuatro destinos, 20 recetas completas, diez módulos de guía y una sección de preparación de entrevistas con el contenido especificado.
>
> Resuelve primero los datos y los contratos; luego construye la navegación y el sistema visual. Usa la estructura modular propuesta y componentes con responsabilidades delimitadas. Mantén las cantidades y los pasos fuera de los componentes visuales, en archivos de contenido tipados.
>
> Implementa la experiencia compacta como una composición específica: filas de recetas, navegación inferior, filtros en hoja inferior y detalle de lectura con cantidades al comienzo. En el modo amplio utiliza accesos ilustrados y un panel lateral con composición artística.
>
> Aplica la paleta, los tamaños y las duraciones definidos. Conserva el lenguaje de Honey mediante ilustraciones SVG recortadas, etiquetas crema, contorno espresso, un arco orgánico y títulos serif. El contenido operativo tiene prioridad visual.
>
> Implementa la búsqueda y los filtros locales, los favoritos y el avance de estudio en el navegador. Resuelve los estados vacíos, los enlaces directos, el foco, el botón Atrás y el movimiento reducido. El contenido inicial debe aparecer completo y marcado con su estado editorial.
>
> Finaliza con la comprobación de tipos, la compilación, la revisión manual de los recorridos descritos y un README de ejecución y edición. Las decisiones de estilo pendientes se resuelven dentro del sistema visual de este plan.



