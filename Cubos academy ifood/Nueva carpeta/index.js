var nomes = ["ana", "maria", "lucia", "alice"];
nomes.push("marco");
console.log(nomes)
var inicioA = [];
for (let item of nomes) {
    if (item[0] == "a") {
        inicioA.push(item);
    }
} console.log(inicioA)
var Ainicio = [];
for (item of nomes) {
    if (item[0] == "a")
        Ainicio++;
}console.log(Ainicio)