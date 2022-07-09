//menor de 18 -> meia
//emtre 18 e 60 (com carteirinha) -> meia
//acima de 60 -> meia

//Inteira -> Adulto sem carteirinha
//Meia -> os outros casos
const idade = 65;
const comCarteirinha = false;
const adulto = idade >= 18 && idade <= 60;
//uma alternativa é: if (adulto && !comCarteirinha) 
if (adulto && comCarteirinha == false) {
    console.log("Você não tem direito a meia")
} else {
    console.log("Você tem direito a meia")
}