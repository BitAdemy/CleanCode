# 🧩 Funciones puras y métodos de clase

### Funciones: Pequeñas piezas para organizar programas.

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- ✍️ **Ley de Curly**.

---

## 🛩️ Pequeñas y Claras

- ♻️ Cuanto más pequeñas más reutilizables.
- 💪 Con **verbos** en su nombre que indiquen propósito
- 🐫 _DRY_: Don´t Repeat yourself.
- 🥚 con valores por defecto si el lenguaje los soporta.
- 🧐 sin condiciones complejas.
- 🚩 ...sin flags: crea dos variantes con nombre específico.
- 💬 ...sin comentarios.

---

## ⚠️ Límites

- ✅0_____0❌ _flags_
- ✅1_____2❌ _argumentos_
- ✅8____12❌ _complejidad ciclomática_
- ✅16___24❌ _instrucciones_

---

## 💧 Favorece el estilo funcional puro:

> En una **función pura** el valor de retorno solo está determinado por sus valores de entrada, sin efectos secundarios observables.
>
> -- ✍️ **Alguien a quien le gustan las matemáticas**.

- ### Predecibles.

- ### Sin dependencias del entorno.

- ### Sin efectos secundarios en el entorno.

---

## 📦 Métodos en _P.O.O._:

- ### 0️⃣ cuantos menos argumentos mejor.

    - 🎏 evita argumentos _flag_ usando múltiples funciones específicas.

    - favorece objetos en lugar de ~~primitivos~~.

- ### 1️⃣ un mismo nivel de abstracción: delega en funciones privadas

    - las instrucciones en funciones públicas deberían llamar a funciones privadas.

---

## 🎯 Objetivo: Muchas Pequeñas Funciones Organizadas

- 👆 Una función,

    - ## 🦄 un sólo propósito.

    - ... o al menos un mismo nivel de abstracción.

- ❎ retornando datos; nunca errores.

    - los errores tienen su propio flujo mediante `try-catch throw`.
    - si el lenguaje no lo permite, usar convenio tipo `(err, data)`.

- 💬 Sin comentarios.
  - ¿Me repito?. MAL!!! 😈

---

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- ✍️ **Ley de Curly**

---

![Don´t repeat Yourself](./assets/dry.jpg)

---

> "La duplicidad es el principal enemigo de un sistema bien diseñado"
>
> -- ✍️ **Robert C. Martin**

---

## 📝 Laboratorio

https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION/src/examples/3-functions

> "La verdad sólo se encuentra en un lugar: el código"
>
> -- ✍️ **Robert C. Martin**

[![Edit clean_code-function](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cleancode-functions-jp49h?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffunctions%2Fwords%2Findex.js&previewwindow=tests&theme=dark)