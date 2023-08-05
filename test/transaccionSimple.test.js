const TransaccionSimple = require('../src/transaccion/TransaccionSimple');
const Hashes = require('jshashes');
const { v4: uuidv4 } = require('uuid');

describe('TransaccionSimple', () => {
  
  test('should calculate hash correctly', () => {
    const IN = 'previousTransactionId';
    const OUT = 'currentTransactionId';
    const id = 'tx-' + uuidv4();
    
    // Create an instance of the HashingStrategy you expect to be used
    const hashStrategy = new Hashes.MD5(); // Assuming you're using MD5
    
    const expectedData = `${''}-${OUT}-${id}-${IN}`;
    const expectedHash = hashStrategy.hex(expectedData );

    const transaccionSimple = new TransaccionSimple(IN, OUT);
    transaccionSimple.id = id;
    
    transaccionSimple.calcularHash();
    
    expect( transaccionSimple.hash).toEqual(expectedHash);
  });

  
});
