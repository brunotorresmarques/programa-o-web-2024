---
marp: true
theme: default
paginate: true
header: '**Revisão de HTML5**'
footer: 'Bruno Torres Marques'
---

# Revisão de HTML5

**Prof. Bruno Torres**

---

# O que é HTML5?

- Última versão do HTML
- Introduz novos elementos e APIs
- Melhora a semântica e acessibilidade
- Melhor suporte para multimídia

---

# Estrutura Básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página HTML5</title>
</head>
<body>
  <h1>Bem-vindo ao HTML5</h1>
</body>
</html>
```

---

# Títulos e Parágrafos

- `<h1>` a `<h6>` → Títulos de diferentes níveis
- `<p>` → Parágrafos de texto

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Este é um parágrafo de texto em HTML5.</p>
```

---

# Listas

### Lista não ordenada
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Lista ordenada
```html
<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
  <li>Terceiro</li>
</ol>
```

---

# Tabelas

```html
<table border="1">
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>Bruno</td>
    <td>30</td>
  </tr>
</table>
```

---

# Elementos Semânticos

- `<header>` → Cabeçalho
- `<nav>` → Navegação
- `<section>` → Seção de conteúdo
- `<article>` → Artigo independente
- `<aside>` → Barra lateral
- `<footer>` → Rodapé

---

# Formulários Modernos

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Enviar</button>
</form>
```

---

# Multimídia

### Áudio
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Seu navegador não suporta áudio.
</audio>
```

### Vídeo
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Seu navegador não suporta vídeo.
</video>
```

---

# APIs do HTML5

- Geolocalização
- Armazenamento Local (LocalStorage e SessionStorage)
- Canvas (Gráficos e desenhos)
- Drag and Drop
- WebSockets

---

# Exemplo de LocalStorage

```js
localStorage.setItem("nome", "Bruno");
console.log(localStorage.getItem("nome"));
```

---

# Conclusão

- HTML5 é essencial para o desenvolvimento web
- Introduz novos elementos semânticos e recursos
- Facilita a criação de páginas interativas e acessíveis

---

# Obrigado!

Dúvidas?

