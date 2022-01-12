/*
  Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
  serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente.
*/

// 1 2 3 1 2 3
// 2 1 2 3 3 1
// 3 3 1 2 1 2

const n1 = 1;
const n2 = 2;
const n3 = 3;

if (n1 < n2 && n1 < n3) {
  console.log(n1);
  if (n2 < n3) {
    console.log(n2);
    console.log(n3);
  } else if (n2 > n3) {
    console.log(n3);
    console.log(n2);
  }
};
if (n1 > n2 && n2 < n3) {
  console.log(n2);
  if (n1 < n3) {
    console.log(n1);
    console.log(n3);
  } if (n1 > n3) {
    console.log(n3);
    console.log(n1);
  }
};
if (n1 > n3 && n2 > n3) {
  console.log(n3);
  if (n1 > n2) {
    console.log(n2);
    console.log(n1);
  } if (n2 > n1) {
    console.log(n1);
    console.log(n2);
  }
};