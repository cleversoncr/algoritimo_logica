function somar(a, b, c, d) {
  return a + b + c + d;
};

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); //Como não passei todos o parâmetros, o JS define esse parâmetro com undefined.

console.log('Fim!'); 