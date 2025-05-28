---
marp: true
theme: default
paginate: true
header: '**Introdução ao Bootstrap**'
footer: 'Prof. Bruno Torres Marques'
---

# Aula Extra: Bootstrap  
## O que é, para que serve e como usar no HTML

**Prof. Bruno Torres**

---

# 🎯 Objetivos da Aula

- Entender o que é o Bootstrap  
- Saber para que serve  
- Aprender a incluir o Bootstrap em projetos HTML  
- Utilizar componentes prontos para agilizar o desenvolvimento  
- Conhecer alternativas ao Bootstrap  
- Aprender a buscar e personalizar modelos prontos

---

# 🤔 O que é o Bootstrap?

- **Bootstrap** é um framework front-end  
- Criado pelo Twitter  
- Facilita a criação de sites bonitos e responsivos  
- Usa HTML, CSS e JavaScript prontos para usar

---

# 🛠️ Para que serve o Bootstrap?

- Deixar o site bonito rapidamente  
- Tornar o site responsivo (funciona em celular, tablet, PC)  
- Usar componentes prontos: botões, menus, cards, formulários etc.  
- Padronizar o visual do projeto

---

# 🚀 Como usar o Bootstrap no seu projeto?

## 1️⃣ Usando CDN (mais fácil)

Adicione este código dentro da `<head>` do seu HTML:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

E antes do `</body>` (opcional, para componentes JS):

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 2️⃣ Estrutura básica de um HTML com Bootstrap

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Site com Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-center text-primary">Olá, Bootstrap!</h1>
</body>
</html>
```

---

# 🧩 Exemplos de componentes Bootstrap

## Botão

```html
<button class="btn btn-success">Clique aqui</button>
```

## Alerta

```html
<div class="alert alert-warning" role="alert">
  Atenção! Isso é um alerta Bootstrap.
</div>
```

---

# 📦 Layout responsivo com Grid

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 bg-light">Coluna 1</div>
    <div class="col-md-6 bg-secondary text-white">Coluna 2</div>
  </div>
</div>
```

---

# 📝 Exemplo prático: Página com Bootstrap

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1 class="text-center">Minha Página Bootstrap</h1>
    <button class="btn btn-primary">Botão Azul</button>
    <div class="alert alert-success mt-3">Cadastro realizado com sucesso!</div>
  </div>
</body>
</html>
```

---

# 🎨 Personalizando o Bootstrap

- Você pode criar seu próprio CSS para sobrescrever estilos do Bootstrap.
- Use as classes utilitárias para ajustar margens, cores, espaçamentos, etc.
- Exemplo de customização:

```html
<button class="btn btn-primary my-3" style="background-color: #6610f2;">Botão Roxo</button>
```

---

# 🖼️ Onde encontrar modelos prontos?

- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Start Bootstrap](https://startbootstrap.com/)
- [BootstrapMade](https://bootstrapmade.com/)
- [Colorlib](https://colorlib.com/wp/templates/)
- Procure por "Bootstrap templates" no Google

---

## Como usar um modelo pronto?

1. Baixe o template desejado (zip ou arquivos).
2. Extraia os arquivos e abra no VS Code.
3. Personalize textos, imagens e cores conforme seu projeto.
4. Aproveite os componentes já prontos e adaptados.

---

# 🔄 Alternativas ao Bootstrap

- **Bulma**: https://bulma.io/
- **Materialize**: https://materializecss.com/
- **Foundation**: https://get.foundation/
- **Tailwind CSS**: https://tailwindcss.com/
- **Semantic UI**: https://semantic-ui.com/

Cada framework tem seu estilo e vantagens. Explore e escolha o que mais combina com seu projeto!

---

# 💡 Dicas para usar frameworks CSS

- Leia a documentação oficial para conhecer todas as classes e componentes.
- Use o inspetor do navegador para testar classes rapidamente.
- Combine Bootstrap com seu próprio CSS para resultados únicos.
- Não exagere: use apenas os componentes necessários para não deixar o site pesado.

---

# 🧑‍💻 Exercício prático

- Escolha um template pronto de Bootstrap.
- Personalize com seu nome, cores e imagens.
- Adicione pelo menos 2 componentes diferentes (ex: alerta, botão, card, navbar).
- Mostre para a turma!

---

# ✅ Conclusão

- Bootstrap agiliza o desenvolvimento de sites bonitos e responsivos  
- Fácil de usar: basta incluir o link no HTML  
- Muitos componentes prontos para usar  
- Existem várias alternativas no mercado  
- Personalize para deixar o site com a sua cara!

---

# 🙋‍♂️ Perguntas?

Vamos praticar!