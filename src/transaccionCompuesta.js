const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionCompuesta extends TransaccionAbstracta {
  constructor() {
    super();
    this.transacciones = [];
    this.nivel = 1;
  }

  agregarTransaccion(transaccion) {
    if (this.transacciones.length >= 3) {
      throw new Error('No se pueden agregar más transacciones a esta transacción compuesta.');
    }

    if (transaccion.obtenerNivel() >= 3) {
      throw new Error('No se pueden agregar transacciones compuestas a un nivel superior a 3.');
    }

    this.transacciones.push(transaccion);
  }

  obtenerNivel() {
    return this.nivel;
  }
}

module.exports = TransaccionCompuesta;
