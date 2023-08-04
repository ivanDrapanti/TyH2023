const { MD5HashingStrategy } = require('../src/hashing');
const TransaccionSimple = require('../src/transaccion/TransaccionSimple');

describe('TransaccionSimple', () => {
  test('should create a TransaccionSimple object', () => {
    const IN = 'input';
    const OUT = 'output';
    const transaccionSimple = new TransaccionSimple(IN, OUT);

    expect(transaccionSimple).toBeDefined();
    expect(transaccionSimple.IN).toBe(IN);
    expect(transaccionSimple.OUT).toBe(OUT);
  });

  test('should calculate hash correctly', () => {
    const IN = 'input';
    const OUT = 'output';
    const transaccionSimple = new TransaccionSimple(IN, OUT);
    transaccionSimple.calcularHash();

    // Replace the expectedHash with the correct hash value after running calcularHash() manually with the same inputs.
    const expectedHash = 'input'; // Replace '...' with the correct hash value.

    expect(transaccionSimple.hash).toEqual(expectedHash);
  });

  test('should verify hash correctly', () => {
    const IN = 'input';
    const OUT = 'output';
    const transaccionSimple = new TransaccionSimple(IN, OUT);
    transaccionSimple.calcularHash();

    // Replace the expectedHash with the correct hash value after running calcularHash() manually with the same inputs.
    const expectedHash = 'null'; // Replace '...' with the correct hash value.

    const isValid = transaccionSimple.validarIntegridad(expectedHash);
    expect(isValid).toBe(true);
  });

  test('should return false when verifying incorrect hash', () => {
    const IN = 'input';
    const OUT = 'output';
    const transaccionSimple = new TransaccionSimple(IN, OUT);
    transaccionSimple.calcularHash();

    const incorrectHash = 'flase';

    const isValid = transaccionSimple.validarIntegridad(incorrectHash);
    expect(isValid).toBe(false);
  });
});
