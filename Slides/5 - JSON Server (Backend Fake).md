---
marp: true
theme: default
paginate: true
header: '**Sistema de Anotações** - HTML/CSS/JS + JSON Server'
footer: 'Bruno Torres Marques'
---

# Como Usar JSON Server (Backend Fake)

**Prof. Bruno Torres**

---

# O que é JSON Server?

- Um backend fake para prototipação rápida
- Simula uma API RESTful com um arquivo JSON
- Fácil de instalar e usar

---

# Instalação

```sh
npm install -g json-server
```

---

# Criando um Banco de Dados

1. Crie um arquivo `db.json`
2. Estruture os dados como um JSON válido

```json
{
  "usuarios": [
    { "id": 1, "nome": "Bruno" },
    { "id": 2, "nome": "Maria" }
  ]
}
```

---

# Iniciando o Servidor

```sh
json-server --watch db.json
```

- O servidor rodará em `http://localhost:3000`

---

# Rotas Padrão

- `GET /usuarios` → Retorna todos os usuários
- `GET /usuarios/1` → Retorna o usuário com ID 1
- `POST /usuarios` → Adiciona um novo usuário
- `PUT /usuarios/1` → Atualiza o usuário com ID 1
- `DELETE /usuarios/1` → Remove o usuário com ID 1

---

# Exemplo de Requisição Fetch

```js
fetch('http://localhost:3000/usuarios')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

# Conclusão

- JSON Server facilita a prototipação de APIs
- Simples, rápido e eficiente
- Ótimo para desenvolvimento front-end

---

# Obrigado!

Dúvidas?
