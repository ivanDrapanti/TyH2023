const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');
const { MD5HashingStrategy } = require('./hashingStrategy');
const { v4: uuidv4 } = require('uuid');

class Coinbase extends TransaccionLeafAbstracta {

  constructor(OUT) {
    super(null, OUT);
    this.TKN = `TKN-${uuidv4()}`;
    this.generarHashPorDefecto();
  }

  agregarTransaccion(transaccion) {
    throw new Error('No se pueden agregar transacciones a una transacción de tipo Coinbase.');
  }

  obtenerNivel() {
    return 0;
  }
}

module.exports = Coinbase;
