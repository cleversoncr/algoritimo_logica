const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array){
  console.log(elemento, indice, array)
};

numeros.forEach(praCadaElemento);

numeros.forEach(function(el){
console.log(el);
});

numeros.forEach(function(_, i){ //o underline é uma forma caracteristica de que não quero receber esse dado.
console.log(i);
});

// let y = [];

// console.log(Array.isArray(y));

// for(let n of numeros){
//   console.log(n);
// };

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// };