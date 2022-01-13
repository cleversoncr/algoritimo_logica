const notas = [7, 8, 3, 5, 10, 9, 8, 8]

let valores = ' ';
//foreach
for (let nota of notas) { //of acessa os valores
  console.log(nota);
  valores += nota + ' ';
};

console.log(valores);

let indices = ' ';

for (let indice in notas) { // in acessa os indices
  indices += indice + ' ';
}

console.log(indices);
