//menor de 18 -> meia
//emtre 18 e 60 (com carteirinha) -> meia
//acima de 60 -> meia

//Inteira -> Adulto sem carteirinha
//Meia -> Menor de idade ou idoso ou adulto com carteirinha

const idade = 65;
const comCarteirinha = true;
const adulto = idade >= 18 && idade <= 60; 

if (idade < 18 || idade > 60 || adulto && comCarteirinha) {
    console.log("Você tem direito a meia")
} else {
    console.log("Você não tem direito a meia")
}