const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');
const { MD5HashingStrategy } = require('./hashingStrategy');
const { v4: uuidv4 } = require('uuid');

class Coinbase extends TransaccionLeafAbstracta {
  constructor(OUT) {
    super(`tx-${uuidv4()}`, OUT);
    this.TKN = `TKN-${uuidv4()}`;
    this.generarHashPorDefecto();
  }

  generarHashPorDefecto() {
    const data = `${this.TKN}-${this.OUT}-${this.id}`;
    const md5HashingStrategy = new MD5HashingStrategy();
    this.setHashStrategy(md5HashingStrategy);
    this.hash = this.hashStrategy.generateHash(data);
  }

  agregarTransaccion(transaccion) {
    throw new Error('No se pueden agregar transacciones a una transacción de tipo Coinbase.');
  }

  obtenerNivel() {
    return 0;
  }
}

module.exports = Coinbase;
