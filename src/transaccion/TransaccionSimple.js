const Transaction = require('./Transaccion');

class TransaccionSimple extends Transaction{
    constructor(id, tkn, out, hash) {
        super(id, tkn, out, hash);
    }
}

module.exports = TransaccionSimple;