let a = 10
let b = 25

console.log(`O valor de A é ${a} e o valor de B é ${b}`)

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)