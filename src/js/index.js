const botao = document.querySelector(".bnt-plataforma")
var conteudo = document.querySelector(".bnt-plataforma .plataformas")
const botaoestaaberto = conteudo.classList.contains("ativo");

botao.addEventListener('click', () => {
    conteudo.classList.toggle("ativo")
});
