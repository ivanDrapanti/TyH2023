const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');

class Coinbase extends TransaccionLeafAbstracta {
  constructor(TKN, OUT) {
    super(null, OUT);
    this.TKN = TKN;
  }

  agregarTransaccion(transaccion) {
    throw new Error('No se pueden agregar transacciones a una transacción de tipo Coinbase.');
  }
  
  obtenerNivel() {
    return 0;
  }
}

module.exports = Coinbase;
