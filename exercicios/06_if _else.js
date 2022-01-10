/**
  Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
  1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
  calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
  Fórmulas:	
  - para	homens:	(72.7	*	Altura)	– 58	
  - para	mulheres:	(62.1	*	Altura)	– 44.7	
 */

const altura = 1.76;
const sexo = 3
let calculo

if (sexo === 1) {
  calculo = ((72.7 * altura) - 58).toFixed(2);
  console.log(`Seu peso ideal é: ${calculo}`)
} else if (sexo === 2) {
  calculo = ((62.1 * altura) - 44.7).toFixed(2)
  console.log(`Seu peso ideal é: ${calculo}`)
} else if (sexo !== 1 || sexo !== 2) {
  console.log('Dados incorretos!');
};