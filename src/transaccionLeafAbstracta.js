const { v4: uuidv4 } = require('uuid');
const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionLeafAbstracta extends TransaccionAbstracta {
  constructor(IN, OUT) {
    super();
    this.id = uuidv4();
    this.IN = IN;
    this.OUT = OUT;
    this.hash = null;
  }

  calcularHash(hashStrategy) {
    this.hash = hashStrategy.generateHash(this);
  }
}

module.exports = TransaccionLeafAbstracta;
