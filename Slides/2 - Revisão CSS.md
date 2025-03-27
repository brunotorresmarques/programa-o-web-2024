---
marp: true
theme: default
paginate: true
header: '**Revisão de CSS3**'
footer: 'Bruno Torres Marques'
---

# Revisão de CSS3

**Prof. Bruno Torres**

---

# O que é CSS?

- **Cascading Style Sheets** (Folhas de Estilo em Cascata)
- Linguagem usada para estilizar elementos HTML
- Permite separar o conteúdo da apresentação

---

# Para que serve?

- Define cores, fontes e espaçamentos
- Controla o layout da página
- Permite criar efeitos visuais
- Torna os sites responsivos

---

# Como funciona?

CSS pode ser aplicado de três formas:

---

## CSS Inline

- Aplicado diretamente na tag HTML
- Menos recomendado para código organizado

### Exemplo:
```html
<p style="color: blue;">Texto azul (CSS Inline)</p>
```

---

## CSS Interno

- Definido dentro da tag `<style>` no HTML
- Melhor para páginas pequenas ou testes

### Exemplo:
```html
<style>
p {
  color: red;
}
</style>
```

---

## CSS Externo

- Arquivo separado (`.css`)
- Melhor prática para projetos maiores

### Exemplo:
```css
/* Externo */
p {
  color: green;
}
```

---

# Como atacar os elementos?

---

## Seletor de **tag**
- Aplica o estilo a todas as tags do tipo especificado.
```css
p {
  color: blue;
}
```

---

## Seletor de **classe**
- Usado para estilizar múltiplos elementos com a mesma classe.
```css
.destacado {
  background-color: yellow;
}
```

---

## Seletor de **id**
- Aplica o estilo a um único elemento com o ID específico.
```css
#titulo {
  font-size: 24px;
}
```

---

## Seletor de **atributo**
- Estiliza elementos que possuem um determinado atributo.
```css
input[type="text"] {
  border: 2px solid gray;
}
```

---

# Principais propriedades

---

## Cores
- Define a cor do texto e o fundo dos elementos.
```css
p {
  color: red;
  background-color: lightgray;
}
```

---

## Bordas
- Define a borda ao redor de um elemento e pode arredondá-la.
```css
div {
  border: 2px solid black;
  border-radius: 10px;
}
```

---

## Centralização
- `text-align: center;` centraliza o texto dentro do elemento.
- `margin: 0 auto;` centraliza o elemento dentro do container.
```css
div {
  text-align: center;
  margin: 0 auto;
}
```

---

## Espaçamentos
- `padding` define o espaçamento interno do elemento.
- `margin` define o espaçamento externo do elemento.
```css
div {
  padding: 10px;
  margin: 20px;
}
```

---

## Fontes
- `font-family` define a família de fontes.
- `font-size` define o tamanho do texto.
```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
}
```

---

# Layout e Responsividade

---

## Flexbox

- Permite organizar elementos de forma flexível.
- Facilita alinhamento e distribuição de espaço.

### Exemplo:
```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## Grid

- Layout baseado em colunas e linhas.
- Alternativa ao Flexbox para estruturas complexas.

### Exemplo:
```css
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

## Media Queries

- Adapta estilos para diferentes tamanhos de tela.
- Essencial para design responsivo.

### Exemplo:
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

# Conclusão

- CSS é essencial para o design web.
- Permite estilizar e organizar páginas.
- Torna os sites responsivos e atraentes.

---

# Obrigado!

Dúvidas?

