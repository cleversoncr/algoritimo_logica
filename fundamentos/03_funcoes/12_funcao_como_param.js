function executar(funcao) {
  if (typeof funcao === 'function') {
    console.log(funcao());
  };
}

function bomDia() {
  return 'Bom dia';
}

executar(3);
executar(bomDia); // Para invocar a funcão é necessário tirar os (), pois ela não vai receber parâmetros.


/**
 * Dica de atalho -->> seleciona uma palavra no código e precione CTRL + D, onde for igual, também será selecionado.
 */