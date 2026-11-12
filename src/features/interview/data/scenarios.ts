import type { Scenario } from '../domain/interview.types'
export const scenarios = [
  {
    "id": "s01",
    "title": "La hora de desayuno",
    "situation": "llegan varios pedidos mientras cocina está terminando las mesas.",
    "actions": [
      "Identificar los pedidos",
      "Confirmar las preferencias",
      "Organizar la secuencia",
      "Coordinar las entregas",
      "Informar la espera"
    ],
    "suggestedPhrase": "Estoy preparando sus bebidas y coordinando la salida con su desayuno"
  },
  {
    "id": "s02",
    "title": "Una preferencia de temperatura",
    "situation": "el huésped pide su café con leche más caliente.",
    "actions": [
      "Confirmar la preferencia",
      "Aplicar el procedimiento de la barra",
      "Controlar la temperatura",
      "Entregar con cuidado"
    ],
    "suggestedPhrase": "Lo prepararé con la temperatura que acordamos y se lo serviré enseguida"
  },
  {
    "id": "s03",
    "title": "Una consulta por ingredientes",
    "situation": "una persona pregunta si puede consumir una bebida con una restricción alimentaria.",
    "actions": [
      "Escuchar",
      "Revisar las etiquetas",
      "Consultar el procedimiento de utensilios",
      "Confirmar la posibilidad de preparación"
    ],
    "suggestedPhrase": "Voy a revisar los ingredientes y el procedimiento con el equipo para darle una respuesta precisa"
  },
  {
    "id": "s04",
    "title": "Una sobremesa con postre",
    "situation": "una mesa pide una recomendación para acompañar un postre.",
    "actions": [
      "Preguntar la intensidad preferida",
      "Identificar el postre",
      "Sugerir una opción",
      "Coordinar el momento de servicio"
    ],
    "suggestedPhrase": "Para acompañarlo, le sugiero un espresso equilibrado; también podemos prepararlo con una pequeña porción de leche"
  },
  {
    "id": "s05",
    "title": "Un cambio en la extracción",
    "situation": "el espresso comienza a salir con un flujo diferente durante el turno.",
    "actions": [
      "Revisar la dosis y la canasta",
      "Comparar el rendimiento",
      "Ajustar la molienda",
      "Degustar",
      "Registrar y avisar al relevo"
    ],
    "suggestedPhrase": "Estoy ajustando la receta para mantener el resultado que estamos sirviendo"
  }
] satisfies readonly Scenario[]
