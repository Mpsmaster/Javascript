var myArray = ["john", "Bob", "Bronx", "Mary", "David"];
console.log(myArray);
console.log(myArray[3]);
myArray[5] = "Jhonny";
console.log(myArray[5]);
console.log(myArray);
myArray[1] = "Bern";
console.log(myArray);

var notas = [];
notas[0] = 10;
console.log(notas);
notas.push(8);//o push é usado para inserir novos itens no fim da array
console.log(notas);
notas.push(10);
console.log(notas);
notas.pop();//pop serve para retirar o último item do array
console.log(notas);
console.log(myArray[1][1]);//desse modo você pede que imprima a letra que ocupa a posiçao 1 na palavra da array
var novo = myArray[1];
console.log(novo[1]);//um outro modo de exibir a mesma letra