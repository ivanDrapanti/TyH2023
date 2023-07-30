const TransaccionCompuesta = require("../transaccion/TransaccionCompuesta");
const Bloque = require("./Bloque");

class BloqueAbierto extends Bloque {
  constructor(transacciones = []) {
    super(transacciones);
  }

  /**
   * Agrega una transaccion al bloque siguiendo la lógica documentada
   * @param TransaccionSimple transaccion a agregar.
   */
  agregarTransaccion(transaccion) {
    //Obtengo ultima transaccion compuesta de nivel 1
    var utcNivel1 = this.obtenerUltimaTransaccion(this.transacciones);

    //Obtengo ultima transaccion compuesta de nivel 2
    var utcNivel2 = this.obtenerUltimaTransaccion(utcNivel1.obtenerTransacciones());

    utcNivel2.agregarTransaccion(transaccion);

    if(utcNivel2.estaCompleta()) {
      if(utcNivel1.estaCompleta()) {
        if(this.estaCompleta()) {
          this.broadCast();
        } else {
          this.transacciones.push(new TransaccionCompuesta([], 1));
        }
      } else {
        utcNivel1.agregarTransaccion(new TransaccionCompuesta([], 2));
      }
    }
  }

  obtenerUltimaTransaccion(transacciones){
    var ultimaTransaccionCompuesta;
    if(transacciones.length > 0){
      ultimaTransaccionCompuesta = transacciones[transacciones.length - 1];
    } else {
      transacciones.push(new TransaccionCompuesta(null, 1));
      ultimaTransaccionCompuesta = transacciones[0];
    }
    return ultimaTransaccionCompuesta;
  }

  /**
   * Realizo broadCast. Genero un BloqueCerrado, limpio el BloqueNuevo y actualizo la Blockchain.
   */
  broadCast() {
    //WIP
    //this.transacciones = [];
  }

  /**
  * Devuelve si el bloque esta completo. El bloque esta completo si:
  * Tiene 10 transacciones y la ultimas transacciones de nivel 1 y de nivel 2 estan completas.
  * @returns {boolean} Si el bloque esta completo.
  */
  estaCompleta() {
    return this.transacciones.length === 10;
  }
}

module.exports = BloqueAbierto;