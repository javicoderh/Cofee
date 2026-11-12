import type { ServicePhrase } from '../domain/interview.types'
export const phrases = [
  {
    "id": "phrase-1",
    "spanish": "¿Le gustaría un espresso o un café con leche?",
    "english": "Would you like an espresso or a coffee with milk?"
  },
  {
    "id": "phrase-2",
    "spanish": "¿Qué tipo de leche prefiere?",
    "english": "What kind of milk would you prefer?"
  },
  {
    "id": "phrase-3",
    "spanish": "¿Lo prefiere caliente o con hielo?",
    "english": "Would you like it hot or iced?"
  },
  {
    "id": "phrase-4",
    "spanish": "¿Prefiere un café corto o uno más largo?",
    "english": "Would you prefer a short coffee or a longer one?"
  },
  {
    "id": "phrase-5",
    "spanish": "Voy a confirmar los ingredientes.",
    "english": "I’ll check the ingredients for you."
  },
  {
    "id": "phrase-6",
    "spanish": "Voy a confirmar si tenemos descafeinado.",
    "english": "I’ll check whether decaf is available."
  },
  {
    "id": "phrase-7",
    "spanish": "Su bebida estará lista en unos minutos.",
    "english": "Your drink will be ready in a few minutes."
  },
  {
    "id": "phrase-8",
    "spanish": "¿Le gustaría el café junto con el postre?",
    "english": "Would you like your coffee with dessert?"
  }
] satisfies readonly ServicePhrase[]
