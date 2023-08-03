const TransaccionAbstracta = require('./transaccionAbstracta');

class TransaccionLeafAbstracta extends TransaccionAbstracta {
  constructor(IN, OUT) {
    super();
  }
}

module.exports = TransaccionLeafAbstracta;
