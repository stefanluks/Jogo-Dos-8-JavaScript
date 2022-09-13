import Tabuleiro from '../modelos/Tabuleiro.js'

window.onload = () => {
    let tabuleiro = new Tabuleiro();
    let app = document.querySelector("#app");
    let btnReset = document.querySelector(".btn-resetar");

    MontarTabuleiro();

    function MontarTabuleiro() {
        app.innerHTML = "";

        let table = CRIAR('div', 'tabuleiro');
        let x = 0;
        let y = 0;

        tabuleiro.pecas_no_tabuleiro.forEach((peca, index) => {
            let p = CRIAR('div', 'peca');
            if (peca.vazio) p.className = "peca vazia";
            p.textContent = peca.numero;
            p.id = 'peca-' + index;
            p.style.top = ((y * 95) + 30) + "px";
            p.style.left = ((x * 95) + 30) + "px";
            if (x < 2) {
                x++;
            } else {
                x = 0;
                y++;
            }
            p.addEventListener("click", () => {
                let t = peca.mover();
                if (t) {

                    let pecaVazia = document.querySelector("#peca-8");

                    let pos = {
                        top: pecaVazia.style.top,
                        left: pecaVazia.style.left,
                    }

                    pecaVazia.style.top = p.style.top;
                    pecaVazia.style.left = p.style.left;

                    p.style.top = pos.top;
                    p.style.left = pos.left;

                    let posP = tabuleiro.pecas_no_tabuleiro.indexOf(peca);
                    let posV = tabuleiro.pecas_no_tabuleiro.indexOf(t);

                    tabuleiro.pecas_no_tabuleiro[posV] = peca;
                    tabuleiro.pecas_no_tabuleiro[posP] = t;

                    tabuleiro.identificar();
                    if (tabuleiro.checarVitoria()) {
                        vitoria();
                    }
                }
            })
            table.appendChild(p);
        });

        app.appendChild(table);
    }

    btnReset.addEventListener('click', Resetar);
    btnReset.addEventListener('click', Resetar);

    function Resetar() {
        tabuleiro.embaralhar();
        console.log(tabuleiro);
        let vitoriaHTML = document.querySelector(".vitoria");
        if (vitoriaHTML) vitoriaHTML.remove();

        MontarTabuleiro();
    }

    function vitoria() {
        document.querySelector("body").innerHTML += `
            <div class="vitoria">
                <div class="caixa">
                    <text>Parabéns você conseguiu!</text>
                    <div class="btn btn-warning btn-recomecar">Recomeçar</div>
                </div>
            </div>
        `;
        document.querySelector(".btn-recomecar").addEventListener("click", Resetar);
    }
}

function CRIAR(elemento, classe) {
    let elem = document.createElement(elemento);
    elem.className = classe;
    return elem;
}