const { v4: uuidv4 } = require('uuid');

// Mock de uuidv4 para que siempre devuelva el mismo valor con "tx-" al inicio
jest.mock('uuid', () => ({
    v4: jest.fn(() => 'idUnico'), // Ajustamos el valor devuelto por el mock
  }));
  
const TransaccionAbstracta = require('../src/transaccion/transaccionAbstracta');
const { MD5HashingStrategy, SHA256HashingStrategy } = require('../src/hashing');

// Creamos un mock para las estrategias de hashing
jest.mock('../src/hashing', () => ({
    MD5HashingStrategy: jest.fn(() => ({
        generateHash: jest.fn((data) => `md5-${data}`),
      })),
      SHA256HashingStrategy: jest.fn(() => ({
        generateHash: jest.fn((data) => `sha256-${data}`),
      })),
    }));
    
    // Restablecer los mocks antes de cada prueba
    beforeEach(() => {
      jest.clearAllMocks();
    });
    
    // Pruebas para la clase TransaccionAbstracta
    describe('TransaccionAbstracta', () => {
      let transaccion;
    
      beforeEach(() => {
        transaccion = new TransaccionAbstracta('idAnterior', 'OUT');
      });
    
      it('debe generar un id único al ser creada', () => {
        // Verificar que el id esté en el formato adecuado
        expect(transaccion.id).toMatch(/^tx-idUnico$/); // Ajustamos la expresión regular para el nuevo formato
      });
    
      it('debe calcular el hash usando la estrategia MD5 por defecto', () => {
        // Llamamos al método calcularHash
        transaccion.calcularHash();
    
        // Verificar que el método generateHash de MD5HashingStrategy haya sido llamado con los datos adecuados
        expect(MD5HashingStrategy).toHaveBeenCalled();
    
        // Cambiamos la expectativa del resultado esperado
        expect(transaccion.hash).toEqual('md5--OUT-tx-idUnico-idAnterior');
      });
    
      it('debe cambiar la estrategia de hashing a SHA256 y recalcular el hash', () => {
        // Llamamos al método cambiarHashASHA256
        transaccion.cambiarHashASHA256();
    
        // Verificar que el método generateHash de SHA256HashingStrategy haya sido llamado con los datos adecuados
        expect(SHA256HashingStrategy).toHaveBeenCalled();
    
        // Cambiamos la expectativa del resultado esperado
        expect(transaccion.hash).toEqual('sha256--OUT-tx-idUnico-idAnterior');
      });
    
      it('debe cambiar la estrategia de hashing a MD5 y recalcular el hash', () => {
        // Llamamos al método cambiarHashAMd5
        transaccion.cambiarHashAMd5();
    
        // Verificar que el método generateHash de MD5HashingStrategy haya sido llamado con los datos adecuados
        expect(MD5HashingStrategy).toHaveBeenCalled();
    
        // Cambiamos la expectativa del resultado esperado
        expect(transaccion.hash).toEqual('md5--OUT-tx-idUnico-idAnterior');
      });
    
      it('debe validar correctamente la integridad de la transacción', () => {
        // Llamamos al método calcularHash
        transaccion.calcularHash();
    
        // Validamos la integridad
        expect(transaccion.validarIntegridad()).toBe(true);
      });
    
      it('debe arrojar un error al intentar agregar una transacción', () => {
        // Intentamos llamar al método agregarTransaccion que debería arrojar un error
        expect(() => {
          transaccion.agregarTransaccion();
        }).toThrow('El método agregarTransaccion debe ser implementado por las clases hijas.');
      });
    
      // Nuevas pruebas para mejorar la cobertura
      it('debe arrojar un error si se intenta calcular el hash sin generar una estrategia de hashing', () => {
        transaccion.setHashStrategy(null); // Simulamos que la estrategia de hashing no está definida
        expect(() => {
          transaccion.calcularHash();
        }).toThrow('Hash strategy no se ha generado.');
      });
    
      it('debe validar correctamente la integridad de la transacción cuando el hash es inválido', () => {
        // Llamamos al método calcularHash
        transaccion.calcularHash();
    
        // Modificamos el hash manualmente para simular una transacción inválida
        transaccion.hash = 'hash-invalido';
    
        // Validamos la integridad, debe ser false porque el hash es inválido
        expect(transaccion.validarIntegridad()).toBe(false);
      });
    });