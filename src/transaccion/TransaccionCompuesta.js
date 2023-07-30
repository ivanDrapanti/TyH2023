const Transaction = require('./Transaccion');

class TransaccionCompuesta extends Transaction{
    constructor(transacciones = [], nivel) {
        super();
        this.transacciones = transacciones;
        this.nivel = nivel == null ? 1 : nivel;
    }

    estaCompleta(){
        return this.transacciones.length === 3;
    }

    obtenerTransacciones(){
        if(this.transacciones == null)
            this.transacciones = [];
        return this.transacciones;
    };

    agregarTransaccion(transaccion){
        if(this.transacciones != null && this.estaCompleta())
            throw new Error('La transaccion compuesta esta llena');
        //Aca habria que hashear la transaccion.
        if(this.transacciones == null)
            this.transacciones = [];
        this.transacciones.push(transaccion);
    }
}

module.exports = TransaccionCompuesta;