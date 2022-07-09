let resultadosoma = 5 + 4;
console.log(resultadosoma);
let resultadosub = 5 - 4;
console.log(resultadosub);
let resultadomult = 5 * 4;
console.log(resultadomult);
let resultadodiv = 5 / 4;
console.log(resultadodiv);
let resultadopot = 5 ** 4;
console.log(resultadopot);
let resultadomany = 5 + 4 * 3 - 1;
//Nesse caso o compilador segue a ordem de valor matemático: potência/raiz, mult/divi, sub/adi
console.log(resultadomany);
let resultadopar = (5 + 4) * (3 - 1);
//Parênteses tem prioridade
console.log(resultadopar);
const x = 5;
const y = 6;
let resultadoalge = 5 + x - y;
console.log(resultadoalge);
const z = "5";
const w = 6;
let resultadotext = 5 + z + w;
//quando vc tenta somar strings com integer o compilador torna tudo em string e une os valores
console.log(resultadotext);
const a = 5;
const b = 6;
let resultadoatri = x + y;// = 11
resultadoatri = resultadoatri + 2;// = 13
// essa fórmula é igual a resultadoatri += 2
resultadoatri += 2// = 15
resultadoatri -= 2// = 13
resultadoatri *= 2// = 26
resultadoatri /= 2// = 13
console.log(resultadoatri);
const resto = 13 % 5;
console.log(resto)