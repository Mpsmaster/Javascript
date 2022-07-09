//menor de 18 -> meia
//emtre 18 e 60 (com carteirinha) -> meia
//acima de 60 -> meia
const idade = 65;
const comCarteirinha = true;

if (idade < 18) {
    console.log("Você tem direito a meia")
} else if (idade <= 60) {
    if (comCarteirinha == true) {
        console.log("Você tem direito a meia")
    } else {
        console.log("Você não tem direito a meia")
    }
} else if (idade > 60) {
    console.log("Você tem direito a meia")
}