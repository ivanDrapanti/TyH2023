const BloqueCerrado = require('./bloque/BloqueCerrado');
const BloqueAbierto = require('./bloque/BloqueAbierto');

class Nodo {
	constructor(blockchain, bloqueAbierto){
		this._blockchain = blockchain;
		if(this._blockchain == null) 
			throw new Error('BlockChain debe ser distinto de nulo');

		this._bloqueAbierto = bloqueAbierto;
	}

	agregarTransaccion(transaccion){
		if(this._bloqueAbierto.agregarTransaccion(transaccion))
			this.broadCast();
	}

	/**
 	* Realizo broadCast. Genero un BloqueCerrado, limpio el BloqueNuevo y actualizo la Blockchain.
 	*/
	broadCast() {
		const ultimoBloque = this._blockchain.obtenerUltimoBloque();
		let previousHash = null;
		if(ultimoBloque != null){
			previousHash = ultimoBloque.obtenerHash();
		}
		const bloqueCerrado = new BloqueCerrado(this._bloqueAbierto.obtenerTransacciones(), Date.now(), previousHash);
		this._blockchain.push(bloqueCerrado);
		this._bloqueAbierto = new BloqueAbierto();
	}
}

module.exports = Nodo;