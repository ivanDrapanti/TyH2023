const TransaccionCompuesta = require('../src/transaccion/TransaccionCompuesta');
const TransaccionAbstracta = require('../src/transaccion/transaccionAbstracta');
const { MD5HashingStrategy, SHA256HashingStrategy } = require('../src/hashing');


// Mock de uuidv4 para que siempre devuelva el mismo valor con "tx-" al inicio
jest.mock('uuid', () => ({
    v4: jest.fn(() => 'tx-idUnico'), // Corregimos para agregar "tx-" al inicio del id
  }));
  
  // Restablecer los mocks antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Pruebas para la clase TransaccionCompuesta
  describe('TransaccionCompuesta', () => {
    let transaccionCompuesta;
  
    beforeEach(() => {
      transaccionCompuesta = new TransaccionCompuesta();
    });
  
    it('debe generar un id único al ser creada', () => {
      // Verificar que el id esté en el formato adecuado
      expect(transaccionCompuesta.id).toMatch(/^tx-\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
    });
  
    it('debe calcular el hash usando la estrategia MD5 por defecto', () => {
      // El hash debe ser calculado automáticamente al estar completa
      transaccionCompuesta.calcularHash(); // Calcular el hash manualmente para que se actualice en la instancia
  
      // Creamos un array con los hashes de las transacciones internas
      const hashesInternos = transaccionCompuesta.obtenerTransacciones().map(transaccion => transaccion.hash);
  
      // Concatenamos los hashes internos y los datos de la transacción compuesta para calcular el hash esperado
      const data = hashesInternos.join('') + transaccionCompuesta.OUT + transaccionCompuesta.id + (transaccionCompuesta.IN || '');
  
      const md5HashingStrategy = new MD5HashingStrategy();
      const expectedHash = 'md5-' + md5HashingStrategy.generateHash(data);
  
      expect(transaccionCompuesta.hash).toEqual(expectedHash);
    });
  
    it('debe cambiar la estrategia de hashing a SHA256 y recalcular el hash', () => {
      // Creamos tres transacciones internas
      const transaccionMock1 = new TransaccionAbstracta('idAnterior1', 'OUT1');
      const transaccionMock2 = new TransaccionAbstracta('idAnterior2', 'OUT2');
      const transaccionMock3 = new TransaccionAbstracta('idAnterior3', 'OUT3');
  
      // Agregamos las transacciones internas a la transacción compuesta
      transaccionCompuesta.agregarTransaccion(transaccionMock1);
      transaccionCompuesta.agregarTransaccion(transaccionMock2);
      transaccionCompuesta.agregarTransaccion(transaccionMock3);
  
      // Cambiamos la estrategia de hashing a SHA256
      transaccionCompuesta.cambiarHashASHA256();
  
      // El hash debe ser recalculado automáticamente con la nueva estrategia
      const hashesInternos = transaccionCompuesta.obtenerTransacciones().map(transaccion => transaccion.hash);
      const data = hashesInternos.join('') + transaccionCompuesta.OUT + transaccionCompuesta.id + (transaccionCompuesta.IN || '');
  
      const sha256HashingStrategy = new SHA256HashingStrategy();
      const expectedHash = 'sha256-' + sha256HashingStrategy.generateHash(data);
  
      expect(transaccionCompuesta.hash).toEqual(expectedHash);
    });
  
    it('debe cambiar la estrategia de hashing a MD5 y recalcular el hash', () => {
      // Creamos tres transacciones internas
      const transaccionMock1 = new TransaccionAbstracta('idAnterior1', 'OUT1');
      const transaccionMock2 = new TransaccionAbstracta('idAnterior2', 'OUT2');
      const transaccionMock3 = new TransaccionAbstracta('idAnterior3', 'OUT3');
  
      // Agregamos las transacciones internas a la transacción compuesta
      transaccionCompuesta.agregarTransaccion(transaccionMock1);
      transaccionCompuesta.agregarTransaccion(transaccionMock2);
      transaccionCompuesta.agregarTransaccion(transaccionMock3);
  
      // Cambiamos la estrategia de hashing a MD5
      transaccionCompuesta.cambiarHashAMd5();
  
      // El hash debe ser recalculado automáticamente con la nueva estrategia
      const hashesInternos = transaccionCompuesta.obtenerTransacciones().map(transaccion => transaccion.hash);
      const data = hashesInternos.join('') + transaccionCompuesta.OUT + transaccionCompuesta.id + (transaccionCompuesta.IN || '');
  
      const md5HashingStrategy = new MD5HashingStrategy();
      const expectedHash = 'md5-' + md5HashingStrategy.generateHash(data);
  
      expect(transaccionCompuesta.hash).toEqual(expectedHash);
    });
  
    it('debe arrojar un error al intentar agregar una cuarta transacción', () => {
      // Creamos tres transacciones internas
      const transaccionMock1 = new TransaccionAbstracta('idAnterior1', 'OUT1');
      const transaccionMock2 = new TransaccionAbstracta('idAnterior2', 'OUT2');
      const transaccionMock3 = new TransaccionAbstracta('idAnterior3', 'OUT3');
  
      // Agregamos las transacciones internas a la transacción compuesta
      transaccionCompuesta.agregarTransaccion(transaccionMock1);
      transaccionCompuesta.agregarTransaccion(transaccionMock2);
      transaccionCompuesta.agregarTransaccion(transaccionMock3);
  
      // Al intentar agregar una cuarta transacción, debe arrojar un error
      expect(() => {
        transaccionCompuesta.agregarTransaccion(new TransaccionAbstracta('idAnterior4', 'OUT4'));
      }).toThrow('No se pueden agregar más transacciones a una transacción compuesta llena.');
    });
  
    it('debe devolver el array de transacciones internas correctamente', () => {
      // Creamos tres transacciones internas
      const transaccionMock1 = new TransaccionAbstracta('idAnterior1', 'OUT1');
      const transaccionMock2 = new TransaccionAbstracta('idAnterior2', 'OUT2');
      const transaccionMock3 = new TransaccionAbstracta('idAnterior3', 'OUT3');
  
      // Agregamos las transacciones internas a la transacción compuesta
      transaccionCompuesta.agregarTransaccion(transaccionMock1);
      transaccionCompuesta.agregarTransaccion(transaccionMock2);
      transaccionCompuesta.agregarTransaccion(transaccionMock3);
  
      // Obtenemos el array de transacciones internas y verificamos que contiene las tres transacciones creadas
      const transaccionesInternas = transaccionCompuesta.obtenerTransacciones();
      expect(transaccionesInternas).toHaveLength(3);
      expect(transaccionesInternas).toContain(transaccionMock1);
      expect(transaccionesInternas).toContain(transaccionMock2);
      expect(transaccionesInternas).toContain(transaccionMock3);
    });
  });