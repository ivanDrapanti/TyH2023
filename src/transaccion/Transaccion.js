class Transaccion{
    constructor(id, tkn, out, hash) {
        this.id = id;
        this.tkn = tkn;
        this.out = out;
        this.hash = hash;
      }
}

module.exports = Transaccion;