// Percorra o array de 2 em 2, de forma decrescente e iniciando da posição 8.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(numeros[i]);
};