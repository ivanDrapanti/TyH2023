const { MD5HashingStrategy } = require('./hashingStrategy');
const { v4: uuidv4 } = require('uuid');

class TransaccionAbstracta {
  
  constructor(idAnterior = null) {
    this.id = `tx-${uuidv4()}`;
    this.IN = idAnterior; // Almacena el id de la transacción anterior
    this.hash = null;
  }

  generarHashPorDefecto() {
    
    const data = `${this.TKN || ''}-${this.OUT}-${this.id}-${this.IN || ''}`;

    const md5HashingStrategy = new MD5HashingStrategy();
    this.setHashStrategy(md5HashingStrategy);
    this.hash = this.hashStrategy.generateHash(data);
  }

    agregarTransaccion(transaccion) {
      throw new Error('El método agregarTransaccion debe ser implementado por las clases hijas.');
    }
  
    obtenerNivel() {
      throw new Error('El método obtenerNivel debe ser implementado por las clases hijas.');
    }
  }
  
  module.exports = TransaccionAbstracta;
  