const Blockchain = require("../src/Blockchain");
const BloqueAbierto = require("../src/bloque/BloqueAbierto");
const TransaccionSimple = require("../src/transaccion/TransaccionSimple");
const Nodo = require("../src/Nodo");

describe('Nodo', () => {
	test('Debe crear un Nodo correctamente', () => {
		const blockchain = new Blockchain();
		const bloqueAbierto = new BloqueAbierto();
		const nodo = new Nodo(blockchain, bloqueAbierto);
		expect(nodo).toBeDefined();

		//Verificar que no se crea un nodo con la blockChain nula.
		expect(() => new Nodo(null, bloqueAbierto)).toThrow("BlockChain debe ser distinto de nulo");
	});

	test('Debe generar 2 bloques y agregarlo a la BlockChain', () => {
		blockchain = new Blockchain();
		bloqueAbierto = new BloqueAbierto();
		nodo = new Nodo(blockchain, bloqueAbierto);

		const IN = 'previousTransactionId';
    const OUT = 'currentTransactionId';
		for(let i = 0; i < 90; i++){
			const transaccionSimple = new TransaccionSimple(IN, OUT);
			nodo.agregarTransaccion(transaccionSimple);
		}
		expect(blockchain.obtenerBlockchain()[0]).toBeDefined();
		expect(nodo._bloqueAbierto.transacciones).toHaveLength(0); //Verificamos que se haya limpiado el Bloque Abierto.

		for(let i = 0; i < 90; i++){
			const transaccionSimple = new TransaccionSimple(IN, OUT);
			nodo.agregarTransaccion(transaccionSimple);
		}
		expect(blockchain.obtenerBlockchain()).toHaveLength(2);

		bloqueAbierto2 = new BloqueAbierto();
		nodo2 = new Nodo(blockchain, bloqueAbierto2);
		
		//Verificar que la blockChain este actualizada en ambos nodos.
		for(let i = 0; i < 90; i++){
			const transaccionSimple = new TransaccionSimple(IN, OUT);
			nodo2.agregarTransaccion(transaccionSimple);
		}
		expect(blockchain.obtenerBlockchain()).toHaveLength(3);
		expect(nodo._blockchain.obtenerBlockchain()).toHaveLength(3);

	})
});