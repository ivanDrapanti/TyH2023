const Nodo = require('./Nodo');

class Blockchain {
	constructor(){
		this._bloques = [];
	}

	push(bloque) {
		this._bloques.push(bloque);
		return this._bloques;
	}

	obtenerUltimoBloque(){
		if(this._bloques == null)
			return null;
		return _bloques[_bloques.length - 1];
	}

	obtenerBlockchain(){
		return this._bloques;
	}
}

module.exports = Blockchain;