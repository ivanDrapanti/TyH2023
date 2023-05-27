//const Bloque = require('./Bloque');
const BloqueCerrado = require('./BloqueCerrado');
//const BloqueAbierto = require('./BloqueAbierto');
//const { Bloque, BloqueAbierto, BloqueCerrado } = require('./Bloque');

// Ejemplo de uso
const transacciones = ['Transacción 1', 'Transacción 2'];
const bloqueCerrado = new BloqueCerrado(transacciones, '2023-05-27', 'previousHashValue', 'hashValue');

console.log(bloqueCerrado);