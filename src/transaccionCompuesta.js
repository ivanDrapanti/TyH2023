const TransaccionAbstracta = require('./transaccionAbstracta');
const { MD5HashingStrategy } = require('./hashingStrategy');

class TransaccionCompuesta extends TransaccionAbstracta {
  constructor(transacciones = []) {
    super();
    this.transaccionesInternas = transacciones;
    this.nivel = 0;
    this.calcularHash(); // Calcular el hash automáticamente al crear la transacción compuesta
  }

  agregarTransaccion(transaccion) {
    if (this.nivel >= 2 || this.transaccionesInternas.length >= 3) {
      throw new Error('No se pueden agregar más transacciones a una transacción compuesta llena.');
    }

    this.transaccionesInternas.push(transaccion);
    this.calcularHash(); // Calcular el hash automáticamente al agregar una transacción interna
  }

  obtenerNivel() {
    return this.nivel;
  }

  aumentarNivel() {
    this.nivel++;
  }

  calcularHash() {
    const data = this.transaccionesInternas
      .map(transaccion => transaccion.hash)
      .join('') + this.OUT + this.id + (this.IN || '');

    const md5HashingStrategy = new MD5HashingStrategy();
    this.setHashStrategy(md5HashingStrategy);
    this.hash = this.hashStrategy.generateHash(data);
  }

  // Resto de métodos específicos de la transacción Compuesta
}

module.exports = TransaccionCompuesta;
