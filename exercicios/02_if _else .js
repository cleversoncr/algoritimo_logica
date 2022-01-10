/*
  Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
(não	é	necessário	considerar	o	mês	em	que	ela	nasceu).
*/

const anoNasc = 2005;
const anobase = 2021;
let eleicoes;

if ((anobase - anoNasc) >= 16) {
  eleicoes = 'Eleitor apto para as eleições 2021!';
} else eleicoes = 'Abaixo da idade mínima!';

console.log(`Situação do cidadão: \n ${eleicoes}`);