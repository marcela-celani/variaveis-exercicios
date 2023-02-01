let nome
let idade

console.log('Tipo da variavel:', typeof nome)
console.log('Tipo da variavel:', typeof idade)

/*
Esse tipo de variavel foi impresa porque não 
atribuimos nenhum valor as duas variaveis, logo
ela está indefinida (undefined).
*/

let nome1 = prompt('Qual o seu nome?')
let idade1 = Number(prompt('Qual a sua idade?'))

console.log('Tipo da variavel:', typeof nome1)
console.log('Tipo da variavel:', typeof idade1)

/*
O tipo das duas mudou para string, porque quando
usamos o prompt, a resposta captada pelo usuário
sempre vem no formato de string.
*/

console.log('Olá, ' + nome1 + '. Você tem', idade1, 'anos.')
console.log(`Olá pessoal, meu nome é ${nome1}, e eu tenho ${idade1} anos`)


let pergunta1 = 'Você gosta de sorvete?'
let resposta1 = prompt(pergunta1)
let pergunta2 = 'Você já viajou de avião?'
let resposta2 = prompt(pergunta2)
let pergunta3 = 'Você indicaria a Labenu para um amigo?'
let resposta3 = prompt(pergunta3)

console.log(pergunta1)
console.log(resposta1)
console.log(pergunta2)
console.log(resposta2)
console.log(pergunta3)
console.log(resposta3)

