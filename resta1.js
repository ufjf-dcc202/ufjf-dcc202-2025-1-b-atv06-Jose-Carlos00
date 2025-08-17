const LARGURA_TABULEIRO = 7;
const tabuleiroResta1 = [
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'peca',     'peca',     'peca',    'peca',    'peca',    'peca',     'peca',
    'peca',     'peca',     'peca',    'vazio',   'peca',    'peca',     'peca',
    'peca',     'peca',     'peca',    'peca',    'peca',    'peca',     'peca',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido'
];
let pecaSelecionada = null;
export function getTabuleiro() {
    return [...tabuleiroResta1];
}
export function getPecaSelecionada() {
    return pecaSelecionada;
}
function moverPeca(origem, destino) {
    if (tabuleiroResta1[origem] !== 'peca' || tabuleiroResta1[destino] !== 'vazio') {
        return false;
    }
    const diff = Math.abs(origem - destino);
    const pecaComidaPos = (origem + destino) / 2;
    const movimentoHorizontal = diff === 2 && Math.floor(origem / LARGURA_TABULEIRO) === Math.floor(destino / LARGURA_TABULEIRO);
    const movimentoVertical = diff === (2 * LARGURA_TABULEIRO);
    if (!movimentoHorizontal && !movimentoVertical) {
        return false;
    }
    if (tabuleiroResta1[pecaComidaPos] !== 'peca') {
        return false;
    }
    tabuleiroResta1[origem] = 'vazio';
    tabuleiroResta1[destino] = 'peca';
    tabuleiroResta1[pecaComidaPos] = 'vazio';
    return true;
}
export function gerenciaClique(posicao) {
    if (pecaSelecionada === null) {
        if (tabuleiroResta1[posicao] === 'peca') {
            pecaSelecionada = posicao;
            return true;
        }
    } else {
        if (pecaSelecionada === posicao) {
            pecaSelecionada = null;
            return true;
        }
        const moveu = moverPeca(pecaSelecionada, posicao);
        if (moveu) {
            pecaSelecionada = null;
            return true;
        } else {
            if (tabuleiroResta1[posicao] === 'peca') {
                pecaSelecionada = posicao;
                return true;
            }
        }
    }
    return false;
}
//José Carlos