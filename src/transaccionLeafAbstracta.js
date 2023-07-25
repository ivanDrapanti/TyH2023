const { v4: uuidv4 } = require('uuid');
const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionLeafAbstracta extends TransaccionAbstracta {
  
  constructor(IN, OUT) {
    super();
    this.IN = IN;
    this.OUT = OUT;
  }
  
  calcularHash(hashStrategy) {
    this.hash = hashStrategy.generateHash(this);
  }
}

module.exports = TransaccionLeafAbstracta;
