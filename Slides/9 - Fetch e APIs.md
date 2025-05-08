
---
marp: true
theme: default
paginate: true
header: '**APIs com Fetch em JavaScript**'
footer: 'Prof. Bruno Torres Marques'
---

# Aula 7  
## Manipulação de APIs com Fetch

**Prof. Bruno Torres**

---

# Objetivos

- Entender o que é uma API  
- Usar `fetch()` para consumir dados  
- Trabalhar com JSON  
- Tratar erros de requisição  
- Criar um projeto usando API pública

---

# O que é uma API?

- API = Application Programming Interface  
- Ponto de comunicação entre aplicações  
- APIs Web: enviam e recebem dados pela internet

---

# Exemplo de API pública

- https://jsonplaceholder.typicode.com/  
- API de teste com dados simulados (usuários, posts etc.)

---

# Introdução ao `fetch()`

```js
fetch("https://api.exemplo.com/dados")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

# Resposta como JSON

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(usuarios => {
    console.log(usuarios);
  });
```

---

# Tratando erros

```js
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error("Erro na requisição");
    return res.json();
  })
  .catch(err => console.error(err));
```

---

# Async/Await com Fetch

```js
async function carregarDados() {
  try {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
  } catch (e) {
    console.error("Erro:", e);
  }
}
```

---

# Exibindo no DOM

```js
dados.forEach(usuario => {
  const li = document.createElement("li");
  li.textContent = usuario.name;
  lista.appendChild(li);
});
```

---

# Projeto prático

**Objetivo:** Listar nomes de usuários de uma API pública  
- Usar `fetch()`  
- Exibir os dados no HTML  
- Tratar erros de conexão

---

# HTML base

```html
<ul id="lista"></ul>
<button onclick="carregar()">Carregar Usuários</button>
```

---

# JS com fetch

```js
async function carregar() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await res.json();

  usuarios.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u.name;
    document.getElementById("lista").appendChild(li);
  });
}
```

---

# Requisições POST

```js
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "Bruno" })
});
```

---

# Métodos HTTP comuns

- GET → buscar dados  
- POST → enviar dados  
- PUT → atualizar dados  
- DELETE → apagar dados

---

# Dica: usar console.log()

- Verifique a estrutura dos dados
- Entenda como acessar os campos
- Use `console.table()` para visualizar listas

---

# Conclusão

- `fetch()` é a base para comunicação com APIs  
- JSON é o formato mais comum  
- Sempre trate erros para evitar bugs

---

# Obrigado!

Dúvidas? Vamos praticar!
