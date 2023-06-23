class TransaccionAbstracta {
    agregarTransaccion(transaccion) {
      throw new Error('El método agregarTransaccion debe ser implementado por las clases hijas.');
    }
  
    obtenerNivel() {
      throw new Error('El método obtenerNivel debe ser implementado por las clases hijas.');
    }
  }
  
  module.exports = TransaccionAbstracta;
  