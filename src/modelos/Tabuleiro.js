import Peca from "./Peca.js";

export default class Tabuleiro {
    constructor(modelo = "3x3") {
        this.modo = modelo;
        this.tamanho = parseInt(this.modo[0]);
        this.tamanho *= this.tamanho;
        this.pecas = [];
        this.pecas_no_tabuleiro = [];
        for (let x = 0; x < this.tamanho - 1; x++) {
            this.pecas.push(
                new Peca(x + 1)
            )
        }
        this.embaralhar();
    }

    embaralhar() {
        let temp = [];
        while (temp.length < this.pecas.length) {
            let peca = this.pecas[Math.floor(Math.random() * this.pecas.length)]
            if (temp.indexOf(peca) == -1) temp.push(peca);
        }
        let vazia = new Peca()
        vazia.vazio = true;
        temp.push(vazia);
        this.pecas_no_tabuleiro = temp;
        this.identificar();
    }

    identificar() {
        for (let i = 0; i < this.pecas_no_tabuleiro.length; i++) {
            let peca = this.pecas_no_tabuleiro[i];
            peca.lados = {
                d: this.pecas_no_tabuleiro[i + 1],
                e: this.pecas_no_tabuleiro[i - 1],
                c: this.pecas_no_tabuleiro[i - 3],
                b: this.pecas_no_tabuleiro[i + 3]
            }
        }
    }

    checarVitoria() {
        let valor = [1, 2, 3, 4, 5, 6, 7, 8];
        let certo = 0;
        this.pecas_no_tabuleiro.forEach((peca, index) => {
            if (peca.numero == valor[index]) {
                certo++;
            }
        });
        return (certo == 9);
    }

}