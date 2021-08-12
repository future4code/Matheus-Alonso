//Questão 1

//let a = 10
//let b = 10

//console.log(b)

//b = 5
//console.log(a, b)

//Respostas questão 1 - Foram criadas strings A e B que os valores podem ser alterados por isso o 'let' e com o valor 10. 
//o console.log ira imprimir o valor de B que é 10 porem logo abaixo é colocado outro valor de B que é 5 e depois um console.log com A e B que vira os valor 10 e 5.
//-----------------------------------------------------------------------------------------------------------------------------

//Questão 2

//let a = 10
//let b = 20
//c = a
//b = c
//a = b

//console.log(a, b, c)

//Respostas questão 2 - Foram criadas Strings A e B "let" valores que podem ser alterados. "A" com valor de 10 e "B" com valor de 20.
//foram colocados Strings C que é = A e Strings B = C e Strings A = B ou seja Quando der o console.log(a, b, c) Vai imprimir 10 10 20.

//------------------------------------------------------------------------------------------------------------------------------
//Questão 3

//let p = prompt("Quantas horas você trabalha por dia?")
//let t = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${t/p} por hora`)

//Respostas questão 3 - Foram criadas Strings "p" e "t" a string "p" vai imprimir Quantas horas você trabalha por dia?.
//já a string "t" vai imprimir a pergunta de Quanto você recebe por dia?.
//logo em seguida é colocada o alert que vai abrir uma caixinha fazendo a conta de quanto eu recebo por hora.
//--------------------------------------------------------------------------------------------------------------

//const nome = 'matheus'
//let idade = 21

//console.log(typeof nome)
//console.log(typeof idade)

//por que esse tipo foi impresso? Respostas = o typeof diz se oque foi escrito é 
//strings, numbers, ou boolengs o typeof é para sabermos indentificar cada um.

//----------------------------------------------------------------------------
//console.log("Qual é o seu nome e sua idade ?:","Meu Nome é", nome, "e tenho" ,idade, "anos.")

//console.log(typeof nome)
//console.log(typeof idade)

//Novamente, imprima na tela o tipo dessas variáveis. 
//O que você notou? Escreva em um comentário de código.
//Respostas: notei que eles continuaram indentificando cada um deles.

//console.log("Olá", nome, "voce tem", idade, "anos.")

//console.log("Você esta usando uma roupa azul hoje? - NÃO")
//console.log("Você esta usando uma verde hoje? - SIM")
//console.log("Você esta usando uma vermelha hoje? - NÃO")

//------------------------------------------------------------------------------

//let a = 10
//let b = 25

//a = 25
//b = 10

//console.log("O novo valor de a é", a) // O novo valor de a é 25
//console.log("O novo valor de b é", b) // O novo valor de b é 10

//--------------------------------------------------------------------------------

// Desafio extra.
const primeiro = prompt ("Qual primeiro numero?")
const segundo = prompt("Qual segundo numero?")

console.log(primeiro)
console.log(segundo)

console.log("O primeiro número somado ao segundo número resulta em:" ,parseInt(primeiro) + parseInt(segundo))
console.log("O segundo número multiplicado pelo segundo número resulta em:", primeiro*segundo)