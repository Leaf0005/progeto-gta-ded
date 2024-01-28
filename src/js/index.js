const botao = document.querySelector(".btn-plataforma")
var conteudo = document.querySelector(".btn-plataforma .plataformas")
const botaoestaaberto = conteudo.classList.contains("ativo");

botao.addEventListener('click', () => {
    conteudo.classList.toggle("ativo")
});
