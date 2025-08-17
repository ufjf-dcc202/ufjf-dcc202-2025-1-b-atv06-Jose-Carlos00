import { getTabuleiro, gerenciaClique, getPecaSelecionada } from "./resta1.js";
const eTabuleiro = document.querySelector(".tabuleiro-resta1");
function atualizaVisual() {
    const tabuleiro = getTabuleiro();
    const pecaSelecionada = getPecaSelecionada();
    const posicoes = eTabuleiro.children;
    for (let i = 0; i < tabuleiro.length; i++) {
        posicoes[i].dataset.tipo = tabuleiro[i];

        if (i === pecaSelecionada) {
            posicoes[i].classList.add('selecionada');
        } else {
            posicoes[i].classList.remove('selecionada');
        }
    }
}function posicaoClick(evento) {
    const posicao = Number(evento.target.dataset.posicao);
    const mudouEstado = gerenciaClique(posicao);
    if (mudouEstado) {
        atualizaVisual();
    }
}function montaTabuleiroInicial() {
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < tabuleiro.length; i++) {
        const ePosicao = document.createElement("div");
        ePosicao.classList.add("posicao");
        ePosicao.dataset.posicao = i;
        ePosicao.dataset.tipo = tabuleiro[i];
        ePosicao.addEventListener("click", posicaoClick);
        eTabuleiro.append(ePosicao);
    }
}
montaTabuleiroInicial();
//José Carlos