# Blocks

## Estructuras

> "El buen código es su mejor documentación"
>
> -- **Steve McConnell**

---

## ❓ Condicionales

- ⚠️ Usar ternarios sólo en casos triviales.

- Envolver siempre entre llaves.

- La condición de un sólo operador lógico.

- En otro caso debe ser una función.

- Valorar retorno **anticipado** vs retorno **unificado**

- Evitar los switches.

## ➿ Repetitivas

- La condición de ruptura un sólo operador lógico.

- Las variables locales deben ser legibles.

- Se permiten los índices clásicos `i, j`.

## ⚠️ Límites

- ✅1___2❌ _niveles de anidamiento_
- ✅4___8❌ _instrucciones por bloque_


> Obliga a extraer código a funciones

> Obliga a nombrar las nuevas funciones

## Consecuencias

- Más **reglas de negocio**
- Menos anidamiento
- **Cero** comentarios

> "Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"
>
> -- **Robert C. Martin**

## 📝 Laboratorio

[![Edit clean_code-function](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cleancode-functions-jp49h?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fblocks%2Fprimes.js&previewwindow=tests&theme=dark)