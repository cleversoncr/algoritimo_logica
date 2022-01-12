/*
  Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
seguintes	mensagens:	
ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
ACESSO	NEGADO	caso	a	senha	seja	inválida.
*/

const senha = 1237;
const prova = 1234;
let resultado;

if (senha === prova) {
  resultado = 'ACESSO	PERMITIDO!';
} else {
  resultado = 'ACESSO NEGADO!';

};

console.log(resultado);