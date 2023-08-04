const TransaccionAbstracta = require('./transaccionAbstracta');
const { MD5HashingStrategy } = require('../hashing');

class TransaccionCompuesta extends TransaccionAbstracta {
  constructor(transacciones = [], nivel) {
    super();
    this.transaccionesInternas = transacciones;
    this.nivel = nivel == null ? 1 : nivel;
  }

  agregarTransaccion(transaccion) {
    if (this.transaccionesInternas != null && this.estaCompleta()) {
      throw new Error('No se pueden agregar más transacciones a una transacción compuesta llena.');
    }

    if(this.transaccionesInternas == null)
      this.transaccionesInternas = [];

    this.transaccionesInternas.push(transaccion);
    if(this.estaCompleta())
      this.calcularHash(); // Calcular el hash automáticamente al agregar una transacción interna
  }

  estaCompleta() {
    return this.transaccionesInternas.length === 3;
  }

  obtenerTransacciones() {
    if(this.transaccionesInternas == null)
      this.transaccionesInternas = [];
    return this.transaccionesInternas;
  }
/*
  calcularHash() {
    const data = this.transaccionesInternas
      .map(transaccion => transaccion.hash)
      .join('') + this.OUT + this.id + (this.IN || '');

    const md5HashingStrategy = new MD5HashingStrategy();
    this.setHashStrategy(md5HashingStrategy);
    this.hash = this.hashStrategy.generateHash(data);
  }
*/
  calcularHash() {
    const data = this.transaccionesInternas
      .map(transaccion => transaccion.hash)
      .join('') + this.OUT + this.id + (this.IN || '');
  
    this.hash = this.hashStrategy.generateHash(data);
  }
  // Resto de métodos específicos de la transacción Compuesta
}

module.exports = TransaccionCompuesta;
