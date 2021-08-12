/* //
1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  = RESPOSTA - FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  = RESPOSTAS - FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) = RESPOSTAS - TRUE

console.log("d. ", typeof resultado) = RESPOSTA - BOOLEAN

RESPOSTAS = FALSE, FALSE, TRUE, BOOLEAN

/*  */
/* 
2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 

Resposta - Ele não colocou o Number apenas escreveu o prompt.
*/

/* 
3. Para o exercício anterior, sugira ao seu 
colega uma solução para que o valor impresso 
no console seja, de fato, a soma dos dois números. 

Resposta- Colocar o Number antes do Prompt!!! Exemplo.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

 */
/* 
Exercicio de escritas de código

1- faça um programa que 

a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */


/* 

RESPOSTA

let idade = Number(prompt("Qual a sua idade ? : "))
let idadeamigo = Number(prompt("Qual a idade do seu melhor amigo ? : "))
let idademaior = ("Sua idade é maior que a do seu amigo ? :  ")

let resultado = idade > idadeamigo
console.log('Sua idade é maior que a do seu amigo? : ', resultado)

let diferenca = idade % idadeamigo
console.log('A Diferença de idade é : ', diferenca) 
*/
/* 

2- Faça um programa que:

a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. 
Você notou um padrão? Escreva em um comentário de código. Resposta = Sim, todos os resultados não vai sobrar nada por ser numero par.
d) O que acontece se o usuário inserir um número ímpar? Resposta = vai aparecer a sobra do numero que ele colocou.
Escreva em um comentário de código
 */

/* 
Codigo do exercicio 2

let numero = Number(prompt("Insira um numero par: "))
let resultado = numero % 2
console.log(resultado) 
*/
/* 

3- Faça um programa que pergunte ao usuário sua idade em anos. 
Depois, imprima no console 
a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas 

Resposta Codigo

const idade = Number(prompt("Quantos anos você tem?: "))
const Meses = 12 * idade
const Dias = 365 * idade
const Horas = 8760 * idade

console.log('Meses: ', Meses)
console.log('Dias: ', Dias)
console.log('Horas: ', Horas)

*/

/* 

4-Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as 
seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.

Resposta:

const primeironumero = Number(prompt("Digite um numero: "))
const segundonumero = Number(prompt("Digite outro numero: "))
const maior = primeironumero > segundonumero
const igual = primeironumero === segundonumero
const divisivel = primeironumero >= segundonumero
const divisils = segundonumero >= primeironumero



console.log('O primeiro numero é maior que segundo?', maior)
console.log('O primeiro numero é igual ao segundo?', igual)
console.log('O primeiro numero é divisível ao segundo?', divisivel)
console.log('O segundo numero é divisível pelo primeiro?', divisils)

 */

