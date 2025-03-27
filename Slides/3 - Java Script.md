---
marp: true
theme: default
paginate: true
header: '**Revisão de JavaScript**'
footer: 'Bruno Torres Marques'
---

# JavaScript

**Prof. Bruno Torres**

---

# O que é JavaScript?

- Linguagem de programação usada para criar interatividade em páginas web.
- Funciona junto com HTML e CSS para desenvolver aplicações dinâmicas.
- Permite manipular elementos da página, criar animações e responder a eventos do usuário.

---

# Como incluir JavaScript no HTML?

---

## Código Inline

- JavaScript pode ser inserido diretamente dentro de atributos HTML.

### Exemplo:
```html
<button onclick="alert('Olá, Mundo!')">Clique aqui</button>
```

---

## Código Interno

- O código é colocado dentro da tag `<script>` no HTML.

### Exemplo:
```html
<script>
  alert('Bem-vindo ao JavaScript!');
</script>
```

---

## Código Externo

- O código fica em um arquivo separado e referenciado no HTML.

### Exemplo:
```html
<script src="script.js"></script>
```

---

# Selecionando Elementos HTML

---

## Por ID

```js
document.getElementById("meuElemento");
```

- Retorna um único elemento com o ID especificado.

---

## Por Classe

```js
document.getElementsByClassName("minhaClasse");
```

- Retorna uma coleção de elementos com a classe especificada.

---

## Por Tag

```js
document.getElementsByTagName("div");
```

- Retorna uma coleção de elementos de uma determinada tag.

---

# Manipulando Elementos

---

## Alterando Conteúdo

```js
document.getElementById("meuElemento").innerHTML = "Novo Texto";
```

- Modifica o conteúdo de um elemento.

---

## Alterando Estilos

```js
document.getElementById("meuElemento").style.color = "red";
```

- Modifica propriedades CSS de um elemento.

---

## Trabalhando com Classes

```js
document.getElementById("meuElemento").classList.add("destaque");
document.getElementById("meuElemento").classList.remove("destaque");
```

- Adiciona ou remove classes de um elemento.

---

# Eventos em JavaScript

---

## Adicionando Eventos

```js
document.getElementById("meuBotao").addEventListener("click", function() {
  alert("Botão clicado!");
});
```

- Define um evento que será executado quando o botão for clicado.

---

## Eventos Comuns

- **click** → Quando o usuário clica em um elemento.
- **mouseover** → Quando o mouse passa sobre um elemento.
- **keydown** → Quando uma tecla é pressionada.

---

# Estruturas Condicionais

---

## if/else

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

- Executa diferentes blocos de código baseado em condições.

---

## switch

```js
switch (cor) {
  case "vermelho":
    console.log("A cor é vermelha");
    break;
  case "azul":
    console.log("A cor é azul");
    break;
  default:
    console.log("Outra cor");
}
```

- Alternativa ao if/else para múltiplas condições.

---

# Estruturas de Repetição

---

## Loop for

```js
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

- Executa um bloco de código várias vezes.

---

## Loop while

```js
let contador = 0;
while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}
```

- Repete enquanto a condição for verdadeira.

---

# Funções em JavaScript

---

## Definindo Funções

```js
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
```

- Agrupam código reutilizável.

---

## Chamando Funções

```js
let mensagem = saudacao("Bruno");
console.log(mensagem);
```

- Executa a função passando argumentos.

---

# Conclusão

- JavaScript é essencial para tornar páginas interativas.
- Permite manipular elementos HTML e responder a eventos.
- Uso de funções, loops e condicionais torna o código dinâmico.

---

# Obrigado!

Dúvidas? Entre em contato!

