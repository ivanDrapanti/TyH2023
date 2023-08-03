const BloqueAbierto = require('../src/bloque/BloqueAbierto');
const TransaccionCompuesta = require('../src/transaccion/TransaccionCompuesta');
const TransaccionSimple = require('../src/transaccion/TransaccionSimple');

describe('BloqueAbierto', () => {
  test('Debe crear un bloque correctamente', () => {
    const bloque = new BloqueAbierto();
    expect(bloque).toBeDefined();
  });

  test('Debe agregar 90 transacciones simples correctamente', () => {
    const transacciones = [new TransaccionCompuesta(null, 1)];
    const bloque = new BloqueAbierto(transacciones);
    for (let i = 0; i < 90; i++) {
      const transaccion = new TransaccionSimple();
      bloque.agregarTransaccion(transaccion);
    }
    expect(bloque.transacciones).toBeDefined();
    expect(bloque.transacciones).toHaveLength(10);
  });
});