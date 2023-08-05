const Bloque = require('./Bloque');
const { MD5HashingStrategy, SHA256HashingStrategy } = require('../hashing');

class BloqueCerrado extends Bloque {
  constructor(transacciones = [], timeStamp, previousHash) {
    super(transacciones);
    this.timeStamp = timeStamp;
    this.previousHash = previousHash;
    this.hashStrategy = new MD5HashingStrategy(); // Estrategia de hashing por defecto (MD5)
    this.hash = this.calcularHash();
  }

  calcularHash() {
    if (!this.hashStrategy) {
      throw new Error('Hash strategy no se ha generado.');
    }

    const data = `${this.timeStamp}-${this.previousHash || ''}-${this.calcularHashTransacciones()}`;
    return this.hashStrategy.generateHash(data);
  }

  calcularHashTransacciones(){
    for (let i = 0; i < this.transacciones.length; i++) {
      const hashTransaccione = this.hashStrategy.generateHash(this.transacciones[i]);
      hashTransacciones += hashTransaccione;
    }
    return hashTransacciones;
  }

  obtenerHash(){
    return this.hash;
  }
}

module.exports = BloqueCerrado;