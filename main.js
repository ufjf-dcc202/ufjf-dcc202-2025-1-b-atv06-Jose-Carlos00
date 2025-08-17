import { getTabuleiro } from "./resta1.js";


function criaTabuleiroElement() {
    const novoTabuleiro = document.createElement("div");
    novoTabuleiro.classList.add("tabuleiro-resta1");
    return novoTabuleiro;
}

function criaPosicaoElement(tipo, posicao) {
    const novaPosicao = document.createElement("div");
    novaPosicao.classList.add("posicao");
    novaPosicao.dataset.tipo = tipo;
    novaPosicao.dataset.posicao = posicao;
    if (tipo !== 'invalido') {
    }
    return novaPosicao;
}

const eTabuleiro = criaTabuleiroElement();
document.body.append(eTabuleiro);

const tabuleiro = getTabuleiro();
for (let i = 0; i < tabuleiro.length; i++) {
    const ePosicao = criaPosicaoElement(tabuleiro[i], i);
    eTabuleiro.append(ePosicao);
}
