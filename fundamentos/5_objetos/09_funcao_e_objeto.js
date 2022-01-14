function criarData(dia, mes, ano) { //Quando o PARÂMETRO da função tem o mesmo nome do VALOR dentro do objeto, você pode suprimir o VALOR, mantendo apenas as KEYS.
  return {
    dia,
    mes,
    ano,
    exibir() { //Dentro dessa forma de criar objeto literal é possível suprimir a palavra FUNCTION: exibir: function () {
      return `${this.dia}/${this.mes}/${this.ano}`;
    }
  }
}

const d1 = criarData(9,10,2010);
const d2 = criarData(22,11,2023);
const d3 = criarData(3,4,2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());