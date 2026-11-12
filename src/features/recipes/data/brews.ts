import type { BrewProfile } from '../domain/recipe.types'
export const brews = [
  {
    "id": "espresso-simple",
    "name": "Espresso simple",
    "doseG": 9,
    "yieldG": 18,
    "timeS": {
      "min": 25,
      "max": 30
    },
    "waterTempC": 93,
    "pressureBar": 9,
    "note": "Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión."
  },
  {
    "id": "espresso-doble",
    "name": "Espresso doble",
    "doseG": 18,
    "yieldG": 36,
    "timeS": {
      "min": 25,
      "max": 30
    },
    "waterTempC": 93,
    "pressureBar": 9,
    "note": "Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión."
  },
  {
    "id": "ristretto-doble",
    "name": "Ristretto doble",
    "doseG": 18,
    "yieldG": 24,
    "timeS": null,
    "waterTempC": 93,
    "pressureBar": 9,
    "note": "Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión."
  },
  {
    "id": "lungo-doble",
    "name": "Lungo doble",
    "doseG": 18,
    "yieldG": 54,
    "timeS": null,
    "waterTempC": 93,
    "pressureBar": 9,
    "note": "Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión."
  },
  {
    "id": "ristretto-simple",
    "name": "Ristretto simple",
    "doseG": 9,
    "yieldG": 14,
    "timeS": null,
    "waterTempC": 93,
    "pressureBar": 9,
    "note": "Punto de partida editorial. Calibrar por sabor y según la capacidad de la canasta. Medir el tiempo desde la activación y registrar el criterio de preinfusión."
  }
] satisfies readonly BrewProfile[]
