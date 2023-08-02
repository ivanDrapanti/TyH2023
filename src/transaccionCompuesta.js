const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionCompuesta extends TransaccionAbstracta {
  constructor(transacciones = []) {
    super();
    this.transaccionesInternas = transacciones;
    this.nivel = 0;
    this.calcularHash(); // Calcular el hash automáticamente al crear la Coinbase
  }

  agregarTransaccion(transaccion) {
    if (this.nivel >= 2 || this.transaccionesInternas.length >= 3) {
      throw new Error('No se pueden agregar más transacciones a una transacción compuesta llena.');
    }

    this.transaccionesInternas.push(transaccion);
    this.calcularHash(); // Calcular el hash automáticamente al crear la Coinbase
  }

  obtenerNivel() {
    return this.nivel;
  }

  aumentarNivel() {
    this.nivel++;
  }

  // Resto de métodos específicos de la transacción Compuesta
}

module.exports = TransaccionCompuesta;
