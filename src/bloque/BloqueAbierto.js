const TransaccionCompuesta = require("../transaccion/TransaccionCompuesta");
const Bloque = require("./Bloque");

class BloqueAbierto extends Bloque {
  constructor(transacciones = []) {
    super(transacciones);
  }

  /**
   * Agrega una transaccion al bloque siguiendo la lógica documentada.
   * @param TransaccionSimple transaccion a agregar.
   * @returns si esta completa.
   */
  agregarTransaccion(transaccion) {
    //Obtengo ultima transaccion compuesta de nivel 1
    var utcNivel1 = this.obtenerUltimaTransaccion(this.transacciones, 1);

    //Obtengo ultima transaccion compuesta de nivel 2
    var utcNivel2 = this.obtenerUltimaTransaccion(utcNivel1.obtenerTransacciones(), 2);

    utcNivel2.agregarTransaccion(transaccion);

    if(utcNivel2.estaCompleta()) {
      if(utcNivel1.estaCompleta()) {
        if(this.estaCompleta()) {
          return true;
        } else {
          this.transacciones.push(new TransaccionCompuesta([], 1));
        }
      } else {
        utcNivel1.agregarTransaccion(new TransaccionCompuesta([], 2));
      }
    }
    return false;
  }

  obtenerUltimaTransaccion(transacciones, nivel){
    var ultimaTransaccionCompuesta;
    if(transacciones.length > 0){
      ultimaTransaccionCompuesta = transacciones[transacciones.length - 1];
    } else {
      transacciones.push(new TransaccionCompuesta(null, nivel));
      ultimaTransaccionCompuesta = transacciones[0];
    }
    return ultimaTransaccionCompuesta;
  }

  /**
  * Devuelve si el bloque esta completo. El bloque esta completo si:
  * Tiene 10 transacciones y la ultimas transacciones de nivel 1 y de nivel 2 estan completas.
  * @returns {boolean} Si el bloque esta completo.
  */
  estaCompleta() {
    return this.transacciones.length === 10;
  }

  obtenerTransacciones(){
    return this.transacciones;
  }
}

module.exports = BloqueAbierto;