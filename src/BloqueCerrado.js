const Bloque = require('./Bloque');

class BloqueCerrado extends Bloque {
  constructor(transacciones = [], timeStamp, previousHash, hash) {
    super(transacciones);
    this.timeStamp = timeStamp;
    this.previousHash = previousHash;
    this.hash = hash;
  }
}

module.exports = BloqueCerrado;