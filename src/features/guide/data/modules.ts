import type { GuideModule } from '../domain/guide.types'
export const modules = [
  {
    "id": "hospitalidad",
    "title": "El café y la hospitalidad",
    "summary": "El servicio de café forma parte de la experiencia completa del huésped.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "El barista confirma la bebida, el tamaño y la preferencia de leche con preguntas breves. Ajusta la explicación al interés de la persona y comunica el tiempo estimado cuando existe una espera. El tono es cordial, preciso y tranquilo.",
          "En un desayuno, la coordinación con los alimentos importa tanto como la preparación. En una sobremesa, el café debe acompañar el ritmo de la mesa. En un evento, la calidad depende de la planificación de cantidades y reposiciones.",
          "La identidad de Almasur y Surista aporta un marco de calidez, producto y atención. La guía utiliza ese marco para proponer buenas prácticas de servicio."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Confirmar",
          "Preparar",
          "Comprobar",
          "Servir",
          "Atender la respuesta del huésped"
        ]
      }
    ],
    "relatedRecipeIds": [
      "americano",
      "cortado",
      "latte"
    ],
    "sourceRefs": [
      "F01",
      "F02",
      "F03",
      "E01"
    ]
  },
  {
    "id": "producto",
    "title": "Conocer el café",
    "summary": "La calidad empieza por conocer y conservar el producto.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "La ficha del café debe registrar el origen disponible, el productor o la cooperativa, el proceso, el tostador y la fecha de tueste. Las notas sensoriales describen percepciones; los ingredientes añadidos se informan por separado.",
          "La frescura se administra mediante el calendario del tostador y la evaluación en taza. Cada café necesita una ventana de uso adecuada a su tueste y envasado. Registrar la apertura, mantener el envase protegido y cargar el molino según la demanda ayuda a conservarlo.",
          "El barista comunica el perfil con palabras comprensibles: dulzor, acidez, cuerpo y final. Cuando falta un dato de origen, lo confirma con el proveedor."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Identificar el lote",
          "Registrar la apertura",
          "Evaluar",
          "Rotar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "espresso-simple",
      "doppio"
    ],
    "sourceRefs": [
      "F04",
      "E01"
    ]
  },
  {
    "id": "extraccion",
    "title": "Dosis, rendimiento y extracción",
    "summary": "Una receta escrita permite comparar y corregir las preparaciones.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "La dosis es el peso del café seco. El rendimiento es el peso de la bebida obtenida. Una proporción 1:2 relaciona ambos: 18 g de café para 36 g de espresso.",
          "El tiempo informa cómo transcurrió la extracción. Se interpreta junto con el sabor, la distribución y el rendimiento. La receta inicial propone 25–30 s para los perfiles de espresso; cada café se calibra en la barra.",
          "Una distribución irregular puede producir recorridos preferenciales del agua. La canasta limpia, la distribución uniforme y una compactación nivelada favorecen la repetibilidad."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Pesar",
          "Distribuir",
          "Extraer",
          "Medir",
          "Degustar",
          "Registrar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "doppio",
      "ristretto",
      "lungo"
    ],
    "sourceRefs": [
      "F05",
      "E01"
    ]
  },
  {
    "id": "calibracion",
    "title": "Calibrar durante el turno",
    "summary": "El ajuste se basa en la taza y en mediciones consistentes.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "Al iniciar el turno, confirma el café, la capacidad de la canasta y la receta vigente. Prepara una extracción, pesa la bebida y observa el flujo. Degusta una porción con el procedimiento higiénico de la barra.",
          "Si cambia el resultado, revisa primero la dosis y la preparación de la canasta. Modifica una variable por vez y vuelve a evaluar. Una molienda más fina suele ofrecer mayor resistencia; una más gruesa suele facilitar el flujo. La respuesta real depende del equipo y del café.",
          "Registra la receta resultante y comunícala en el relevo. Repite la revisión cuando cambie el lote o aparezca una desviación sensorial."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Comparar",
          "Ajustar",
          "Volver a preparar",
          "Registrar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "espresso-simple",
      "doppio"
    ],
    "sourceRefs": [
      "F04",
      "E01"
    ]
  },
  {
    "id": "leche",
    "title": "La leche y la microespuma",
    "summary": "La aireación y la integración determinan la textura de la bebida.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "Empieza con leche fría y una jarra limpia. Incorpora aire al comienzo y ajusta la posición de la lanza para formar un remolino. Integra la microespuma y vierte enseguida.",
          "El objetivo operativo orientativo de la guía es 55–65 °C en taza. El termómetro ayuda a conocer el resultado del proceso. La temperatura de la jarra y la temperatura final de servicio corresponden a momentos diferentes.",
          "El cappuccino admite una aireación mayor; el flat white utiliza una textura fina. Cada bebida requiere una porción definida. La leche restante se maneja conforme al protocolo de la barra; cada preparación comienza con una porción fresca."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Dosificar",
          "Airear",
          "Integrar",
          "Medir",
          "Verter",
          "Limpiar la lanza"
        ]
      }
    ],
    "relatedRecipeIds": [
      "cappuccino",
      "flat-white",
      "latte"
    ],
    "sourceRefs": [
      "F04",
      "E01"
    ]
  },
  {
    "id": "ingredientes",
    "title": "Ingredientes y alternativas",
    "summary": "La información precisa permite responder a las preferencias y restricciones.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "Conocer una bebida implica conocer también sus salsas, helados, cremas y alternativas vegetales. La lista de ingredientes del producto real es la referencia para responder.",
          "La leche sin lactosa conserva las proteínas de la leche. Las bebidas de almendra, soya o avena requieren revisar sus etiquetas y su aptitud para cada solicitud. El equipo determina el procedimiento de utensilios y contacto cruzado.",
          "Ante una consulta por alergias, confirma la solicitud, revisa la ficha y coordina con la persona responsable. La respuesta se basa en lo que la operación puede asegurar."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Escuchar",
          "Revisar la etiqueta",
          "Confirmar el procedimiento",
          "Comunicar con precisión"
        ]
      }
    ],
    "relatedRecipeIds": [
      "mocha",
      "affogato",
      "iced-latte"
    ],
    "sourceRefs": [
      "E01"
    ]
  },
  {
    "id": "sensorial",
    "title": "Evaluar la taza",
    "summary": "El barista compara sensaciones y utiliza descripciones útiles.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "Observa el aroma y evalúa el dulzor, la acidez, el amargor, el cuerpo y el final. Un café puede presentar acidez frutal agradable; la evaluación busca su integración en el conjunto.",
          "La astringencia se percibe como sequedad. Un aroma rancio puede orientar hacia la conservación del café o la limpieza del equipo. Estas señales requieren revisar el producto y el procedimiento antes de concluir la causa.",
          "En bebidas con leche, comprueba además la temperatura, la uniformidad de la textura y la presencia del café. Registra observaciones concretas para que otro barista pueda comparar."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Oler",
          "Probar",
          "Describir",
          "Comparar",
          "Ajustar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "doppio",
      "cortado",
      "cappuccino"
    ],
    "sourceRefs": [
      "F04",
      "E01"
    ]
  },
  {
    "id": "higiene",
    "title": "La estación de trabajo",
    "summary": "Una estación ordenada sostiene la calidad durante todo el servicio.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "Prepara los utensilios, las balanzas, las jarras y los paños de uso diferenciado. Manipula las superficies de contacto con alimentos conforme al protocolo del establecimiento.",
          "Limpia y purga la lanza después de cada uso. Conserva las canastas y los portafiltros limpios. Aplica el procedimiento de limpieza indicado por el fabricante para la máquina y los molinos.",
          "Los alimentos abiertos requieren identificación y conservación según su etiqueta y el protocolo de cocina. El hielo se manipula con un utensilio adecuado. Los tiempos, temperaturas y productos de limpieza concretos se incorporan una vez confirmados por el responsable de la operación."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Preparar",
          "Separar utensilios",
          "Limpiar",
          "Identificar",
          "Reponer",
          "Registrar incidencias"
        ]
      }
    ],
    "relatedRecipeIds": [
      "iced-latte",
      "shakerato"
    ],
    "sourceRefs": [
      "E01"
    ]
  },
  {
    "id": "servicio",
    "title": "Desayunos, sobremesas y eventos",
    "summary": "La organización del flujo permite servir con consistencia.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "En el desayuno, anticipa la demanda y organiza los pedidos por mesa y secuencia de preparación. Prepara cada extracción próxima a su entrega y coordina las bebidas con cocina.",
          "Para una sobremesa, ofrece una recomendación breve según el postre y la preferencia de intensidad. Como propuesta, un espresso equilibrado puede acompañar el cannoli; un cortado puede acompañar el cheesecake de pistacho. Estas combinaciones se validan degustando los productos reales.",
          "En eventos, calcula las cantidades y define las reposiciones. Si se utiliza café filtrado, documenta la receta, la hora de preparación y la conservación. Como ejercicio de preparación, 15 g de café y 250 g de agua permiten estudiar la proporción; la molienda, el tiempo y el servicio se ajustan al método disponible."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Anticipar",
          "Ordenar",
          "Coordinar",
          "Comprobar",
          "Entregar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "americano",
      "cafe-con-leche",
      "affogato"
    ],
    "sourceRefs": [
      "F03",
      "F14",
      "E01"
    ]
  },
  {
    "id": "estandares",
    "title": "Referencias y receta de la casa",
    "summary": "Una referencia técnica se convierte en receta operativa mediante validación.",
    "blocks": [
      {
        "title": "",
        "paragraphs": [
          "La SCA organiza formación en habilidades de barismo, preparación y evaluación del café. La guía toma esos temas como marco de aprendizaje.",
          "La publicación de la SCA sobre la evolución del espresso describe prácticas observadas, como el uso de balanzas y la proporción 1:2. Su valor aquí es orientar la calibración.",
          "El IEI publica una referencia italiana por volumen: aproximadamente 25 ml de espresso; para el cappuccino, la combinación de espresso y leche se describe en su documentación. La receta por peso de esta app constituye una propuesta propia.",
          "Para convertir una ficha en «Receta de la casa», el equipo debe validar el café, la dosis, el rendimiento, la leche, la vajilla y el resultado sensorial. Registrar responsable y fecha permite mantener una versión vigente."
        ]
      },
      {
        "title": "En la práctica",
        "paragraphs": [],
        "bullets": [
          "Consultar la fuente",
          "Adaptar",
          "Degustar",
          "Documentar",
          "Aprobar"
        ]
      }
    ],
    "relatedRecipeIds": [
      "espresso-simple",
      "cappuccino"
    ],
    "sourceRefs": [
      "F04",
      "F05",
      "F06"
    ]
  }
] satisfies readonly GuideModule[]
