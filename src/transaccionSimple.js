const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');

class TransaccionSimple extends TransaccionLeafAbstracta {
  constructor(IN, OUT) {
    super(IN, OUT);
  }

  agregarTransaccion(transaccion) {
    throw new Error('No se pueden agregar transacciones a una transacción de tipo TransaccionSimple.');
  }

  obtenerNivel() {
    return 0;
  }
}

module.exports = TransaccionSimple;
