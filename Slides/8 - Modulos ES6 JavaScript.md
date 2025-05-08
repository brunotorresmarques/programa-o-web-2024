---
marp: true
theme: default
paginate: true
header: '**Módulos em JavaScript (ES6)**'
footer: 'Prof. Bruno Torres Marques'
---

# Aula 6  
## Módulos em JavaScript (ES6 Modules)

**Prof. Bruno Torres**

---

# Objetivos

- Entender o que são módulos  
- Dividir código em arquivos reutilizáveis  
- Aprender a usar `export` e `import`  
- Aplicar em projeto prático

---

# O que são módulos?

- Arquivos JS com código **isolado e reutilizável**  
- Melhor organização e manutenção do projeto  
- Evita conflitos de nomes (escopo)

---

# Criando um módulo

```js
// saudacao.js
export function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

---

# Importando o módulo

```js
// app.js
import { saudacao } from "./saudacao.js";
console.log(saudacao("Bruno"));
```

---

# Export default

```js
// math.js
export default function soma(a, b) {
  return a + b;
}
```

```js
// app.js
import soma from "./math.js";
```

---

# Vários exports

```js
export const PI = 3.14;
export function area(r) {
  return PI * r * r;
}
```

```js
import { PI, area } from "./figuras.js";
```

---

# Renomeando e agrupando

```js
import { area as calcularArea } from "./figuras.js";
import * as figuras from "./figuras.js";
```

---

# HTML com módulo

```html
<script type="module" src="app.js"></script>
```

- Necessário para ativar os imports/exports

---

# Evitando erro CORS

- Usar servidor local como o **Live Server**  
- Módulos não funcionam via `file://`

---

# Projeto prático

**Objetivo:** Separar responsabilidades  
- `math.js` → funções matemáticas  
- `mensagens.js` → textos  
- `app.js` → lógica principal

---

# math.js

```js
export function somar(a, b) {
  return a + b;
}
export function multiplicar(a, b) {
  return a * b;
}
```

---

# mensagens.js

```js
export function boasVindas(nome) {
  return `Bem-vindo, ${nome}!`;
}
```

---

# app.js

```js
import { somar } from "./math.js";
import { boasVindas } from "./mensagens.js";

console.log(boasVindas("Bruno"));
console.log(somar(3, 4));
```

---

# Conclusão

- Organize seu código com módulos  
- Separe responsabilidades  
- Use sempre `type="module"` no HTML

---

# Obrigado!

Dúvidas? Vamos praticar!
