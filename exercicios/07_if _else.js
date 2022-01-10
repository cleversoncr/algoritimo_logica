/**
  Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular
  e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:
  − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da área
  − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da sua área.
  − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.

  Acrescente	 as	 seguintes	 mensagens	 à	 solução	 do	 exercício	 anterior	conforme	o	caso.	
− Caso	 o	 número	 de	 lados	 seja	 inferior	 a	 3	 escrever	 NÃO	 É	 UM	POLÍGONO.	
− Caso	o	número	de	lados	seja	superior	a	5	escrever	POLÍGONO	NÃO	IDENTIFICADO.
  */

const qtdLados = 6;
const lado1 = 10;
const lado2 = 30;

const altura = 22

let tipo
let area

if (qtdLados === 3) {
  area = ((lado1 * lado2) / altura).toFixed(2);
  console.log(`Esse polígono é um TRIÂNGULO e sua área é ${area}`);
} else if (qtdLados === 4) {
  area = (lado1 * lado2);
  console.log(`Esse polígono é um QUADRADO e sua área é ${area}`);
} else if (qtdLados === 5) {
  console.log('Esse polígono é um PENTÁGONO');
} else if (qtdLados < 3) {
  console.log('Não é um polígono!');
} else if (qtdLados > 5) {
  console.log('Polígono não identificado!');
}



