class BloqueAbierto extends Bloque {
  constructor(transacciones = []) {
    super(transacciones);
  }

  agregarTransaccion(transaccion) {

    //LOGICA PARA APILAR LAS TRANSACCIONES Y TENER LAS COMPUESTAS.

   /* switch(this.transacciones.length){
      case 0://primera simple
      case 1:// segunda simple // cuarta simple (verificar si hay una compuesta) Si no,
        this.agregarTransaccionSimple(transaccion);
        break;
      case 2://tercera simple joya // quinta simple (creo una )
        this.agregarTransaccionCompleja(transaccion);
        break;
      default:
        //Agregar que hay que cerrar el bloque.
        break;
    }*/
  }

  //agregarTransaccionSimple(transaccion)
  //agregarTransaccionCompleja(transaccion);

  controlarTransacciones() {
    // Lógica para controlar las transacciones
  }
}

module.exports = BloqueAbierto;