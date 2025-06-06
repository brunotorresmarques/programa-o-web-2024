---
marp: true
theme: default
paginate: true
header: '**Introdução ao Git e GitHub**'
footer: 'Prof. Bruno Torres Marques'
---

# Git e GitHub  
## Controle de versão e publicação de sites

**Prof. Bruno Torres**

---

# 🎯 Objetivos da Aula

- Entender o que é Git e para que serve  
- Aprender a criar e clonar repositórios no GitHub  
- Praticar comandos básicos do Git  
- Publicar um site no GitHub Pages  
- Dicas de segurança em computadores públicos

---

# 🤔 O que é Git?

- **Git** é um sistema de controle de versão
- Permite salvar o histórico do seu projeto
- Facilita trabalhar em equipe e recuperar versões antigas

---

# 🐙 O que é GitHub?

- **GitHub** é uma plataforma online para hospedar repositórios Git
- Permite colaboração, backup e publicação de projetos
- Gratuito para projetos públicos

---

# 🛠️ Instalando o Git

- Baixe em: https://git-scm.com/
- Siga o instalador padrão para seu sistema operacional
- No VS Code, o terminal já reconhece comandos Git

---

# 📝 Criando um repositório no GitHub

1. Acesse [github.com](https://github.com/) e faça login/crie sua conta
2. Clique em **New repository**
3. Dê um nome, escolha "Public" e clique em **Create repository**

---

# 👣 Passo a passo: Usando Git e GitHub no VS Code

---

## 1️⃣ Configurando o Git pela primeira vez

No terminal, configure seu nome e email (apenas na primeira vez):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## 2️⃣ Clonando um repositório do GitHub

No terminal do VS Code:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

- Isso cria uma pasta com o projeto na sua máquina.

---

## 3️⃣ Navegando até a pasta do projeto

```bash
cd NOME_DO_REPOSITORIO
```

---

## 4️⃣ Fazendo login no GitHub pelo terminal

- Ao usar `git push` pela primeira vez, será solicitado login.
- Prefira HTTPS (não use SSH em computadores públicos).
- Digite seu usuário e senha/token (nunca marque para salvar).

---

## 5️⃣ Salvando e subindo alterações

1. Faça alterações nos arquivos.
2. No terminal:

```bash
git status           # Verifica arquivos alterados
git add .            # Adiciona todas as mudanças
git commit -m "Mensagem explicando a alteração"
git push             # Envia para o GitHub
```

---

## 6️⃣ Baixando alterações do GitHub

Se alguém alterou o projeto no GitHub, use:

```bash
git pull
```

---

## 7️⃣ Deslogando do GitHub em computadores públicos

- No navegador: sempre faça logout do GitHub ao terminar.
- No terminal: feche o VS Code e apague a pasta do projeto se estiver em computador público.
- Nunca salve senha ou token no navegador.

---

# 🌐 Publicando um site no GitHub Pages

1. Suba seu projeto para o repositório no GitHub.
2. No GitHub, vá em **Settings** > **Pages**.
3. Em "Source", escolha a branch (geralmente `main`) e clique em **Save**.
4. O link do seu site aparecerá na tela (ex: `https://seuusuario.github.io/nomedorepositorio/`).

---

## Exemplo de estrutura para um site

```
meu-site/
├── index.html
├── style.css
└── script.js
```

---

# 🛡️ Dicas de segurança em computadores públicos

- Nunca salve senhas ou tokens.
- Sempre faça logout do GitHub no navegador.
- Prefira HTTPS para clonar e enviar projetos.
- Apague a pasta do projeto ao terminar.

---

# 💡 Dicas finais

- Use README.md para explicar seu projeto.
- Atualize seu site facilmente: basta dar push no repositório.
- Explore outros recursos do GitHub, como Issues e Pull Requests.

---

# ✅ Conclusão

- Git e GitHub facilitam o controle de versões e colaboração.
- GitHub Pages permite publicar sites grátis.
- Segurança é fundamental em computadores públicos.

---

# 🙋‍♂️ Perguntas?

Vamos praticar!