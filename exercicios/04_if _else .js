/*
  As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra.
*/

const maca30 = 0.30;
const maca25 = 0.25;
const qtdCompra = 6;
let resultado


if (qtdCompra < 12) {
  resultado = (qtdCompra * maca30).toFixed(2);
} else resultado = (qtdCompra * maca25).toFixed(2);

console.log(`Quantidade comprada: ${qtdCompra}\nValor total: R$ ${resultado}`)


