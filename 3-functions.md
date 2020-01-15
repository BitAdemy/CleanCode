# 🎬 Functions

## Pequeñas piezas para organizar programas.

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- ✍️ **Ley de Curly**.

---

### Pequeñas y Claras

- ♻️ Cuanto más pequeñas más reutilizables.
- 💪 Con **verbos** en su nombre que indiquen propósito
- 🐫 _DRY_: Don´t Repeat yourself.
- 💬 ...sin comentarios.



## ⚠️ Límites

- ✅2_____4❌ _argumentos_
- ✅8____12❌ _complejidad ciclomática_
- ✅16___24❌ _instrucciones_

---

## Favorecer el estilo funcional puro:

> En una** función pura** el valor de retorno solo está determinado por sus valores de entrada, sin efectos secundarios observables.

- predecibles
- sin dependencias del entorno
- sin efectos secundarios en el entorno

---

## Métodos en _P.O.O._:

- ### cuantos menos argumentos mejor.

    - 🎏 evita argumentos _flag_ usando múltiples funciones específicas.

    - asigna valores por defecto si el lenguaje los soporta.

    - favorece objetos en lugar de ~~primitivos~~.

- ### un mismo nivel de abstracción: delega en funciones privadas

    - las instrucciones en funciones públicas deben llamar a funciones privadas.

- ### retornando datos; nunca errores.

    - los errores tienen su propio flujo mediante `try-catch throw`.
    - si el lenguaje no lo permite, usar convenio tipo `(err, data)`.
---

### Objetivo: Muchas Pequeñas Funciones Organizadas

- 👆 Una función,

    - ## un sólo propósito.

    - ... o al menos un mismo nivel de abstracción.

- 💬 Sin comentarios.
  - ¿Me repito?. MAL!!! 😈

---

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- **Ley de Curly**

---

![Don´t repeat Yourself](./assets/dry.jpg)

---

> "La duplicidad es el principal enemigo de un sistema bien diseñado"
>
> -- **Robert C. Martin**

## 📝 Laboratorio

[![Edit clean_code-function](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cleancode-functions-jp49h?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffunctions%2Fwords%2Findex.js&previewwindow=tests&theme=dark)