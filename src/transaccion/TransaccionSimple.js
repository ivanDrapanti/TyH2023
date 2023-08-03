const TransaccionLeafAbstracta = require('./transaccionLeafAbstracta');

class TransaccionSimple extends TransaccionLeafAbstracta {
  constructor(IN, OUT) {
    super(IN, OUT);
  }

}

module.exports = TransaccionSimple;
