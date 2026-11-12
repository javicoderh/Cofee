import type { Recipe } from '../domain/recipe.types'
export const recipes = [
  {
    "id": "espresso-simple",
    "name": "Espresso simple",
    "aliases": [
      "expreso",
      "espresso"
    ],
    "category": "espresso",
    "sortOrder": 1,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Un café corto, concentrado y aromático.",
    "artKey": "espresso-cup",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Taza",
      "capacityMl": 80
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Precalienta la taza y seca la canasta.",
      "Pesa, distribuye y compacta la dosis.",
      "Extrae hasta obtener 18 g y registra el tiempo.",
      "Sirve inmediatamente."
    ],
    "qualityCues": [
      "El dulzor es reconocible.",
      "El final resulta agradable."
    ],
    "adjustmentTip": "ante un sabor agresivo, revisa distribución, rendimiento y molienda mediante una nueva extracción.",
    "ingredientNotes": [
      "café y agua; consulta las condiciones reales de preparación cuando exista una restricción alimentaria."
    ],
    "technicalNote": "la receta expresa el rendimiento por peso. La referencia italiana por volumen se explica aparte en la Guía.",
    "sourceRefs": [
      "E01",
      "F05"
    ]
  },
  {
    "id": "doppio",
    "name": "Doppio",
    "aliases": [
      "doble",
      "espresso doble"
    ],
    "category": "espresso",
    "sortOrder": 2,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Un espresso doble con una mayor dosis de café.",
    "artKey": "espresso-cup",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 100
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Prepara la canasta doble con 18 g.",
      "Distribuye y compacta nivelado.",
      "Extrae 36 g y registra el tiempo.",
      "Sirve en la taza precalentada."
    ],
    "qualityCues": [
      "El aroma es limpio.",
      "La textura y el sabor mantienen equilibrio."
    ],
    "adjustmentTip": "conserva la dosis y ajusta la molienda para recuperar la receta cuando cambie el flujo.",
    "ingredientNotes": [
      "café y agua."
    ],
    "technicalNote": "la proporción de referencia es 1:2.",
    "sourceRefs": [
      "E01",
      "F05"
    ]
  },
  {
    "id": "ristretto",
    "name": "Ristretto",
    "aliases": [],
    "category": "espresso",
    "sortOrder": 3,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Un espresso de rendimiento corto y textura concentrada.",
    "artKey": "espresso-cup",
    "status": "reference",
    "brewProfileId": "ristretto-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 80
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 24,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Prepara una dosis uniforme de 18 g.",
      "Extrae hasta alcanzar 24 g.",
      "Evalúa la concentración y el equilibrio.",
      "Sirve al momento."
    ],
    "qualityCues": [
      "El cuerpo es denso.",
      "El sabor conserva dulzor."
    ],
    "adjustmentTip": "una acidez agresiva requiere revisar la extracción y calibrar de nuevo.",
    "ingredientNotes": [
      "café y agua."
    ],
    "technicalNote": "la relación aproximada es 1:1,33; su tiempo se define durante la calibración.",
    "sourceRefs": [
      "E01",
      "F12"
    ]
  },
  {
    "id": "lungo",
    "name": "Lungo",
    "aliases": [],
    "category": "espresso",
    "sortOrder": 4,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Una extracción larga que produce una bebida de mayor rendimiento.",
    "artKey": "espresso-cup",
    "status": "reference",
    "brewProfileId": "lungo-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 120
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 54,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Prepara 18 g y distribuye uniformemente.",
      "Extrae hasta obtener 54 g.",
      "Registra el tiempo y evalúa el final.",
      "Sirve en una taza precalentada."
    ],
    "qualityCues": [
      "La bebida conserva claridad de sabor.",
      "El amargor resulta agradable."
    ],
    "adjustmentTip": "ante un final áspero, revisa molienda y rendimiento.",
    "ingredientNotes": [
      "café y agua."
    ],
    "technicalNote": "todo el agua de extracción atraviesa el café; la relación propuesta es 1:3.",
    "sourceRefs": [
      "E01",
      "F12"
    ]
  },
  {
    "id": "americano",
    "name": "Americano",
    "aliases": [],
    "category": "con-agua",
    "sortOrder": 5,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Un espresso doble diluido con agua caliente.",
    "artKey": "cappuccino-cup",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 250
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "water",
        "name": "Agua caliente",
        "quantity": {
          "value": 150,
          "unit": "ml"
        }
      }
    ],
    "steps": [
      "Extrae el espresso en la taza.",
      "Mide 150 ml de agua caliente apta para el servicio.",
      "Añade el agua con cuidado.",
      "Sirve enseguida."
    ],
    "qualityCues": [
      "La intensidad resulta uniforme.",
      "El aroma se mantiene limpio."
    ],
    "adjustmentTip": "modifica la dilución según la preferencia del huésped y registra las variantes de la carta.",
    "ingredientNotes": [
      "café y agua."
    ],
    "technicalNote": "el espresso se extrae con su receta y luego se diluye.",
    "sourceRefs": [
      "E01",
      "F11"
    ]
  },
  {
    "id": "long-black",
    "name": "Long black",
    "aliases": [],
    "category": "con-agua",
    "sortOrder": 6,
    "temperature": "hot",
    "containsDairy": false,
    "summary": "Un espresso doble servido sobre agua caliente.",
    "artKey": "cappuccino-cup",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 180
    },
    "ingredients": [
      {
        "id": "water",
        "name": "Agua caliente",
        "quantity": {
          "value": 100,
          "unit": "ml"
        }
      },
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Mide el agua en la taza.",
      "Extrae el espresso sobre el agua.",
      "Comprueba la presentación.",
      "Sirve inmediatamente."
    ],
    "qualityCues": [
      "El café mantiene una presencia marcada.",
      "Parte de la crema puede conservarse en la superficie."
    ],
    "adjustmentTip": "utiliza un vertido suave y una altura de taza adecuada.",
    "ingredientNotes": [
      "café y agua."
    ],
    "technicalNote": "el orden de construcción caracteriza esta propuesta.",
    "sourceRefs": [
      "E01"
    ]
  },
  {
    "id": "macchiato",
    "name": "Espresso macchiato",
    "aliases": [
      "macchiatto",
      "macchiato"
    ],
    "category": "con-leche",
    "sortOrder": 7,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso marcado con una pequeña porción de leche texturizada.",
    "artKey": "espresso-cup",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Taza",
      "capacityMl": 80
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 10,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el espresso.",
      "Texturiza la leche con el procedimiento de porciones pequeñas de la barra.",
      "Incorpora la pequeña porción de leche y microespuma.",
      "Sirve."
    ],
    "qualityCues": [
      "El café conserva protagonismo.",
      "La superficie es fina y cremosa."
    ],
    "adjustmentTip": "controla la cantidad de leche para mantener la identidad de la bebida.",
    "ingredientNotes": [
      "contiene leche; verificar la alternativa solicitada y sus ingredientes."
    ],
    "technicalNote": "la carga de la jarra puede ser mayor que la porción servida.",
    "sourceRefs": [
      "E01",
      "F10"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "cortado",
    "name": "Cortado",
    "aliases": [
      "cafe cortado",
      "cortado doble"
    ],
    "category": "con-leche",
    "sortOrder": 8,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso doble equilibrado con una porción similar de leche.",
    "artKey": "short-glass",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Vaso",
      "capacityMl": 100
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 40,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el espresso en el vaso adecuado.",
      "Texturiza la leche con poca incorporación de aire.",
      "Integra con un vertido continuo.",
      "Sirve de inmediato."
    ],
    "qualityCues": [
      "El café se reconoce con claridad.",
      "La textura resulta sedosa."
    ],
    "adjustmentTip": "reduce la incorporación de aire si aparece una capa de espuma demasiado gruesa.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "las proporciones del cortado varían por región; esta es la referencia inicial de la guía.",
    "sourceRefs": [
      "E01",
      "F10"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "piccolo",
    "name": "Piccolo latte",
    "aliases": [],
    "category": "con-leche",
    "sortOrder": 9,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un ristretto individual acompañado por leche texturizada.",
    "artKey": "short-glass",
    "status": "reference",
    "brewProfileId": "ristretto-simple",
    "vessel": {
      "name": "Vaso",
      "capacityMl": 100
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 14,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 60,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el ristretto individual.",
      "Texturiza la leche hasta integrar una microespuma fina.",
      "Vierte sobre el café.",
      "Respeta el nivel de servicio del vaso."
    ],
    "qualityCues": [
      "La bebida es cremosa.",
      "La presencia del café sigue siendo clara."
    ],
    "adjustmentTip": "verifica la cantidad servida cuando cambie el vaso.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "el volumen final depende de la expansión de la leche.",
    "sourceRefs": [
      "E01"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "flat-white",
    "name": "Flat white",
    "aliases": [],
    "category": "con-leche",
    "sortOrder": 10,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso doble con leche de textura fina y uniforme.",
    "artKey": "cappuccino-cup",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 180
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 110,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el espresso.",
      "Incorpora una cantidad breve de aire a la leche.",
      "Integra mediante el remolino.",
      "Vierte de forma continua y termina con una superficie fina."
    ],
    "qualityCues": [
      "La textura es sedosa.",
      "El café mantiene presencia."
    ],
    "adjustmentTip": "controla el aire inicial para obtener una superficie fina.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "el tamaño y la textura diferencian esta receta de otras bebidas con leche.",
    "sourceRefs": [
      "E01",
      "F10"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "cappuccino",
    "name": "Cappuccino",
    "aliases": [
      "capuccino",
      "capuchino",
      "cappuccino"
    ],
    "category": "con-leche",
    "sortOrder": 11,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso con leche texturizada y una espuma cremosa.",
    "artKey": "cappuccino-cup",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Taza",
      "capacityMl": 160
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 100,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el espresso.",
      "Incorpora aire al inicio para formar una espuma fina y abundante.",
      "Integra la leche con el remolino.",
      "Vierte hasta el nivel de servicio."
    ],
    "qualityCues": [
      "La espuma es cremosa.",
      "El café y la leche ofrecen un conjunto equilibrado."
    ],
    "adjustmentTip": "revisa la aireación si aparecen burbujas grandes o una separación rápida.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "esta receta usa espresso medido por peso. La referencia del IEI describe 25 ml de espresso y 100 ml de leche; se presenta como referencia independiente en la Guía.",
    "sourceRefs": [
      "E01",
      "F06"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "latte",
    "name": "Caffè latte",
    "aliases": [],
    "category": "con-leche",
    "sortOrder": 12,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso doble con una porción generosa de leche sedosa.",
    "artKey": "latte-glass",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 280
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 190,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Extrae el espresso.",
      "Texturiza la leche con una capa fina de microespuma.",
      "Integra con un vertido uniforme.",
      "Sirve con el borde limpio."
    ],
    "qualityCues": [
      "El conjunto es suave y cremoso.",
      "El café permanece perceptible."
    ],
    "adjustmentTip": "respeta la cantidad de leche para conservar la intensidad definida.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "la capacidad del recipiente contempla la expansión de la leche.",
    "sourceRefs": [
      "E01",
      "F10"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "latte-macchiato",
    "name": "Latte macchiato",
    "aliases": [],
    "category": "con-leche",
    "sortOrder": 13,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Leche texturizada marcada con un espresso individual.",
    "artKey": "latte-glass",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Vaso alto",
      "capacityMl": 280
    },
    "ingredients": [
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 180,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      },
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Texturiza y vierte la leche en el vaso.",
      "Prepara el espresso.",
      "Añádelo lentamente sobre la leche.",
      "Sirve con una cucharita."
    ],
    "qualityCues": [
      "La superficie presenta una marca de café.",
      "La leche mantiene una textura fina."
    ],
    "adjustmentTip": "suaviza el vertido para preservar la presentación.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "las capas son un efecto de construcción; pueden integrarse antes de beber.",
    "sourceRefs": [
      "E01"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "cafe-con-leche",
    "name": "Café con leche",
    "aliases": [],
    "category": "con-leche",
    "sortOrder": 14,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Una mezcla equilibrada de café filtrado y leche caliente.",
    "artKey": "cappuccino-cup",
    "status": "reference",
    "brewProfileId": null,
    "vessel": {
      "name": "Taza",
      "capacityMl": 250
    },
    "ingredients": [
      {
        "id": "filter-coffee",
        "name": "Café filtrado recién preparado",
        "quantity": {
          "value": 100,
          "unit": "ml"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 100,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Mide el café filtrado.",
      "Calienta la leche con una aireación breve.",
      "Integra ambos componentes.",
      "Sirve enseguida."
    ],
    "qualityCues": [
      "El sabor es uniforme.",
      "La leche aporta suavidad."
    ],
    "adjustmentTip": "prepara una nueva porción de filtrado cuando pierda su calidad sensorial.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "esta versión utiliza café filtrado. La barra puede documentar otra variante con espresso.",
    "sourceRefs": [
      "E01"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "mocha",
    "name": "Mocha",
    "aliases": [
      "mocaccino",
      "moka",
      "mocha"
    ],
    "category": "dulces",
    "sortOrder": 15,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso con chocolate y leche texturizada.",
    "artKey": "latte-glass",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 280
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "chocolate",
        "name": "Salsa de chocolate",
        "quantity": {
          "value": 20,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 150,
          "unit": "ml"
        },
        "note": "Medida fría antes de texturizar"
      }
    ],
    "steps": [
      "Mide la salsa en la taza.",
      "Añade el espresso y mezcla hasta homogeneizar.",
      "Texturiza la leche.",
      "Integra con el vertido."
    ],
    "qualityCues": [
      "El chocolate está bien disuelto.",
      "El café se percibe en el conjunto."
    ],
    "adjustmentTip": "calibra la cantidad cuando cambie la concentración de la salsa.",
    "ingredientNotes": [
      "contiene leche; revisar los ingredientes y alérgenos de la salsa."
    ],
    "technicalNote": "la ficha del producto determina la dosificación definitiva.",
    "sourceRefs": [
      "E01",
      "F11"
    ],
    "milkTargetInCupC": {
      "min": 55,
      "max": 65
    }
  },
  {
    "id": "bombon",
    "name": "Café bombón",
    "aliases": [],
    "category": "dulces",
    "sortOrder": 16,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un espresso sobre una base dulce de leche condensada.",
    "artKey": "short-glass",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Vaso",
      "capacityMl": 100
    },
    "ingredients": [
      {
        "id": "condensed-milk",
        "name": "Leche condensada",
        "quantity": {
          "value": 25,
          "unit": "ml"
        }
      },
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Mide la leche condensada en el vaso.",
      "Prepara el espresso.",
      "Viértelo suavemente sobre la base.",
      "Sirve con cucharita para integrar."
    ],
    "qualityCues": [
      "Las capas quedan definidas.",
      "El vaso presenta el borde limpio."
    ],
    "adjustmentTip": "mantén constante la porción de leche condensada.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "el servicio permite al huésped mezclar los componentes.",
    "sourceRefs": [
      "E01"
    ]
  },
  {
    "id": "vienes",
    "name": "Café vienés",
    "aliases": [],
    "category": "dulces",
    "sortOrder": 17,
    "temperature": "hot",
    "containsDairy": true,
    "summary": "Un café caliente coronado con crema batida.",
    "artKey": "short-glass",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Taza",
      "capacityMl": 180
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "water",
        "name": "Agua caliente",
        "quantity": {
          "value": 40,
          "unit": "ml"
        }
      },
      {
        "id": "cream",
        "name": "Crema batida",
        "quantity": {
          "value": 25,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Extrae el espresso.",
      "Añade el agua medida.",
      "Deposita la crema batida con suavidad.",
      "Sirve inmediatamente."
    ],
    "qualityCues": [
      "La crema conserva su forma.",
      "El café presenta una intensidad definida."
    ],
    "adjustmentTip": "comprueba la textura y la conservación de la crema antes del servicio.",
    "ingredientNotes": [
      "contiene leche; verificar la composición de la crema utilizada."
    ],
    "technicalNote": "esta es una variante propuesta; existen preparaciones regionales diferentes.",
    "sourceRefs": [
      "E01"
    ]
  },
  {
    "id": "affogato",
    "name": "Affogato",
    "aliases": [],
    "category": "dulces",
    "sortOrder": 18,
    "temperature": "cold",
    "containsDairy": true,
    "summary": "Un helado de vainilla servido con espresso caliente.",
    "artKey": "affogato-cup",
    "status": "reference",
    "brewProfileId": "espresso-simple",
    "vessel": {
      "name": "Copa",
      "capacityMl": 180
    },
    "ingredients": [
      {
        "id": "ice-cream",
        "name": "Helado de vainilla",
        "quantity": {
          "value": 60,
          "unit": "g"
        }
      },
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 18,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Coloca el helado en una copa fría.",
      "Extrae el espresso.",
      "Vierte el café sobre el helado justo antes de servir.",
      "Acompaña con una cuchara."
    ],
    "qualityCues": [
      "El helado conserva parte de su estructura.",
      "El contraste de temperaturas se aprecia al servir."
    ],
    "adjustmentTip": "coordina la extracción y el montaje para reducir la espera.",
    "ingredientNotes": [
      "contiene leche; revisar la presencia de huevo u otros ingredientes en el helado real."
    ],
    "technicalNote": "el filtro de temperatura lo clasifica como preparación fría con componente caliente.",
    "sourceRefs": [
      "E01",
      "F10"
    ]
  },
  {
    "id": "iced-latte",
    "name": "Iced latte",
    "aliases": [
      "cafe frio",
      "iced latte"
    ],
    "category": "frios",
    "sortOrder": 19,
    "temperature": "cold",
    "containsDairy": true,
    "summary": "Un espresso doble con leche fría y hielo.",
    "artKey": "iced-glass",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Vaso",
      "capacityMl": 400
    },
    "ingredients": [
      {
        "id": "ice",
        "name": "Hielo",
        "quantity": {
          "value": 120,
          "unit": "g"
        }
      },
      {
        "id": "milk",
        "name": "Leche",
        "quantity": {
          "value": 150,
          "unit": "ml"
        },
        "note": "Medida fría"
      },
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Coloca el hielo en el vaso.",
      "Añade la leche medida.",
      "Extrae y vierte el espresso.",
      "Sirve para integrar antes de beber."
    ],
    "qualityCues": [
      "La bebida conserva intensidad.",
      "El vaso tiene espacio suficiente para mezclar."
    ],
    "adjustmentTip": "mantén el peso y el tamaño habitual del hielo para controlar la dilución.",
    "ingredientNotes": [
      "contiene leche."
    ],
    "technicalNote": "el hielo ocupa volumen y se derrite durante el consumo.",
    "sourceRefs": [
      "E01",
      "F10"
    ]
  },
  {
    "id": "shakerato",
    "name": "Shakerato",
    "aliases": [],
    "category": "frios",
    "sortOrder": 20,
    "temperature": "cold",
    "containsDairy": false,
    "summary": "Un espresso frío agitado con hielo para formar espuma.",
    "artKey": "affogato-cup",
    "status": "reference",
    "brewProfileId": "espresso-doble",
    "vessel": {
      "name": "Copa",
      "capacityMl": 150
    },
    "ingredients": [
      {
        "id": "espresso",
        "name": "Espresso preparado",
        "quantity": {
          "value": 36,
          "unit": "g"
        }
      },
      {
        "id": "ice",
        "name": "Hielo",
        "quantity": {
          "value": 120,
          "unit": "g"
        }
      },
      {
        "id": "sugar",
        "name": "Azúcar",
        "quantity": {
          "value": 8,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Disuelve el azúcar en el espresso.",
      "Coloca el hielo y el café en una coctelera apta para este servicio.",
      "Cierra de forma segura y agita durante 10–15 s.",
      "Cuela sobre una copa fría."
    ],
    "qualityCues": [
      "La espuma es fina.",
      "La bebida llega bien fría."
    ],
    "adjustmentTip": "controla el tiempo de agitado y el estado del hielo para mantener la dilución.",
    "ingredientNotes": [
      "café, agua y azúcar."
    ],
    "technicalNote": "la espuma se forma mediante la agitación. El equipo debe seguir el procedimiento seguro de su coctelera.",
    "sourceRefs": [
      "E01",
      "F13"
    ]
  }
] satisfies readonly Recipe[]
