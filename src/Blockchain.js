const Nodo = require('./Nodo');

class Blockchain {
    constructor(){
        this._bloques = [];
    }

    push(bloque) {
        this._bloques.push(bloque);
        return this._bloques;
      }


    obtenerBlockchain(){
        return this._bloques;
    }
}

module.exports = Blockchain;