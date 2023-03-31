/*
function soma() {
     var a = 5
     var b = 5

    return resultado = a + b
 }


 alert(soma())
*/
/*---------------------------------------------------------------------------------------------*/
/*
Templete String
 var nome = prompt("Qual o seu nome?")
 var idade = prompt("Qual a sua idade?")

 let idadeString = `${nome} tem ${idade} anos!`

 console.log(idadeString)
*/
/*---------------------------------------------------------------------------------------------*/
/*
 Condicionais

 if (idade >=18){

    console.log(`${idadeString} Pode tirar carteira de habilitação!`)
} else{
     console.log(`${nome} não pode tirar carteira de habilitação!`)
 }
*/


var nome = prompt("Qual o seu nome?")
var idade = prompt("Qual a sua idade?")

let idadeString = `${nome} tem ${idade} anos!`

console.log(idadeString)

/*if (idade >= 18){
    if(idade <= 60){
        console.log(`${nome} é um adulto!`)
    }
    if (idade > 60){
        console.log(`${nome} é um idoso!`)
    }
*/
/*
if (idade >= 18 && idade < 60){
    console.log(`${nome} é um adulto`)
    
    if (idade > 60){
        console.log(`${nome} é um idoso!`)
    }
}
else{
    console.log(`${nome} tem ${idade} e é uma criança!`)
}
*/

/*const criança = idade < 18
const adulto = idade >= 18 && idade < 60

if (criança) {
    console.log(`${nome} é uma criança!`)
}else if (adulto){
    console.log(`${nome} é um adulto!`)
} else (
    console.log(`${nome} é um idoso!`)
)
*/
/*---------------------------------------------------------------------------------------------*/
/*Condicional ternaria*/

let isAdult = ((idade >= 18 ) ? `${nome} é um adulto` : `${nome} é uma criança!`)

console.log(isAdult)
