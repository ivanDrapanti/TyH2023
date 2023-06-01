const Blockchain = require('./Blockchain');

class Nodo {
    constructor(blockchain){
        this._blockchain = blockchain;
    }

    recibirBlockchainActualizada(){
        this._bloques = blockchain.obtenerBlockchain();
    }

    //puede haber una clase bloque cerrado y bloque abierto y usar composición entonces manejan distinto comportamiento
    cerrarBloque(){

    }

    crearBloque(){
        let nuevoBloque = new Bloque();
        return nuevoBloque;
    }

    enviarBloque(bloque){
        this._blockchain.push(blockchain.push(bloque));
    }
}