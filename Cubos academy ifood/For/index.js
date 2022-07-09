var notas = [10, 9, 7, 8]
var soma = 0;
for (var item of notas) {
    console.log(item)//esse código imprime o conteúdo da array
}
for (var item of notas) {
    soma = soma + item;
}
console.log(soma)
var notas = [10, 9, 7, 8, 5, 4]
var notasVermelhas = 0;
for (var item of notas) {
    if (item < 5) {
        notasVermelhas += 1;//também pode ser: notasVermelhas++
    }
}
console.log(notasVermelhas)