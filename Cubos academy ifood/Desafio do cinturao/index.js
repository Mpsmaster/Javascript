let cartel = ["V", "V", "V", "V", "V", "V", "D", "E", "V", "E"]
let lutas = 0;
let vitorias = 0;
let derrotas = 0;
let x = 0;
for (let luta of cartel) {
    if (luta == "V" || "D" || "E") {
        lutas++;
    }
}
for (let luta of cartel) {
    if (luta == "V") {
        vitorias++;
    } else if (luta == "D") {
        derrotas++;
    }
} x = vitorias - derrotas;
x = x / lutas;
if (x * 100 < 50 || lutas < 10) {
    console.log("NAO MERECE DISPUTAR");
} else {
    console.log("MERECE DISPUTAR");
}