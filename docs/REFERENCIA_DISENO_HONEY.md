# Referencia de diseño Honey para Recetario Barismo

## Alcance y evidencia

Revisión del proyecto `C:\Users\admin\OneDrive\Documentos\honey`, realizada el 11 de noviembre de 2026. Este documento describe la implementación encontrada en los componentes y estilos, junto con una inspección visual directa de `miel-cerezo.png`. No se ejecutó la aplicación en un navegador: las medidas, tiempos e interacciones se verificaron en el código; la composición de la ilustración de cerezo se examinó como imagen.

Fuentes principales:

- `src/components/HoneyQuickView.jsx` y `src/styles/honey-quick-view.css`: modal de detalle.
- `src/pages/Home.jsx` y `src/styles/home-art.css`: objetos clickeables de la portada.
- `src/components/HoneyLabel.jsx` y `src/styles/honey-label.css`: rótulos bajo las imágenes.
- `src/components/HoneyCollection.jsx` y `src/styles/catalog.css`: catálogo y pequeñas tarjetas emergentes.
- `src/styles.css`: tipografía y colores generales.
- `src/data/honeyContent.js`: identidad de las tres variedades.
- `public/art/README.md`: dirección artística documentada del fondo.

**Distinción de formato:** los objetos ilustrados de miel que abren los modales son imágenes PNG recortadas con transparencia, no SVG. Su delineado exterior y su respuesta al interactuar se construyen con filtros CSS. Usar SVG para Recetario Barismo sería una adaptación de este lenguaje gráfico. Una imagen sin fondo puede tener rellenos y volumen dentro del objeto; no significa que deba ser únicamente un dibujo de líneas.

## 1. Lenguaje visual general

La interfaz combina una composición editorial de producto con ilustraciones orgánicas y un tratamiento de etiquetas cercano a una estampa o sticker. Hay dos registros complementarios: la portada clara, cálida y pictórica; y el detalle sobre fondos profundos, donde la imagen y la tipografía adquieren protagonismo.

Los objetos de la portada no están encerrados en tarjetas rectangulares convencionales. La silueta de la ilustración queda libre sobre el paisaje. Su contorno negro, sombra dura y etiqueta inferior hacen que parezcan piezas recortadas y colocadas sobre una composición artística. Al abrir un detalle, ese objeto pasa a una presentación más teatral: fondo oscuro, arco incompleto, palabra vertical detrás y nombre horizontal superpuesto.

## 2. Modal: estructura y proporciones

El detalle es un panel lateral anclado a la derecha, sin margen ni borde, de altura completa (`100dvh`). En escritorio mide el menor valor entre 940 px y el 94 % del ancho de la ventana. No tiene esquinas redondeadas. Una sombra amplia hacia la izquierda (`-24px 0 90px #16110f40`) lo separa de la página.

El interior se divide en dos columnas de proporción `1.05fr 1fr`. La izquierda contiene la composición artística y la derecha contiene información y acciones. La columna artística tiene una altura mínima de 480 px. El contenido informativo queda centrado verticalmente, con bastante espacio superior y márgenes asimétricos. El panel tiene desplazamiento vertical interno y limita la propagación del scroll.

La página de fondo se oscurece con `#17201980` y recibe desenfoque de 6 px. Esto mantiene la relación espacial con el objeto seleccionado mientras lleva la atención al detalle.

## 3. Entrada, salida y secuencia de movimiento

| Elemento | Movimiento | Duración y demora |
| --- | --- | --- |
| Panel completo | Entra desde `translateX(100%)` hasta su posición final; opacidad de 0.4 a 1 | 650 ms, curva `cubic-bezier(.2,.75,.2,1)` |
| Fondo oscurecido | Aparece por opacidad de 0 a 1 | 500 ms |
| Palabra vertical «MIEL» | Desciende desde 65 px por encima; aparece hasta opacidad 0.65 | 800 ms, demora de 180 ms |
| Nombre horizontal | Entra desde 90 px a la derecha y aparece por opacidad | 800 ms, demora de 300 ms |
| Cierre del panel | Se desplaza completamente a la derecha y desaparece | 350 ms, `ease-in` |
| Fondo durante el cierre | Revierte su aparición | 350 ms |

La jerarquía temporal es clara: primero se presenta el panel, luego cae la palabra vertical y después se desliza el nombre horizontal. Las animaciones tipográficas usan el easing predeterminado de CSS; no declaran una curva propia. El cierre espera 360 ms antes de desmontar el modal para permitir que termine la salida.

La imagen y el arco no tienen una animación independiente de entrada en estos estilos. Se mueven con el panel. No hay un trazo animado que dibuje el arco ni un rebote de la ilustración. Esto importa al reproducir fielmente la referencia.

Con `prefers-reduced-motion: reduce` se desactivan las animaciones de entrada y las transiciones indicadas. El cierre en JavaScript pasa directamente al estado cerrado.

## 4. Composición artística y capas

En la esquina superior izquierda aparece una línea editorial pequeña: «CASA MIEL / LA COLECCIÓN». Está en mayúsculas, color de acento, tamaño aproximado de 0.58 rem y espaciado amplio de 0.22 em. Introduce una sensación de serie o colección.

La composición central se construye por capas: fondo oscuro con un gradiente blanco casi imperceptible, arco y palabra vertical al fondo, ilustración del producto en el centro y nombre horizontal por delante. La textura y el formato completan el pie de la composición. Los elementos decorativos están ocultos para tecnologías de asistencia, mientras el nombre semántico se repite en el título de información.

### Palabra vertical

«MIEL» se dispone con `writing-mode: vertical-rl` y `text-orientation: upright`: cada letra permanece derecha y las letras se apilan verticalmente. No es una palabra horizontal girada 90 grados.

Usa Georgia o serif, tamaño adaptable entre 3 y 5 rem, interlineado 1 y espaciado de -0.08 em. Se sitúa aproximadamente a un 6 % del borde izquierdo y un 15 % desde arriba. Su color es el acento de la variedad, con opacidad 0.65. Queda detrás de la ilustración, de modo que puede ser parcialmente tapada y funciona como recurso compositivo.

### Nombre horizontal

El nombre —«Multifloral», «De cerezo» o «De avellano»— se presenta en Fraunces, con alternativa Georgia, cursiva y peso 500. Su tamaño varía entre 2.6 y 4.5 rem; el interlineado es 0.98 y el espaciado -0.065 em. El efecto es compacto, expresivo y editorial.

Se ubica sobre el sector inferior de la ilustración, al 12 % desde la izquierda y al 18 % desde abajo, ocupando un ancho del 85 %. Está en una capa frontal. Lleva sombra suave oscura y un contorno negro de 2 px, pintado detrás del relleno mediante `paint-order: stroke fill`. Este borde ayuda a separar las letras de las zonas claras de la imagen.

Debajo aparece una línea pequeña en mayúsculas: textura y formato. Usa el acento, tamaño de 0.66 rem y espaciado de 0.16 em. No compite visualmente con el nombre.

### Arco sobre la imagen

El arco es una línea irregular abierta que asoma detrás de la ilustración, como un halo orgánico. Su contenedor tiene un ancho del 85 % de la zona artística y proporción cuadrada. No forma un marco cerrado ni una superficie rellena.

Se obtiene con un borde de 2 px del color de acento, opacidad 0.32 y radios asimétricos (`47% 53% 49% 51% / 52% 46% 54% 48%`). La forma se gira -5 grados. Una máscara cónica conserva solo una parte de la circunferencia, con extremos que se desvanecen: comienza desde -28 grados y transita por puntos de transparencia a 0, 12, 116 y 148 grados. El resultado evita la perfección geométrica de un círculo y acompaña la imagen sin encerrarla.

### Ilustración

En el modal, la imagen ocupa el 87 % del ancho de su zona, con altura máxima de 57 vh y `object-fit: contain`. Se gira -7 grados y recibe una sombra suave descendente de 25 px, con desenfoque de 20 px. El contorno duro de sticker utilizado en la portada no se aplica aquí de la misma manera.

La imagen de cerezo inspeccionada muestra un pote abierto de miel clara y cremosa, una cuchara de madera diagonal que levanta una cinta espesa de miel, flores de cerezo, ramas y pétalos suspendidos. Tiene modelado de volumen, luces, transparencias del envase y pinceladas visibles: una ilustración pictórica de producto con detalle abundante. La forma exterior es recortada y deja ver el fondo del sitio alrededor del conjunto. No es un pictograma monocromo ni un icono lineal simple.

## 5. Paletas por variedad

| Variedad | Fondo del modal | Acento | Nombre ilustrado |
| --- | --- | --- | --- |
| Multifloral | Verde bosque `#27392f` | Dorado cálido `#f3c768` | Crema dorada `#ffe3a0` |
| Cerezo | Ciruela oscuro `#34202d` | Rosa `#eea6bc` | Blanco `#ffffff` |
| Avellano | Marrón profundo `#3d2d25` | Arena `#d7b58b` | Marfil `#fff0d4` |

El texto principal utiliza blanco cálido `#fff8ef`; las descripciones, `#f4e9e0`; las notas secundarias, `#e1d3c9`. La identidad de cada variedad se mantiene mediante fondo, acento y nombre, sin cambiar la estructura.

## 6. Información, acciones y cierre

La columna de lectura comienza con una frase corta en mayúsculas y tracking amplio. Sigue un título Fraunces de 1.9 a 2.7 rem, una frase evocadora en Georgia cursiva y acento, una descripción de 0.91 rem con interlineado 1.75 y una nota de uso algo menor.

Un enlace subrayado con flecha diagonal lleva al detalle completo. Una línea divisoria tenue separa la información del precio y el selector de formato. La acción principal ocupa todo el ancho, tiene un mínimo de 54 px de alto, esquinas apenas redondeadas de 3 px y fondo de acento con texto oscuro. En hover aumenta su brillo durante 200 ms.

El botón de cierre es circular, de 44 × 44 px, situado arriba a la derecha. Tiene borde blanco translúcido y fondo oscuro semitransparente. Se puede cerrar con ese botón, Escape o un clic fuera del panel. El modal usa `dialog.showModal()`, bloquea el desplazamiento del documento y coloca el foco inicial en cerrar. Al salir devuelve el foco al objeto que lo abrió. Los controles muestran un contorno de foco de 3 px en color de acento.

## 7. Adaptación móvil del modal

A 600 px o menos, el modal ocupa todo el ancho y las columnas se convierten en una pila vertical: arte arriba e información debajo. Se mantiene la entrada desde la derecha. La zona artística puede crecer y encogerse, con mínimo de 120 px y máximo de 440 px; el contenido total puede desplazarse.

La composición se coloca dentro de un área que comienza a 56 px desde arriba para reservar la cabecera. La imagen pasa a 68 % de ancho y 84 % de altura de esa área. La palabra vertical se mueve al 9 % desde la izquierda y adapta el tamaño a la altura del contenedor. El nombre horizontal comienza al 20 % desde la izquierda, ocupa 78 % de ancho y escala entre 1.7 y 3.7 rem mediante unidades de altura de contenedor.

La información recibe márgenes laterales de 20 px y respeta la zona segura inferior del dispositivo. El título queda en 1.65 rem; la descripción, en 0.82 rem; las notas, en 0.75 rem. La acción conserva una altura mínima de 48 px. Estos tamaños describen Honey: para un recetario usado durante turnos conviene evaluar un cuerpo mayor y dar prioridad a cantidades y pasos.

## 8. Objetos clickeables de la portada

Cada variedad es un botón completo que contiene una imagen y su etiqueta, sin fondo rectangular ni borde del botón. Los tres se disponen en una cuadrícula de columnas iguales. La imagen ocupa el 82 % del ancho disponible y conserva su silueta con `object-fit: contain`.

Detrás de cada objeto hay un resplandor crema muy difuso, formado por un gradiente radial elíptico y blur de 12 px. Su misión es separar el recorte del paisaje sin construir una tarjeta opaca.

### Delineado y sombra

El contorno exterior se crea acumulando cuatro `drop-shadow` negros sin desenfoque: 3 px hacia derecha, izquierda, arriba y abajo. Una quinta sombra de 6 px horizontal y 8 px vertical produce un desplazamiento negro duro. Los filtros siguen la transparencia de la imagen, por lo que el borde abraza la silueta completa en lugar de dibujar un rectángulo.

En móvil el contorno se reduce a aproximadamente 1 px y la sombra dura a 3 × 4 px. Esto mantiene la presencia gráfica sin engrosar excesivamente objetos pequeños.

### Respuesta al hover y al foco

La ilustración sube 6 px, gira -3 grados y aumenta a escala 1.08. El punto de transformación está en el centro horizontal y al 65 % de su altura, de modo que el movimiento se siente apoyado en la zona baja del objeto.

La transición dura 350 ms con curva `cubic-bezier(.2,.7,.3,1)`. El contorno negro grueso se sustituye por un borde turquesa translúcido, una sombra oscura más corta y un resplandor turquesa suave (`#00ffe0` con distintas transparencias). El objeto activo gana prioridad de apilamiento para no quedar tapado por los vecinos.

Cada botón tiene nombre accesible y anuncia que abre un diálogo. El foco visible recibe un contorno adicional de 3 px. En pantallas táctiles la apertura se realiza al tocar: no requiere hover. Con movimiento reducido se eliminan la transformación y la transición.

## 9. Etiquetas bajo las ilustraciones

La etiqueta es una pequeña pieza crema casi opaca (`#fff8e8fa`) con borde negro de 3 px, radios desiguales (`5px 18px 6px 16px`) y sombra negra dura de 5 × 6 px. Las esquinas alternan curvas cortas y largas, dando una apariencia manual sin deformar el texto.

Contiene dos niveles centrados: arriba, índice y textura —por ejemplo «01 / DURA»— en mayúsculas pequeñas y espaciadas; debajo, el nombre en Georgia, peso normal y 1.1 rem. Al interactuar, el fondo cambia a menta translúcido y la sombra se acorta, con un brillo turquesa discreto. La transición de color y sombra dura 350 ms.

En móvil se reducen borde, sombra y relleno; el nombre varía entre 0.78 y 0.95 rem. La etiqueta conserva un ancho acotado y no se convierte en una tarjeta grande.

## 10. Tarjetas emergentes del catálogo

El catálogo usa los mismos recortes, pero la interacción no abre el modal de portada: revela un pequeño globo informativo sobre el objeto. Se activa con hover de ratón, foco de teclado o toque que alterna el estado expandido. Cierra al pulsar fuera, al salir con el foco o mediante Escape.

El globo tiene fondo crema, borde negro de 2 px, radios asimétricos, sombra dura de 5 × 6 px y un pequeño pico inferior cuadrado girado 45 grados. Aparece por opacidad durante 400 ms, sin mover el resto del diseño. Incluye una descripción breve y un enlace verde oscuro.

En móvil se adapta su posición según la columna: el primero se alinea al borde izquierdo, el último al derecho y el central se centra. Su ancho se limita con respecto a la ventana; el enlace tiene un mínimo táctil de 44 px. El contenido oculto se marca como inerte y se sincronizan los atributos de expansión.

## 11. Fondo artístico

El fondo de portada es una imagen de jardín de miel sobre una base crema `#f7efda`. El README lo describe como una composición surreal y biomórfica con abejas, flores, islas flotantes, cintas curvas y pinceladas de óleo y gouache sobre papel marfil. La dirección artística incluye ámbar, ocre, amarillo mantequilla, verde musgo, teal, coral y lila apagado; concentra la actividad hacia la derecha y deja aire para el texto.

Un gradiente crema adicional protege la lectura. En móvil cambia de dirección y se modifica el encuadre del paisaje. Para Barismo, esta lógica puede traducirse a pequeños motivos de semilla, flor del cafeto, cereza, hojas, secado y tostado, manteniendo las áreas de consulta despejadas.

## 12. Traducción propuesta a SVG para Recetario Barismo

Esta sección propone una adaptación; no describe archivos SVG existentes en Honey.

- Crear ilustraciones SVG con fondo exterior transparente y siluetas reconocibles de tazas, vasos, métodos o utensilios. Mantener rellenos internos crema, caramelo y café, más contornos oscuros; reservar el dibujo únicamente lineal para motivos secundarios del fondo.
- Combinar curvas orgánicas, pequeñas asimetrías, trazos redondeados y unos pocos detalles botánicos. Simplificar el volumen pictórico a zonas de color y líneas selectivas para que siga siendo claro a tamaño pequeño.
- Evitar un rectángulo de fondo dentro del SVG. Conservar espacio alrededor del dibujo para que el contorno, la sombra y el movimiento no queden cortados.
- Mantener grosores de trazo consistentes al escalar, por ejemplo con `vector-effect="non-scaling-stroke"` cuando corresponda. Usar un `viewBox` coherente para equilibrar visualmente toda la colección.
- Aplicar el borde y la sombra al grupo ilustrado o al elemento de imagen, sin afectar la legibilidad de su etiqueta. Usar el mismo tratamiento de sombra dura y rótulo crema de Honey.
- Dar a cada objeto un nombre textual siempre visible y un área táctil generosa. La silueta artística identifica la receta; no debe ser la única forma de entender la acción.
- Mantener el arco incompleto, la palabra vertical decorativa y el nombre horizontal en la cabecera de detalle. Presentar dosis, rendimiento, tiempo y pasos en texto horizontal de alto contraste, fuera de las superposiciones artísticas.
- Adaptar el acento interactivo a verde cafetal o caramelo si se desea una paleta enteramente cafetera. El turquesa brillante pertenece a la implementación de Honey y no es obligatorio para conservar su lenguaje.

## 13. Texto base para el futuro prompt

> Diseña Recetario Barismo en Vue tomando como referencia el lenguaje editorial y orgánico de Honey: objetos ilustrados recortados sobre fondo transparente, contorno oscuro que sigue su silueta, sombra dura desplazada y etiquetas crema con borde negro, esquinas asimétricas y dos niveles tipográficos. Para esta app, crea esos objetos como SVG con rellenos cálidos y trazos expresivos, reconocibles rápidamente desde el celular. Al interactuar, aplica una elevación breve, una rotación muy ligera y un cambio de acento; conserva foco visible y soporte para movimiento reducido.
>
> El detalle de cada receta debe usar una cabecera artística con fondo profundo, ilustración central ligeramente inclinada, arco orgánico incompleto detrás, palabra vertical con letras derechas y nombre horizontal serif en cursiva por delante. Inspírate en la entrada lateral de Honey y en la aparición escalonada de sus títulos, ajustando la duración para permitir consultas ágiles durante un turno. En móvil, presenta el detalle a ancho completo, con cierre accesible y contenido desplazable. Prioriza cantidades, tiempos, rendimiento y pasos legibles por encima de la decoración; el barista debe poder consultar y volver al listado con rapidez.
>
> Usa crema, espresso, caramelo y verde cafetal. Incluye referencias mínimas a siembra, cosecha y producción en el fondo, con baja presencia visual. Mantén el arte en la cabecera y en los accesos ilustrados; deja despejada la información operativa. Reproduce la personalidad gráfica de Honey adaptándola al trabajo diario de baristas.

El plan original no se modifica en esta revisión. Este archivo queda como referencia para redactar su siguiente actualización.
