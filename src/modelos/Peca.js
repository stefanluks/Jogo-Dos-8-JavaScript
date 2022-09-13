export default class Peca {
    constructor(numero) {
        this.numero = numero;
        this.vazio = false;
        this.lados = {
            d: null,
            e: null,
            c: null,
            b: null
        }
    }

    mover() {
        let saida = null;
        Object.keys(this.lados).forEach(lado => {
            let ld = this.lados[lado];
            if (ld) {
                if (ld && ld.vazio == true) {
                    saida = ld;
                }
            }
        });
        return saida;
    }

}