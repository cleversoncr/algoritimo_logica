const x = 123;
let y = 321;

//Função anônima é uma função sem nome...

const somar = (function somar(a, b) {
  return a + b;
})

console.log(somar(x, y));