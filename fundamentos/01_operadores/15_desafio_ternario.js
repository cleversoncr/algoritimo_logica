const a = 8;
const b = 4;

//! const operacao = '+'; ==>> + - * /

const operacao = '+';
// const soma = a + b;
// const sub = a - b;
// const mult = a * b;
// const divi = a / b;
// const err = ' ';

// const resultado = operacao === '+' ? soma : (
//   operacao === '-' ? sub :
//     operacao === '*' ? mult :
//       operacao === '/' ? divi : err);

const resultado =
  operacao === '+' ? a + b :
    operacao === '-' ? a - b :
      operacao === '*' ? a * b : a / b;

console.log(resultado);