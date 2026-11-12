import type { InterviewQuestion } from '../domain/interview.types'
export const questions = [
  {
    "id": "p01",
    "question": "¿Cómo calibrarías el espresso al comenzar el turno?",
    "category": "tecnica",
    "relatedGuideId": "calibracion",
    "answer": "Confirmaría el café y la receta vigente, comprobaría la dosis y prepararía una extracción. Mediría el rendimiento y el tiempo, evaluaría el sabor y ajustaría una variable por vez. Dejaría registrada la receta que el equipo utilizará.",
    "showInPractice": [
      "La lectura de una balanza",
      "El criterio para ajustar",
      "El registro"
    ]
  },
  {
    "id": "p02",
    "question": "¿Qué significa una proporción 1:2?",
    "category": "tecnica",
    "relatedGuideId": "extraccion",
    "answer": "Relaciona el peso del café seco con el peso del espresso obtenido. Por ejemplo, 18 g de café para 36 g de bebida. Es una referencia que se calibra según el café y el sabor buscado.",
    "showInPractice": [
      "Distinguir dosis, rendimiento y volumen de taza"
    ]
  },
  {
    "id": "p03",
    "question": "¿Cómo diferenciarías un cortado, un cappuccino y un latte?",
    "category": "tecnica",
    "relatedGuideId": "leche",
    "answer": "Explicaría la cantidad de leche, el tamaño de servicio y la textura definida para cada bebida. El cortado mantiene una proporción pequeña de leche; el cappuccino ofrece una espuma cremosa; el latte utiliza una porción mayor de leche.",
    "showInPractice": [
      "Conocer las fichas y la vajilla"
    ]
  },
  {
    "id": "p04",
    "question": "¿Cómo consigues una microespuma sedosa?",
    "category": "tecnica",
    "relatedGuideId": "leche",
    "answer": "Empiezo con leche fría, dosifico según la bebida e incorporo aire al comienzo. Luego integro mediante un remolino, controlo la temperatura y vierto de inmediato. Al terminar, limpio y purgo la lanza.",
    "showInPractice": [
      "La aireación, la integración y la limpieza"
    ]
  },
  {
    "id": "p05",
    "question": "¿Qué revisarías si el café resulta muy ácido o áspero?",
    "category": "tecnica",
    "relatedGuideId": "sensorial",
    "answer": "Compararía la taza con el perfil del café y revisaría la dosis, la distribución, el rendimiento, el tiempo y la molienda. La sensación describe un resultado; para identificar la causa haría un ajuste controlado y volvería a degustar.",
    "showInPractice": [
      "Observaciones concretas y cambios de una variable"
    ]
  },
  {
    "id": "p06",
    "question": "¿Cómo mantendrías consistente un iced latte?",
    "category": "tecnica",
    "relatedGuideId": "extraccion",
    "answer": "Mantendría el rendimiento del espresso, la cantidad de leche y el peso y tamaño habitual del hielo. Utilizaría el vaso definido y serviría al terminar, porque la dilución cambia con el tiempo.",
    "showInPractice": [
      "Pesar y respetar el orden de preparación"
    ]
  },
  {
    "id": "p07",
    "question": "¿Qué deberías saber del café que estás sirviendo?",
    "category": "producto",
    "relatedGuideId": "producto",
    "answer": "El origen disponible, el proceso, el tostador, la fecha de tueste y el perfil sensorial. También la receta vigente y su comportamiento con leche. Los datos pendientes los confirmaría con el proveedor o responsable.",
    "showInPractice": [
      "Una descripción breve y verificable"
    ]
  },
  {
    "id": "p08",
    "question": "¿Cómo responderías a una consulta por alergia?",
    "category": "producto",
    "relatedGuideId": "ingredientes",
    "answer": "Confirmaría la solicitud, revisaría las fichas de ingredientes y consultaría el protocolo de preparación y contacto cruzado. Comunicaría al huésped lo que el equipo puede asegurar antes de preparar la bebida.",
    "showInPractice": [
      "Consultar etiquetas y coordinar con el responsable"
    ]
  },
  {
    "id": "p09",
    "question": "¿Qué diferencia hay entre leche sin lactosa y una bebida vegetal?",
    "category": "producto",
    "relatedGuideId": "ingredientes",
    "answer": "La leche sin lactosa conserva las proteínas de la leche. Una bebida vegetal tiene otra base y una lista de ingredientes propia. Revisaría el producto concreto y la necesidad del huésped para proponer una opción adecuada.",
    "showInPractice": [
      "Precisión al informar los ingredientes"
    ]
  },
  {
    "id": "p10",
    "question": "¿Cómo conservarías el café abierto?",
    "category": "producto",
    "relatedGuideId": "producto",
    "answer": "Identificaría la apertura y el lote, seguiría las indicaciones del tostador y protegería el café del ambiente. Cargaría el molino según el consumo previsto y usaría la evaluación en taza para observar su evolución.",
    "showInPractice": [
      "Rotación e identificación"
    ]
  },
  {
    "id": "p11",
    "question": "¿Qué entiendes por café de especialidad en el servicio?",
    "category": "producto",
    "relatedGuideId": "estandares",
    "answer": "Un compromiso con las características del producto, su información disponible y una preparación que permita apreciarlas. En la barra lo demostraría con trazabilidad, calibración, conservación y consistencia al servir.",
    "showInPractice": [
      "Conectar el producto con acciones observables"
    ]
  },
  {
    "id": "p12",
    "question": "¿Qué tono de atención propondrías para este hotel?",
    "category": "servicio",
    "relatedGuideId": "hospitalidad",
    "answer": "Un trato cálido, tranquilo y preciso. Confirmaría las preferencias con preguntas breves, explicaría cuando el huésped lo necesite y cuidaría el momento de entrega. Relacionaría el café con la propuesta gastronómica del lugar.",
    "showInPractice": [
      "Una recomendación natural"
    ]
  },
  {
    "id": "p13",
    "question": "¿Cómo recomendarías un café a alguien que busca suavidad?",
    "category": "servicio",
    "relatedGuideId": "hospitalidad",
    "answer": "Preguntaría si prefiere suavidad mediante leche o mediante una bebida más larga. A partir de esa preferencia ofrecería un latte o un americano, indicando su tamaño y composición.",
    "showInPractice": [
      "Aclarar qué significa «suave» para esa persona"
    ]
  },
  {
    "id": "p14",
    "question": "¿Cómo atenderías una bebida que el huésped quiere cambiar?",
    "category": "servicio",
    "relatedGuideId": "hospitalidad",
    "answer": "Escucharía qué desea ajustar, confirmaría el resultado esperado y coordinaría una nueva preparación según la política del establecimiento. Al entregar, comprobaría que responde a la preferencia acordada.",
    "showInPractice": [
      "Escuchar y resolver con calma"
    ]
  },
  {
    "id": "p15",
    "question": "¿Cómo ofrecerías un café en inglés?",
    "category": "servicio",
    "relatedGuideId": "hospitalidad",
    "answer": "Empezaría con una pregunta breve, como «Would you like an espresso or a coffee with milk?». Confirmaría la leche, el tamaño y la disponibilidad. Usaría el vocabulario que conozco con claridad y pediría apoyo cuando corresponda.",
    "showInPractice": [
      "Confirmar un pedido completo"
    ]
  },
  {
    "id": "p16",
    "question": "¿Cómo organizarías varios pedidos a la vez?",
    "category": "operacion",
    "relatedGuideId": "servicio",
    "answer": "Identificaría las mesas y la secuencia, prepararía la estación y coordinaría la salida con el equipo. Agruparía tareas compatibles, mantendría las extracciones próximas a su entrega y comunicaría los tiempos.",
    "showInPractice": [
      "Orden, prioridades y coordinación"
    ]
  },
  {
    "id": "p17",
    "question": "¿Qué dejarías registrado al terminar el turno?",
    "category": "operacion",
    "relatedGuideId": "higiene",
    "answer": "La receta vigente, el lote de café, las aperturas relevantes, las incidencias del equipo, las reposiciones y las tareas de limpieza realizadas. El relevo necesita información clara para continuar el servicio.",
    "showInPractice": [
      "Una entrega de turno concisa"
    ]
  },
  {
    "id": "p18",
    "question": "¿Qué harías con una preparación que todavía estás aprendiendo?",
    "category": "operacion",
    "relatedGuideId": "estandares",
    "answer": "Explicaría mi experiencia actual, consultaría la ficha y practicaría con acompañamiento hasta reproducir el resultado esperado. Utilizaría mediciones y observaciones para mostrar el progreso.",
    "showInPractice": [
      "Honestidad, aprendizaje y seguimiento de procedimientos"
    ]
  }
] satisfies readonly InterviewQuestion[]
