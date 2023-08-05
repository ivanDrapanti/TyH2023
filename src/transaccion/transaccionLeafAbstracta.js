const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionLeafAbstracta extends TransaccionAbstracta {
  constructor(IN, OUT) {
    super(IN,OUT);
  }
}

module.exports = TransaccionLeafAbstracta;
