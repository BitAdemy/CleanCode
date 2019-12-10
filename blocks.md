# Blocks

## Estructuras

> "El buen código es su mejor documentación"
>
> -- **Steve McConnell**

---

## Condicionales

- Usar ternarios sólo en casos triviales.

- Envolver siempre entre llaves.

- La condición de un sólo operador lógico.

- En otro caso debe ser una función.

- Evitar los switches.

## Repetitivas

- La condición de ruptura un sólo operador lógico.

- Las variables locales deben ser legibles.

- Se permiten los índices clásicos `i, j`.

## Límites

- _niveles de anidamiento_      ✅2 -  4❌
- _instrucciones por bloque_    ✅4 -  8❌


> Obliga a extraer código a funciones

> Obliga a nombrar las nuevas funciones

## Consecuencias

- Más **reglas de negocio**
- Menos anidamiento
- **Cero** comentarios

> "Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"
>
> -- **Robert C. Martin**