# 📜 Blocks

## Estructuras


> "Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"
>
> -- ✍️ **Robert C. Martin**

---

## ❓ Condicionales

- ⚠️ Usar ternarios sólo en casos triviales.

- Envolver siempre entre llaves.

- La condición de un sólo operador lógico. En otro caso debe ser una función.

- Valorar retorno **anticipado** _vs_ retorno **unificado**

- Evitar los ~~switches~~.

## ➿ Repetitivas

- La condición de ruptura un sólo operador lógico.

- Las variables locales deben ser legibles.

- Se permiten los índices clásicos `i, j`.

---

## ⚠️ Límites

- ✅1___2❌ _niveles de anidamiento_
- ✅4___8❌ _instrucciones por bloque_

> Te obliga a extraer código a funciones.

> Te obliga a nombrar las nuevas funciones.

## Consecuencias

- 💼 Más **reglas de negocio**
- 💬 **Cero** necesidad de comentarios

---

## 📝 Laboratorio

[![Edit clean_code-function](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cleancode-functions-jp49h?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fblocks%2Fprimes.js&previewwindow=tests&theme=dark)