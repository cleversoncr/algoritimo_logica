// Duas expressões que vão resultar em TRUE (Aritiméticos/Relacionais/Lógicos)

let true1 = 1 + 2 < 5 + 10 && 10 < 20;
let true2 = 'texto 1' == 'texto 2' || 'nome' != 10;
let true3 = !(6 * 6 < 3);

console.log(true1);
console.log(true2);
console.log(true3);

// Duas expressões que vão resultar em FALSE (Aritiméticos/Relacionais/Lógicos)

const carro = 4
const moto = 2

'O carro tem quantas rodas?'
let false1 = !(carro === 4);
let false2 = 8 - 4 > 12 || false || 15 === '15';

'Uma moto leva duas pessoas. Um carro com 5 pessoas poderia levar os ocupantes da moto?'
let false3 = (moto + carro) < 5;
let false4 = !(7 !== 7 || '3' !== 3);

console.log(false1);
console.log(false2);
console.log(false3);
console.log(false4);