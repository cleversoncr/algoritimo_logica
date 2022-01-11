// Recebe um parâmetro (nota) retorna conceito

/*
  A+ -> 10
  A -> 9
  B+ -> 8
  B -> 7
  C+ -> 6
  C -> 5
  D+ -> 4
  D -> 3
  E+ -> 2
  E -> 1
  F -> 0
*/

function conceito(nota) {

  if (nota === 10) {
    return 'A+';
  } else if (nota === 9) {
    return 'A';
  } else if (nota === 8) {
    return 'B+';
  } else if (nota === 7) {
    return 'B';
  } else if (nota === 6) {
    return 'C+';
  } else if (nota === 5) {
    return 'C';
  } else if (nota === 4) {
    return 'D+';
  } else if (nota === 3) {
    return 'D';
  } else if (nota === 2) {
    return 'E+';
  } else if (nota === 1) {
    return 'E';
  } else if (nota === 0) {
    return 'F';
  } else if (nota < 0 || nota > 10) {
    return null;
  }

};

const resultado = conceito(10);
console.log(`Conceito: ${resultado}`);


function notaParaConceito(nota) {
  switch (Math.ceil(nota)) {
    case 10: return 'A+';
    case 9: return 'A';
    case 8: return 'B+';
    case 7: return 'B';
    case 6: return 'C+';
    case 5: return 'C';
    case 4: return 'D+';
    case 3: return 'D';
    case 2: return 'E+';
    case 1: return 'E';
    case 0: return 'F';
    default: return null;
  }
}

console.log(`O conceito do aluno é ${notaParaConceito(10)}`)