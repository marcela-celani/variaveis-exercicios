const nomeCompleto = prompt('Qual o seu nome completo?')
const dataNascimento = prompt('Qual a sua data de nascimento? (utilize as /)')
let endereco = prompt('Qual o seu endereço?')
const cpf = Number(prompt('Insira seu CPF:'))
let escolaridade = prompt('Qual a sua escolaridade?')
let cnh = confirm('Possui CNH?')
let filhes = Number(prompt('Quantos filhos possui?'))
let cargoAtual = prompt('Qual o seu cargo atual?')
let salario = Number(prompt('Insira seu salário:'))
let comissao = Number(prompt('Recebe comissão? Se simm informe a porcentagem, caso não, responda com zero'))
const anoAdmissao = Number(prompt('Informe o ano de admissão:'))

console.log(typeof(nomeCompleto))
console.log(typeof(dataNascimento))
console.log(typeof(endereco))
console.log(typeof(cpf))
console.log(typeof(escolaridade))
console.log(typeof(cnh))
console.log(typeof(filhes))
console.log(typeof(salario))
console.log(typeof(comissao))
console.log(typeof(anoAdmissao))

console.log(`
Nome completo: ${nomeCompleto}
Data de nascimento: ${dataNascimento}
Endereço: ${endereco}
CPF: ${cpf}
Escolaridade: ${escolaridade}
CNH: ${cnh}
Filhes: ${filhes}
Cargo atual: ${cargoAtual}
Salário: ${salario}
Comissão: ${comissao}
Ano de admissão: ${anoAdmissao}
`)