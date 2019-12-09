# Names

## Dar sentido mediante los nombres

> "Solo hay dos cosas difíciles en Informática: invalidar la caché y nombrar cosas"
>
> -- **Phil Karlton**

---

### Claridad

--

#### Mostrar la INTENCIÓN

--

    - Explicar por qué se hace.

---

### Sustantivos

#### Para variables / propiedades

- Vocabulario de **entidades y propiedades** de negocio

#### Para roles o clases

- manager, presenter, interactor, validator, mapper

> Palabras completas y descriptivas

```typescript
class Invoice{
  number;
  date;
  client;
}
class InvoiceValidator{}
```

---

### Verbos

#### Cortos y concretos en flags

- is, has, get, set, can, must, do

#### Obligatorios en funciones / métodos

- Vocabulario para **relaciones y acciones** comunes

> Clarifica mediante sustantivos, adverbios, preposiciones

```typescript
class Client{
  hasPendingOrders: boolean;
  getPendingOrders(){}
  getOrdersByStatus(orderStatus){}
}
```

---

![wtf-naming](./assets/naming.png)

---

### Reduce WTF!

- **No magic numbers**
- **No magic strings**

```typescript
const minimumAge = 18;
const allowedMessage = "Welcome";
const deniedMessage = "Go home";

if(yourAge >= minimumAge){
  console.log(allowedMessage);
} else {
  console.log(deniedMessage);
}
```

---

### Consistencia

- Mejor ser **consistente** con pocas normas...
- ... que cambiar de norma consistentemente.

--

### Piensa en mi

- No me sorprendas
- No me hagas pensar

---

> "Un nombre descriptivo largo es mejor que un nombre corto enigmático.

> Un nombre descriptivo largo es mejor que un comentario descriptivo largo.

> Nombra una variable con el mismo cuidado con el que nombras a un primogénito"
>
> -- **Robert C. Martin**


