function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
};

console.log(somar(1, 2, 3, 4, 5, 6)); //Mesmo se passarmor mais parâmetros, o JS vai ignorar.
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim!'); 