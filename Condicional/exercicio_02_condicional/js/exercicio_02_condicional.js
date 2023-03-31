/* 1. Subistitua o @ pela condicional correta para que o resultado seja true. */

let x = 10
let y = 5
//console.log(x @ y)
console.log(x > 5)



/* 2. Subistitua o @ pela condicional correta para que o resultado seja false. */

let m = "10"
let n = 10
//console.log(m @ n)
console.log(m === n)

/* 3. Crie uma condicional para verificar se o preço da carne está barato ou caro! Ps: até R$ 35,00 está barato.*/

let precoCarne = 40.3

if (precoCarne > 35){
    console.log(`O preço da carne é ${precoCarne} e está muito caro! Não vou comprar!`)
} else{
    console.log(`O preço da carne está justo! Vou comprar!`)
}