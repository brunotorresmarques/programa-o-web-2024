export function a(nome) {
    if (nome === "Lucas") {
        document.getElementById("mensagem").classList.add("c1");
    }
    if (nome === "João") {
        document.getElementById("mensagem").classList.add("c2");
    }
  return `Olá, ${nome}! Eu sou a função A!`;
}

export function b(nome) {
  return `Olá, ${nome}! Eu sou a função B!`;
}