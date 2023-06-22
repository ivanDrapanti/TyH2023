const Transaction = require('./Transaccion');

class TransaccionCompuesta extends Transaction{
    constructor(transacciones = []) {
        this.transacciones = transacciones;
    }

    estaCompleta(){
        return this.transacciones.length > 3;
    }

    agregarTransaccion(transaccion){
        if(this.estaCompleta)
            throw new Error('La transaccion compuesta esta llena');
        this.transacciones.push(transaccion);
    }
}

module.exports = TransaccionCompuesta;