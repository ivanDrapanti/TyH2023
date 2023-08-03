const { MD5HashingStrategy, SHA256HashingStrategy } = require('../hashing');
const { v4: uuidv4 } = require('uuid');


class TransaccionAbstracta {
  constructor(idAnterior = null, OUT) {
    this.id = 'tx-' + uuidv4();
    this.IN = idAnterior; // Almacena el id de la transacción anterior
    this.OUT = OUT;
    this.hash = null;
    this.hashStrategy = new MD5HashingStrategy(); // Estrategia de hashing por defecto (MD5)
  }

  calcularHash() {
    if (!this.hashStrategy) {
      throw new Error('Hash strategy no se ha generado.');
    }

    const data = `${this.TKN || ''}-${this.OUT}-${this.id}-${this.IN || ''}`;
    this.hash = this.hashStrategy.generateHash(data);
  }

  setHashStrategy(hashStrategy) {
    this.hashStrategy = hashStrategy;
  }


  validarIntegridad() {
    const data = `${this.TKN || ''}-${this.OUT}-${this.id}-${this.IN || ''}`;
    const computedHash = this.hashStrategy.generateHash(data);
    return this.hash === computedHash;
  }

  cambiarHashAMd5() {
    const md5HashingStrategy = new MD5HashingStrategy();
    this.setHashStrategy(md5HashingStrategy);
    this.calcularHash();
  }

  cambiarHashASHA256() {
    const sha256HashingStrategy = new SHA256HashingStrategy();
    this.setHashStrategy(sha256HashingStrategy);
    this.calcularHash();
  }

  agregarTransaccion(transaccion) {
    throw new Error('El método agregarTransaccion debe ser implementado por las clases hijas.');
  }
}

module.exports = TransaccionAbstracta;
