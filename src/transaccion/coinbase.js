const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');
const { v4: uuidv4 } = require('uuid');

class Coinbase extends TransaccionLeafAbstracta {

  constructor(nombreDueño, dniDueño) {
    super(null);
    this.nombreDueño = nombreDueño;
    this.dniDueño = dniDueño;
    this.TKN = `TKN-${uuidv4()}`;
    this.calcularHash(); // Calcular el hash automáticamente al crear la Coinbase
    }

  agregarTransaccion(transaccion) {
    throw new Error('No se pueden agregar transacciones a una transacción de tipo Coinbase.');
  }

  obtenerNivel() {
    return 0;
  }
}

module.exports = Coinbase;
