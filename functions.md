# Functions

## Pequeñas piezas para organizar programas.

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- **Ley de Curly**.

### Pequeñas y Claras

- Cuanto más pequeñas más reutilizables.
- Con **verbos** en su nombre que indiquen propósito
- _DRY_: Don´t Repeat yourself.
- ...sin comentarios.



## ⚠️ Límites

- ✅2  -  4❌ _argumentos_
- ✅8  - 12❌ _complejidad ciclomática_
- ✅16 - 24❌ _instrucciones_

---

## Favorecer el estilo funcional puro:

> Una función pura es una función en la que el valor de retorno solo está determinado por sus valores de entrada, sin efectos secundarios observables.

- predecibles
- sin dependencias del entorno
- sin efectos secundarios en el entorno

## Métodos en _P.O.O._:

- ### cuantos menos argumentos mejor.

    - especialmente evita argumentos _flag_ usando múltiples funciones específicas

    - dar valores por defecto si el lenguaje los soporta.

    - favorecer objetos en lugar de primitivos

- ### un mismo nivel de abstracción: delega en funciones privadas

    - las instrucciones de las funciones públicas deberían ser llamadas a funciones privadas

- ### retornando datos; nunca errores.

    - los errores tienen su propio flujo mediante `try-catch throw`
    - si el lenguaje no lo permite, usar convenio tipo `(err, data)`.
---

### Objetivo: Muchas Pequeñas Funciones Organizadas

- Una función,

    - ## un sólo propósito.

    - ... o al menos un mismo nivel de abstracción.

- Sin comentarios.
  - ¿Me repito?. MAL!!!

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

[![Edit clean_code-functions](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/practical-fog-jp49h?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&previewwindow=tests&theme=dark)